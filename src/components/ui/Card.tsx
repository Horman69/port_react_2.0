interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`
      bg-neutral-100 
      dark:bg-[#111111] 
      rounded-xl 
      p-6
      h-full
      transition-colors
      duration-200
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;