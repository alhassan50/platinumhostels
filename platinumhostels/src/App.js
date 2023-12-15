import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
import Hostel from './pages/hostels';
import HostelDetail from './pages/hostels/hosteldetail';
import Team from './pages/team';
import Login from './pages/login';
import BookNow from './pages/booknow';

//components
import ScrollToTop from './shared/components/ScrollToTop';


//layouts
import Main from './shared/layouts/main';

//styles
import './styles/App.css';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Main/>}>
    <Route index element={<Home/>} />
    <Route path='home' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='hostels'>
      <Route index element={<Hostel/>} />
      <Route path=':hostelName' element={<HostelDetail/>} />
    </Route>
    <Route path='ourteam' element={<Team/>} />
    <Route path='login' element={<Login/>} />
    <Route path='booknow' element={<BookNow/>} />

    <Route path='*' element={<h1>404</h1>} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
