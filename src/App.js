import logo from './logo.svg';
// import './App.css';
import Login from './component/Login';
import BankAccount from './component/BankAccount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/bank' element={<BankAccount/>}/>
    
    </Routes>
   
    </BrowserRouter>
    
  );
}

export default App;
