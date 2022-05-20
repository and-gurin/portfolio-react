import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my_works/MyWorks";
import {JobOptions} from "./job_options/JobOptions";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <JobOptions/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
