import React from 'react'
import Cella from './Cella'

function Jatekter(props){
    function katt(adat){
        console.log("JatekTer: ",adat);
        //jatekter katt függvényét kell hivni? -m, egkapta propson keresztül
        props.katt(adat)

    }


    return(
        <>
        {
            props.lista.map((elem,index) =>{
                return (<Cella jel={elem} key={index} index={index} katt={katt}/>)
            }

            )
        }
        </>
    )
}

export default Jatekter