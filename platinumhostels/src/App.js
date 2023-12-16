import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//pages
import Home from './pages/home';
import About from './pages/about';
import Hostel from './pages/hostels';
import HostelDetail, {loader as HostelLoader} from './pages/hosteldetail';
import Team from './pages/team';
import Login from './pages/login';
import BookNow from './pages/booknow';
import NotFound from './pages/NotFound';


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
      <Route 
        path=':hostelLocation' 
        element={<HostelDetail/>}
        loader={HostelLoader}
        
      />
    </Route>
    <Route path='our-team' element={<Team/>} />
    <Route path='login' element={<Login/>} />
    <Route path='booknow' element={<BookNow/>} />
    <Route path='/notfound' element={<NotFound/>} />

    <Route path='*' element={<NotFound/>} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
