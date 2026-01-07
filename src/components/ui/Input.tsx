import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          {icon}
        </div>
      )}
      <input
        className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
}
