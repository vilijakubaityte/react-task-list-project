import UzduotysCard from "../ui/uzduotysCard";
import UzduotysItem from "./uzduotysItem";
import UzduotysContext from "../context/uzduotysContext";
import { useState, useContext } from "react";


function UzduociuSarasas(props){
    const uzduotysCtx=useContext(UzduotysContext);
    //const [pasirinktasTipas,setPasirinktasTipas]=useState("Visi tipai");

    let uzduociuSarasas = [];
        uzduotysCtx.products.forEach((uzduotis, index)=>{

            uzduociuSarasas.push(
             (<UzduotysItem key={index} uzduotis={ {...uzduotis, key:index } } 
                 onTrintiUzduoti={props.onTrintiUzduoti}></UzduotysItem>)
         );
     })

    return (

        <UzduotysCard title="Užduočių sąrašas">
            <ul className="list-group">

                {uzduociuSarasas}

            </ul>
            { uzduotysCtx.products.length==0 ? 
            <div className="alert alert-info">Prekių nėra</div> : "" }
        </UzduotysCard>


    );


}

export default UzduociuSarasas;