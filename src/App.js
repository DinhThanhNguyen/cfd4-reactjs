import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import './assets/css/style.scss'
import Home from './pages/home';
import Detail from './pages/detail';
import Register from './pages/register';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './pages/project';
import Profile from './pages/profile';
import Page404 from './pages/page404';
import Contact from './pages/contact';
import Demo from './pages/demo';
import PopupLogin from './components/PopupLogin';
import PopupRegister from './components/PopupRegister';
import Loading from './components/Loading';
import CourseList from './pages/home/components/CourseList';
import Team from './pages/team';
import React, { useRef } from 'react';
import AuthProvider from './core/hook/useAuth';
import PrivateRouter from './core/PrivateRouter';


export const Context = React.createContext({});

function App() {
  let refLogin = useRef()
  let refRegister = useRef()

  function openPopupRegister() {
    refLogin.current.style.display = 'none'
    refRegister.current.style.display = 'flex'
  }

  function closePopupRegister() {
    refRegister.current.style.display = 'none'
  }

  function openPopupLogin() {
    refLogin.current.style.display = 'flex'
    refRegister.current.style.display = 'none'
  }

  function closePopupLogin() {
    refLogin.current.style.display = 'none'
  }

  return <AuthProvider>
    <Context.Provider value={{ openPopupLogin, closePopupLogin, openPopupRegister, closePopupRegister }}>
      <BrowserRouter>
        <PopupLogin ref={refLogin} />
        <PopupRegister ref={refRegister} />
        <Header />
        <Loading />
        <Switch>
          <PrivateRouter path="/thong-tin-ca-nhan" component={Profile} />
          <PrivateRouter path="/dang-ky/:slug" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/khoa-hoc" component={CourseList} />
          <Route path="/lien-he" component={Contact} />
          <Route path="/du-an" component={Project} />
          <Route path="/chi-tiet/:slug" component={Detail} />
          <Route path="/" exact component={Home} />
          <Route component={Page404} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Context.Provider>
  </AuthProvider>;
  // return <Register />;

}

export default App;




