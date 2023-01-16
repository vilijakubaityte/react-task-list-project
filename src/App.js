import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Uzduotys from './components/uzduotys';
import {useState, useEffect} from "react";
import UzduotysContext, {UzduotysContextProvider} from "./components/context/uzduotysContext";
import Footer from './components/footer';



function App() {
  return (
    <div className="body">
      <div className="container">
        <h1 className="my-4">Užduočių sąrašas</h1>
        <UzduotysContextProvider>
        <Uzduotys></Uzduotys>
        <nav className="navbar fixed-bottom bg-body-tertiary">
                <div className="container">
                    <Footer></Footer>
                </div>
            </nav>
      </UzduotysContextProvider>
      </div>
    </div>
  );
}

export default App;
