


function UzduotysCard(props){

    return (

        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
               {props.children}
            </div>
        </div>


    );

}

export default UzduotysCard;