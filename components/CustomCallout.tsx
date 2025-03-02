'use client';

import { InfoIcon } from 'lucide-react';

interface CustomCalloutProps {
  type?: 'info' | 'warning' | 'error';
  children: React.ReactNode;
}

export function CustomCallout({ type = 'info', children }: CustomCalloutProps) {
  const bgColor = {
    info: 'bg-blue-50',
    warning: 'bg-yellow-50',
    error: 'bg-red-50',
  }[type];

  const textColor = {
    info: 'text-blue-800',
    warning: 'text-yellow-800',
    error: 'text-red-800',
  }[type];

  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-md flex items-start gap-2`}>
      <InfoIcon className="w-5 h-5 flex-shrink-0" />
      <div>{children}</div>
    </div>
  );
}