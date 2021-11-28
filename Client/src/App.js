import React,{createContext,useReducer,useEffect} from 'react';
import Home from './Home';
import {Route,Switch} from 'react-router-dom';
import Contact from './components/Contact';
import AddCart from './components/AddCart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import Navbar1 from './components/Navbar1';
import VisCard from './components/VisCard';
import Banners from './components/Banners';
import Error from './components/Error';
import AllProd from './components/AllProd';
import ClothPg from './components/ClothPg';
import BStore from './components/BStore';



import { initialState,reducer } from '../src/reducer/UseReducer';


  // context api
  export const UserContext = createContext();


const Routing = () => {
  return(

  <Switch>
    
  <Route exact path="/" component={Home}></Route>
  <Route path="/contact" component={Contact}></Route>
  <Route path="/signin" component={SignIn}></Route>
  <Route path="/addcart" component={AddCart}></Route>
  <Route path="/signup" component={SignUp}></Route>
  <Route path="/logout" component={Logout}></Route>
  <Route path="/viscard" component={VisCard}></Route>
  <Route path="/banpogns" component={Banners}></Route>
  <Route path="/aprod" component={AllProd}></Route>
  <Route path="/clobags" component={ClothPg}></Route>
  <Route path="/bstore" component={BStore}></Route>



  <Route  component={Error}></Route>






 </Switch>
  )

}


const App = () => {

  const[state,dispatch] =useReducer(reducer,initialState);
  const showbar = () => {
    var a = document.getElementById('search-nav');
    a.classList.remove('search-hide');

   
    
}

useEffect(() => {
    showbar();

})
 

  return (
    
    <>
    <UserContext.Provider value={{state,dispatch}}>
       <Navbar1/>
       <Routing/>
        </UserContext.Provider>
    </>



  );
};


export default App;