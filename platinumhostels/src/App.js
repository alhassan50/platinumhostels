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
import Contact from './pages/contact';
import Login, {loader as LogInLoader} from './pages/login';
import BookNow, {loader as BookNowLoader} from './pages/booknow';
import NotFound from './pages/NotFound';
import Dashboard from './pages/dashboard';
import Profile from './pages/Pofile';
import MyRoomie from './pages/MyRoomie';
import AccountSettings from './pages/AccountSettings';
import Payment from './pages/Payment';
import FAQs from './pages/FAQs';
import Rooms, {loader as RoomsLoader} from './pages/Rooms';
import FAQComponent from './shared/components/FAQComponent';
import ResetPassword from './pages/ResetPassword';


//layouts
import Main from './shared/layouts/main';
import PlatinumPortal, {loader as PlatinumPortalLoader} from './shared/layouts/platinumportal';
import FAQsContainer from './shared/layouts/FAQsContainer';
/* import {bookNow as BookNowLayout} from './shared/layouts/bookNow'; */
import {BooNow as BookNowLayout }  from './shared/layouts/BookNow';

//styles
import './styles/App.css';
import BookingPDF from './pages/dashboard/components/docs/BookingPDF';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
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
          errorElement={<NotFound />}
        />
      </Route>
      <Route path='ourteam' element={<Team/>} />
      <Route path='contact' element={<Contact/>} />
      
      <Route path='faqs' element={<FAQsContainer />}>
        <Route index element={<FAQComponent />} />
      </Route>
      
      <Route path='*' element={<NotFound/>} />
    </Route>

    <Route 
      path="/platinumportal" 
      element={<PlatinumPortal />}
      loader={PlatinumPortalLoader}
    >
      <Route 
        index 
        element={<Dashboard />} 
      />
      <Route 
        path='dashboard' 
        element={<Dashboard />} 
      />
      <Route path='profile' element={<Profile />} />
      <Route path='myroomie' element={<MyRoomie />} />
      <Route path='payment' element={<Payment />} />
      <Route path='booknow' element={<Payment />} />
      <Route path='faqs' element={<FAQs />} />
      <Route path='accountsettings' element={<AccountSettings />} />
      <Route path='*' element={<NotFound/>} />
    </Route>

    <Route 
      path='/login' 
      element={<Login/>}
      loader={LogInLoader}
    />

    <Route path='/pdf' element={<BookingPDF/>} />
    
    <Route 
      path='/resetpassword' 
      element={<ResetPassword/>}
    />

    {/* book now routing */}
    <Route
      path="/booknow" 
      element={<BookNowLayout />}
      /* loader={PlatinumPortalLoader} */
    >
      <Route 
        index 
        element={<BookNow/>} 
        loader={BookNowLoader}
      />  

      <Route 
        index
        path='rooms' 
        element={<Rooms/>} 
        loader={RoomsLoader}
      />    
    </Route>


    <Route path='/notfound' element={<NotFound/>} />    
  </Route>
))


function App() {
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
