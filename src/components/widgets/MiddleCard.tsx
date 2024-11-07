import Card from '../ui/Card';

const MiddleCard = () => {
  return (
    <Card>
      <div className="h-full flex items-center justify-center">
        {/* Здесь будет контент средней карточки */}
        <h2 className="text-2xl font-bold">Новая карточка</h2>
      </div>
    </Card>
  );
};

export default MiddleCard;
