import ProfileCard from './components/widgets/ProfileCard';
import SecondaryCard from './components/widgets/SecondaryCard';

function App() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <ProfileCard />
          </div>
          <div>
            <SecondaryCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;