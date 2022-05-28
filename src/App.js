
import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import PropertyCardContainer from './components/PropertyCardContainer';
import MiddleNav from './components/MiddleNav'
import PropertyModal from './components/PropertyModal';
import Footer from './components/Footer';
import FooterTop from './components/FooterTop';

function App() {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <MiddleNav />
      <PropertyCardContainer />
      <FooterTop />
      <Footer />
      
    </div>
  );
}

export default App;
