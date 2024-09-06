import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import NavBar from './pages/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import {  Routes, Route } from 'react-router-dom';
function App() {
  return (
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
        </Route>
      </Routes>
  );
}

export default App;
