import * as React from 'react';
import NavBar from './NavBar';
import Example from "./Example";
import Carousel from "./Main";
import Profile from "./Profile";
import Signin from "./Sign-in";
import Login from "./Login";
import ShoppingCart from "./User/ShoppingCart";
import WhisList from "./User/WishList";
import SearchResult from "./SearchResult";
import Politicas from "./Nosotros/Politicas";
import AboutUs from "./Nosotros/AboutUs";
import Product from "./SpecificProduct";
import ShowProduct from './SpecificProduct';

import Bought from "./User/Compras";


import Test from "./Test";

import AddAddress from './addAddress';


import { BrowserRouter,  Route, Routes, Router} from "react-router-dom"

export default function App() {
    return (
        <div className="App" class="div-main"> 
            <BrowserRouter> 
                <Routes>
                    <Route path="/ProyectoFinal/public/" element={<NavBar />}>
                        <Route index element={<Carousel />}/>
                        <Route path="example" element={<Example />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="signin" element={<Signin />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="shoppingcart" element={<ShoppingCart />}/>
                        <Route path="wishlist" element={<WhisList />}/>
                        <Route path="result" element={<SearchResult />}/>
                        <Route path="politicas" element={<Politicas />}/>
                        <Route path="about-us" element={<AboutUs />}/>
                        <Route path="producto" element={<Product />}/>

                        <Route path=":productoS" element={<SearchResult />}/>

                        <Route path="boughts" element={<Bought />}/>
                        <Route path="result/:pro" element={<ShowProduct/>}/>
                        <Route path="addAddress" element={<AddAddress />}/>

                        <Route path="test" element={<Test />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );       
}