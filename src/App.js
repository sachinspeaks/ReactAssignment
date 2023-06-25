import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Userlisting from './components/UserListing';
import UserDetails from './components/UserDetails';

function App() {

  return (
    <BrowserRouter>
    <Navbar  text='React Assignment'/>
    <Routes>
    <Route path='/' exact Component={Userlisting}></Route>
    <Route path='/users/:userid' exact Component={UserDetails}></Route>
    <Route>404 User Not Found</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
