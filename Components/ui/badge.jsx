import React from 'react';

export function Badge({
  children,
  className = '',
  variant = 'default',
  ...props
}) {
  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2';

  const variants = {
    default: 'bg-amber/12 text-amber border border-amber/20',
    secondary:
      'bg-surface-2 text-muted-text border border-[rgba(255,255,255,0.08)]',
    destructive: 'bg-red-600/12 text-red-400 border border-red-500/20',
    outline: 'border border-[rgba(255,255,255,0.12)] text-muted-text',
    emerald: 'bg-emerald-accent/12 text-emerald-accent border border-emerald-accent/20',
  };

  const variantClasses = variants[variant] || variants.default;

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
