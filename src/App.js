import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import './App.css';
// import UserProfile from './Components/UserProfile';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Personal } from './Components/PersonalDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" component={UserProfile} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/personal" element={<Personal/>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
