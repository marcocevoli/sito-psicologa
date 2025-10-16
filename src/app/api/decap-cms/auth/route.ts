import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new NextResponse('Missing GITHUB_CLIENT_ID environment variable', { status: 500 });
  }

  const requestUrl = new URL(request.url);
  const state = requestUrl.searchParams.get('state') ?? '';
  const scope = requestUrl.searchParams.get('scope') ?? 'repo,user';
  const login = requestUrl.searchParams.get('login');
  const redirectUri = `${requestUrl.origin}/api/decap-cms/callback`;

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', scope);

  if (state) {
    authorizeUrl.searchParams.set('state', state);
  }

  if (login) {
    authorizeUrl.searchParams.set('login', login);
  }

  return NextResponse.redirect(authorizeUrl.toString());
}
