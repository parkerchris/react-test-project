
import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import PropertyCardContainer from './components/PropertyCardContainer';
import MiddleNav from './components/MiddleNav'
import PropertyModal from './components/PropertyModal';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <MiddleNav />
      <PropertyCardContainer />
      <Footer />
      
    </div>
  );
}

export default App;
