import React from 'react';

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono text-sm tracking-wide rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-amber text-charcoal hover:bg-amber/90',
    destructive: 'bg-red-600 text-white hover:bg-red-500',
    outline:
      'border border-[rgba(255,255,255,0.12)] text-warm-white hover:bg-surface-hover hover:border-amber/40',
    secondary:
      'bg-surface-1 text-warm-white hover:bg-surface-hover border border-[rgba(255,255,255,0.08)]',
    ghost: 'text-muted-text hover:text-warm-white hover:bg-surface-hover',
    link: 'text-amber underline-offset-4 hover:underline',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-xs',
    lg: 'h-11 px-8',
    icon: 'h-10 w-10',
  };

  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.default;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
