import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  content: string;
  author: string;
  role?: string;
  rating?: number;
  className?: string;
}

export default function Testimonial({
  content,
  author,
  role,
  rating = 5,
  className,
}: TestimonialProps) {
  return (
    <div className={cn('bg-white rounded-xl p-6 shadow-sm border border-gray-100', className)}>
      {/* Rating */}
      {rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5',
                i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              )}
            />
          ))}
        </div>
      )}
      
      {/* Content */}
      <blockquote className="text-gray-700 mb-4 italic">
        "{content}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center">
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          {role && <p className="text-sm text-gray-600">{role}</p>}
        </div>
      </div>
    </div>
  );
}



