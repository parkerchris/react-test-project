import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import PropertyCardContainer from '../components/PropertyCardContainer';
import MiddleNav from '../components/MiddleNav'
import PropertyModal from '../components/PropertyModal';
import Footer from '../components/Footer';
import FooterTop from '../components/FooterTop';
import React,{ useState } from 'react'

function Properties() {
    
    const [ showPropertyModal, setShowPropertyModal ] = useState(false)

    function handleClick() {
      setShowPropertyModal(prevState => !prevState)
    }
    
    return (
        <div>    
            <TopNav />
            <BottomNav />
            <MiddleNav handleClick={handleClick} />
            { showPropertyModal && <PropertyModal/> }
            <PropertyCardContainer />
            <FooterTop />
            <Footer />
        </div>
    )
}

export default Properties;