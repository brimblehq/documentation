import Link from 'next/link'

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`rounded-lg border bg-card p-6 shadow-sm ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <h3 
      className={`flex items-center text-lg font-semibold ${className || ''}`}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={`mt-2 text-muted-foreground ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  )
}

export function CardLink({ 
  className, 
  href, 
  children, 
  ...props 
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`mt-4 inline-block text-sm font-medium text-primary hover:underline ${className || ''}`}
      {...props}
    >
      {children}
    </Link>
  )
} 