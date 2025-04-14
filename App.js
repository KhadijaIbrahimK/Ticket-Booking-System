import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from './Components/Loginpage';
import Homepage from './Components/Homepage';
import Adduser from './Components/Adduser';
import Viewuser from './Components/Viewuser';
import Bookaride from './Components/Boookaride';
import Addpackage from './Components/Addpackage';
import Viewpackage from './Components/Viewpackage';
import Ridedetails from './Components/Ridedetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/home-page" element={<Homepage />} />
      <Route path="/add-user" element={<Adduser/>}/>
      <Route path="/view-user" element={<Viewuser/>}/>
      <Route path="/book-ride" element={<Bookaride/>}/>
      <Route path="/add-package" element={<Addpackage/>}/>
      <Route path="/view-package" element={<Viewpackage/>}/>
      <Route path="/ride-details" element={<Ridedetails/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;