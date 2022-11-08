import * as React from 'react';
import NavBar from './NavBar';
import Example from "./Example";
import Carousel from "./Main";
import Profile from "./Profile";
import Pets from "./Pets/Pets";
import Signin from "./Sign-in";
import Login from "./Login";
import AddPet  from "./Pets/AddPets";

import { BrowserRouter, Route, Routes, Router} from "react-router-dom"

export default function App() {
    return (
        <div className="App">
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
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );       
}