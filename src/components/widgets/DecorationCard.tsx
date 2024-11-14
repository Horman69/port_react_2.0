'use client';

import Card from '../ui/Card';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../3d/Scene'), { ssr: false });

const DecorationCard = () => {
  return (
    <Card>
      <div className="h-full w-full">
        {/* <Scene /> */}
      </div>
    </Card>
  );
};

export default DecorationCard;
