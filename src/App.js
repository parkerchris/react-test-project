
import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import PropertyCardContainer from './components/PropertyCardContainer';
import MiddleNav from './components/MiddleNav'

function App() {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <BottomNav />
      <PropertyCardContainer />
    </div>
  );
}

export default App;
