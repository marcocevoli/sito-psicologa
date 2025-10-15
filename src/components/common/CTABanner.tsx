import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTABannerProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTABanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = 'primary',
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        'py-16',
        variant === 'primary' && 'bg-gradient-to-r from-primary-50 to-pastel-blue/30',
        variant === 'secondary' && 'bg-gray-50',
        className
      )}
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryAction.href}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>{primaryAction.text}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="btn-outline"
              >
                {secondaryAction.text}
              </Link>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
              <a
                href="tel:+393331234567"
                className="flex items-center space-x-2 hover:text-primary-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+39 333 123 4567</span>
              </a>
              <a
                href="mailto:info@maria-rossi-psicologa.it"
                className="flex items-center space-x-2 hover:text-primary-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@maria-rossi-psicologa.it</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

