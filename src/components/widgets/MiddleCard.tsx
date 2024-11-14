'use client';

import Card from '../ui/Card';
import CardAnimation from '../animations/CardAnimation';
import GsapAnimation from '../animations/GsapAnimation';

const MiddleCard = () => {
  return (
    <Card>
      <div className="h-full w-full">
        <GsapAnimation />
      </div>
    </Card>
  );
};

export default MiddleCard;
