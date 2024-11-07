import Card from '../ui/Card';

interface ProjectsCardProps {
  className?: string;
}

const ProjectsCard = ({ className }: ProjectsCardProps) => {
  return (
    <Card className={className}>
      <div className="h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Проекты</h2>
      </div>
    </Card>
  );
};

export default ProjectsCard;