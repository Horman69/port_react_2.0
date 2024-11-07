import Card from '../ui/Card';

interface ContactCardProps {
  className?: string;
}

const ContactCard = ({ className }: ContactCardProps) => {
  return (
    <Card className={className}>
      <div className="h-full flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white">Контакты</h2>
      </div>
    </Card>
  );
};

export default ContactCard;
