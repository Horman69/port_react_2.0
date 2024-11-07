import Card from '../ui/Card';
import SimpleScene from '../3d/SimpleScene';

const DecorationCard = () => {
    return (
    <Card>
        <div className="h-full w-full">
        <SimpleScene />
        </div>
    </Card>
    );
};

export default DecorationCard;
