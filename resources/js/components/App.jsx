import * as React from 'react';
import NavBar from './NavBar';
import Example from "./Example";
import Carousel from "./Main";
import { BrowserRouter, Route, Routes, Router} from "react-router-dom"

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/ProyectoFinal/public/" element={<NavBar />}>
                        <Route index element={<Carousel />}/>
                        <Route path="example" element={<Example />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );       
}