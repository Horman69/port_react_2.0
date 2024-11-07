import ProfileCard from './components/widgets/ProfileCard';
import SecondaryCard from './components/widgets/SecondaryCard';
import MiddleCard from './components/widgets/MiddleCard';
import NewCard from './components/widgets/NewCard';
import ExtraCard from './components/widgets/ExtraCard';
import ProjectsCard from './components/widgets/ProjectsCard';
import SkillsCard from './components/widgets/SkillsCard';
import ContactCard from './components/widgets/ContactCard';
import BlogCard from './components/widgets/BlogCard';
import DecorationCard from './components/widgets/DecorationCard';

function App() {
  return (
    <div className="min-h-screen bg-black p-16">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-3">
        {/* Первая секция */}
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-2 h-[300px]">
            <ProfileCard />
          </div>
          <div className="col-span-1 h-[300px]">
            <MiddleCard />
          </div>
          <div className="col-span-1 row-span-2 h-[calc(600px+0.75rem)]">
            <SecondaryCard />
          </div>
          
          <div className="col-span-1 h-[300px]">
            <NewCard />
          </div>
          <div className="col-start-2 col-span-2 h-[300px]">
            <ExtraCard />
          </div>
        </div>

        {/* Вторая (зеркальная) секция */}
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-1 row-span-2 h-[calc(600px+0.75rem)]">
            <DecorationCard />
          </div>
          <div className="col-span-1 h-[300px]">
            <SkillsCard />
          </div>
          <div className="col-span-2 h-[300px]">
            <ProjectsCard />
          </div>
          
          <div className="col-start-2 col-span-2 h-[300px]">
            <BlogCard />
          </div>
          <div className="col-span-1 h-[300px]">
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;