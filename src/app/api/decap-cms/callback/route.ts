import { NextRequest, NextResponse } from 'next/server';

type AccessTokenResponse = {
  access_token?: string;
  scope?: string;
  token_type?: string;
  error?: string;
  error_description?: string;
};

function buildResponseBody(message: string) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Decap CMS Authentication</title>
  </head>
  <body>
    <script>
      (function() {
        function sendMessage(msg) {
          if (window.opener && typeof window.opener.postMessage === 'function') {
            window.opener.postMessage(msg, '*');
          }
        }
        sendMessage(${JSON.stringify(message)});
        window.close();
      })();
    </script>
  </body>
</html>`;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse('Missing GitHub OAuth environment variables', { status: 500 });
  }

  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const state = requestUrl.searchParams.get('state') ?? '';

  if (!code) {
    return new NextResponse('Missing OAuth code parameter', { status: 400 });
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = (await tokenResponse.json()) as AccessTokenResponse;

  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    const errorMessage = tokenData.error_description || 'Unable to fetch GitHub access token';
    const payload = `authorization:github:error:${JSON.stringify({ error: errorMessage, state })}`;
    return new NextResponse(buildResponseBody(payload), {
      status: 400,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }

  const payload = `authorization:github:success:${JSON.stringify({
    token: tokenData.access_token,
    provider: 'github',
    state,
  })}`;

  return new NextResponse(buildResponseBody(payload), {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
