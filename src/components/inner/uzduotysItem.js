import {useContext} from "react";
import UzduotysContext from "../context/uzduotysContext";

function UzduotysItem(props){

    const uzduotysCtx=useContext(UzduotysContext);


    const onIstrintiClick=()=>{
        uzduotysCtx.trintiUzduoti(props.uzduotis.key);

    }

    return (

        <li className="list-group-item">
                        <div className="row">
                            <div className="col-md-3">{props.uzduotis.pavadinimas}</div>
                            <div className="col-md-3">{props.uzduotis.tipas}</div>
                            <div className="col-md-3">
                                <button className="btn btn-danger" onClick={onIstrintiClick}>
                                Ištrinti
                                </button>
                            </div>
                        </div>
                    </li>
    
    
        )
}

export default UzduotysItem;