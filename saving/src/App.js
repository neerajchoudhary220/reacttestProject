import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Profile from './pages/Profile';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>} />
    <Route path='/parks' element={<Parks/>} />
    <Route path='/profile' element={<Profile/>} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
