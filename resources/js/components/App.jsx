import * as React from 'react';
import NavBar from './NavBar';
import Example from "./Example";
import Carousel from "./Main";
import Profile from "./Profile";
import Pets from "./Pets/Pets";
import Signin from "./Sign-in";
import Login from "./Login";
import AddPet  from "./Pets/AddPets";
import EditPet  from "./Pets/EditPets";
import ShoppingCart from "./User/ShoppingCart";
import WhisList from "./User/WishList";
import SearchResult from "./SearchResult";
import AddBussiness from "./MyBussiness/AddMyBussiness";
import Politicas from "./Nosotros/Politicas";
import AboutUs from "./Nosotros/AboutUs";
import Maps from "./Maps/ExampleMaps";
import Product from "./SpecificProduct";
import Paseo from "./Services/Paseo";
import Aseo from "./Services/Aseo";
import Estetica from "./Services/Estetica";
import AddProduct from "./User/AddProduct";

import Bought from "./User/Compras";

import LostPet from "./Pets/MascotaPerdida";

import Test from "./Test";


import { BrowserRouter, Route, Routes, Router} from "react-router-dom"

export default function App() {
    return (
        <div className="App" class="div-main"> 
            <BrowserRouter> 
                <Routes>
                    <Route path="/ProyectoFinal/public/" element={<NavBar />}>
                        <Route index element={<Carousel />}/>
                        <Route path="example" element={<Example />}/>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="pets" element={<Pets />}/>
                        <Route path="signin" element={<Signin />}/>
                        <Route path="login" element={<Login />}/>
                        <Route path="addPet" element={<AddPet />}/>
                        <Route path="editPet" element={<EditPet />}/>
                        <Route path="shoppingcart" element={<ShoppingCart />}/>
                        <Route path="wishList" element={<WhisList />}/>
                        <Route path="result" element={<SearchResult />}/>
                        <Route path="bussiness" element={<AddBussiness />}/>
                        <Route path="politicas" element={<Politicas />}/>
                        <Route path="about-us" element={<AboutUs />}/>
                        <Route path="mapa" element={<Maps />}/>
                        <Route path="producto" element={<Product />}/>
                        <Route path="paseo" element={<Paseo />}/>
                        <Route path="aseo" element={<Aseo />}/>
                        <Route path="estetica" element={<Estetica />}/>
                        <Route path="lostPet" element={<LostPet />}/>
                        <Route path="boughts" element={<Bought />}/>
                        <Route path="result/newproduct" element={<AddProduct />}/>

                        <Route path="test" element={<Test />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );       
}