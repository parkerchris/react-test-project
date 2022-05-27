import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseBuilding } from '@fortawesome/pro-light-svg-icons'
import { faAddressBook } from '@fortawesome/pro-light-svg-icons'
import { faBrush } from '@fortawesome/pro-light-svg-icons'
import { faPiggyBank } from '@fortawesome/pro-light-svg-icons'
import { faReceipt } from '@fortawesome/pro-light-svg-icons'
import Analytics from './Analytics'






function BottomNav() {
    

   
    
    return (
      <div className="nav-three">
        <div className="nav-three-container">
            <div className="icon-header-container">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHouseBuilding} className="icon" />
                    <p className="icon-header">Properties</p>
                </div>
                
                <div className="icon-container">
                    <FontAwesomeIcon icon={faAddressBook} className="icon" />
                    <p className="icon-header">Tenants</p>
                </div>

                <div className="icon-container">
                    <FontAwesomeIcon icon={faBrush} className="icon" />
                    <p className="icon-header">Maintenance</p>
                </div>

                <div className="icon-container">
                    <FontAwesomeIcon icon={faPiggyBank} className="icon" />
                    <p className="icon-header">Payments</p>
                </div>

                <div className="icon-container">
                    <FontAwesomeIcon icon={faReceipt} className="icon" />
                    <p className="icon-header">Expenses</p>
                </div>
            </div>
            <div>
                <Analytics />
            </div>

            

        </div>
        

        
      </div>
    );
  }
  
  export default BottomNav;