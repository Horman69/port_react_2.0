import Card from '../ui/Card';

interface BlogCardProps {
  className?: string;
}

const BlogCard = ({ className }: BlogCardProps) => {
  return (
    <Card className={className}>
      <div className="h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Блог</h2>
      </div>
    </Card>
  );
};

export default BlogCard;
