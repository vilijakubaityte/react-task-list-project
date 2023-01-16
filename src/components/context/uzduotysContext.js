import React, {useEffect} from "react";
import { useState } from "react";


const UzduotysContext=React.createContext({
   products:[
       {pavadinimas:"Kažkokia užduotis", tipas:"Skubus"}
   ],
   pridetiUzduoti:(product)=>{},
   trintiUzduoti:(index)=>{}
});


    export const UzduotysContextProvider=(props)=>{
        
        const [uzduotys, setUzduotys]=useState([]);


        const issaugotiUzduotis=()=>{
            localStorage.setItem("uzduotys", JSON.stringify(uzduotys));
        }
    
        const pridetiUzduoti=(uzduotis)=>{
            console.log('kvieciam');
            uzduotys.push(uzduotis);
            console.log(uzduotis);
            issaugotiUzduotis();
            setUzduotys(Array.from(uzduotys));
        };

        const trintiUzduoti=(index)=>{
            uzduotys.splice(index, 1);
            issaugotiUzduotis();
            setUzduotys(Array.from(uzduotys));
        }

        useEffect(()=>{
            const data = localStorage.getItem("uzduotys");
                if (data!=null){
                const initUzduotys=JSON.parse(data);
                setUzduotys(initUzduotys);
                console.log("Užkraunu prekes");
            }
        },[]);

        return (
            <UzduotysContext.Provider value={
                {
                    products:uzduotys,
                    pridetiUzduoti: pridetiUzduoti,
                    trintiUzduoti: trintiUzduoti
                }
            }>
            {props.children}
            </UzduotysContext.Provider>
        );
     }


export default UzduotysContext;