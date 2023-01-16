import PridetiUzduoti from "./inner/pridetiUzduoti";
import "./inner/pridetiUzduoti.css";
import UzduociuSarasas from "./inner/uzduociuSarasas";
import UzduotysContext from "./context/uzduotysContext";

function Uzduotys(props){

    // let initValue=[
    //     {pavadinimas:"Nuvalyti dulkes"},
    //     {pavadinimas:"Išnešti šiukšles"},
    // ];

    // const [uzduotis, setUzduotis]=useState(initValue);

    // useEffect(()=>{
    //     const data = localStorage.getItem("uzduotis");
    //     if (data!=null){
    //         const initValue=JSON.parse(data);
    //         setUzduotis(initValue);
    //         console.log("Užkraunu prekes");
    //     }
    // },[]);


    // const issaugotiUzduotis=()=>{
    //     localStorage.setItem("prekes", JSON.stringify(uzduotis));
    // }



    // const pridetiUzduoti=(uzduotys)=>{
    //     uzduotis.push(uzduotys);
    //     issaugotiUzduotis();
    //     setUzduotis(Array.from(uzduotis));
    // };
    

    // const trintiUzduoti=(index)=>{
    //     uzduotis.splice(index, 1);
    //     issaugotiUzduotis();
    //     setUzduotis(Array.from(uzduotis));
    // }


    return (
        <div className="row md-6 d-flex justify-content-center gap-3">
            <div className="col-md-6" id="pridetiUzduoti">
                <PridetiUzduoti></PridetiUzduoti>
            </div>
            <div className="col-md-5">
                <UzduociuSarasas></UzduociuSarasas>
            </div>
    
        </div>
    )


}

export default Uzduotys;