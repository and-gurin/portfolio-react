import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my_works/MyWorks";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Testimony} from "./testimony/Testimony";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Testimony/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
