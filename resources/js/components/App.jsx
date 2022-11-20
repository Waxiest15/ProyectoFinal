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
import SearchResult from "./SearchResult";
import AddBussiness from "./MyBussiness/AddMyBussiness";
import Politicas from "./Nosotros/Politicas";

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
                        <Route path="result" element={<SearchResult />}/>
                        <Route path="bussiness" element={<AddBussiness />}/>
                        <Route path="politicas" element={<Politicas />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );       
}