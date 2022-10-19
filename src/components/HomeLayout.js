

import React from 'react';

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Header from './Header';




export default function HomeLayout() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Header />
                
            </div>
       <div>
                     <Outlet />
               </div>
        </>

    )
}