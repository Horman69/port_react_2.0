interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`
      bg-[#111111] 
      rounded-xl 
      p-6
      h-full
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;