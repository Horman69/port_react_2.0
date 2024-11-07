import Card from '../ui/Card';

interface SkillsCardProps {
  className?: string;
}

const SkillsCard = ({ className }: SkillsCardProps) => {
  return (
    <Card className={className}>
      <div className="h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Навыки</h2>
      </div>
    </Card>
  );
};

export default SkillsCard;
