import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import React from "react";
import "./Template.css";

const Template = ({ children }: any) => {
    return (
        <div className="template">
            <header>
                <Navbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Template;