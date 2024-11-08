'use client';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`
      bg-primary-light dark:bg-primary
      text-primary dark:text-primary-light
      rounded-xl 
      p-6
      h-full
      border border-secondary-light dark:border-secondary
      hover:border-accent-light dark:hover:border-accent
      hover:shadow-lg
      transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;