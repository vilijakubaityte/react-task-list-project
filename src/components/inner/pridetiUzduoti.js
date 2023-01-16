import UzduotysCard from "../ui/uzduotysCard";
import "./pridetiUzduoti.css";
import {useState, useContext} from "react";
import UzduotysContext from "../context/uzduotysContext";


function PridetiUzduoti(props) {

    const initValue={
        pavadinimas:"",
        tipas:""
    };

    const [uzduotis, setUzduotis]=useState(initValue);
    const [uzduotisTouched, setUzduotisTouched]=useState(false);
    const uzduotysCtx=useContext(UzduotysContext);
    const isUzduotisInValid=uzduotis.pavadinimas=="";
    
    console.log(initValue);

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if (isUzduotisInValid) return;
        console.log(uzduotis);
        uzduotysCtx.pridetiUzduoti(uzduotis);
        // props.onPridetiUzduoti(uzduotis);
        setUzduotis(initValue);
        setUzduotisTouched(false);
    }

    const onPavadinimasChange=(event)=>{
        console.log(event.target.value);
        setUzduotis( {
            ...uzduotis,
            pavadinimas: event.target.value,
        } );
    }

    const onSelectChange=(event)=>{
        console.log(event.target.value);
        setUzduotis({
            ...uzduotis,
            tipas: event.target.value,
        } );
    }


    return (
        <UzduotysCard title="Pridėti užduotį">
            <form onSubmit={onFormSubmit} className="form">
                <div className="mb-3">
                    <label className="form-label">Užduotis</label>
                    <input type="text" className="form-control" onBlur={ ()=>setUzduotisTouched(true) } onChange={onPavadinimasChange} value={uzduotis.pavadinimas}></input>
                    { isUzduotisInValid && uzduotisTouched? <div className="alert alert-danger">Užduotis neteisinga</div>: ""}</div>
                <div className="my-4">
                    <label className="form-label" id="label">Užduoties tipas:</label>
                    <select className="task" id="task" 
                    onChange={onSelectChange} value={uzduotis.tipas}>
                        <option value="">Pasirinkite užduoties tipą</option>
                        <option value={"Skubus"}>Skubus</option>
                        <option value={"Ypač skubus"}>Ypač skubus</option>
                        <option value={"Rutininis"}>Rutininis</option>
                        <option value={"Neskubus"}>Neskubus</option>
                    </select>
                </div>
                <button className="btn" id="btn">Pridėti užduotį</button>
            </form>
        </UzduotysCard>


    );



}

export default PridetiUzduoti;