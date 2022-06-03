
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './authentication/PrivateRoute';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
import Review from './pages/Dashboard/Review';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import MyPortfolio from './pages/MyPortfolio';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp/SignUp';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <Navbar>   
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
       
        <Route path='dashboard' element={
          <PrivateRoute>
            <Dashboard/>
          </PrivateRoute>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}>
        </Route>
      </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
