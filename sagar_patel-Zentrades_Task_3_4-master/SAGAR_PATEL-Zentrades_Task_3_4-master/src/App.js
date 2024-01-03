// import logo from './logo.svg';
import './App.css';
import DashBoard from './components/task4';
import Login from './components/task3' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
