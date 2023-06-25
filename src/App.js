import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar';
import Userlisting from './components/UserListing';
import UserDetails from './components/UserDetails';
import { useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { SetUsers } from './redux/actions/Useractions'
import { useSelector } from 'react-redux/es/hooks/useSelector';



function App() {
  const dispatch = useDispatch()
  const [tem, settemp] = useState(null)

  const fetchusers = async () => {
    const response = await axios.get("https://reqres.in/api/users?page=1&per_page=5").catch((err) => { console.log("arjbf  akerbfka    ", err) })
    console.log(response.data,"Response")
    settemp(response.data.data)
    
    dispatch(SetUsers(response.data.data))
  }


  useEffect(() => {
    fetchusers()
  }, [])
  const ans=useSelector((state)=>state.allproducts.users)

  return (
    <BrowserRouter>
    <Navbar  text='React Assignment'/>
    <Routes>
    <Route path='/' exact element={<Userlisting temp={tem}/>}></Route>
    {ans.length && <Route path='/users/:userid' exact Component={UserDetails}></Route>}
    <Route>404 User Not Found</Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
