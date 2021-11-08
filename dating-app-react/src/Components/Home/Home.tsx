import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Section1 } from './Section1';
import { Section2 } from './Section2';
import { Section3 } from './Section3';

export const Home:React.FC<any>=(props:any)=>{
    return(
        <>
        <Header/>
        <Navigation/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>

        </>
    )
}