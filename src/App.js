
import './App.css';
import Properties from './pages/Properties';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/properties" element={<Properties/>}/>
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
