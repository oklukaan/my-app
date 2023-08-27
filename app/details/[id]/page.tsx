"use client"
import { useState } from "react";
import { Modal } from "reactstrap";

interface DetailPageParams {
    id: number;
  }


const  DetailPage = ({params}:{ params: DetailPageParams } ) =>{
    const [modal,setModal]=useState(false);

    
const toogleModal=()=>{
    setModal(!modal);

}
    console.log("parmas",params)

    return(
        <>
            Detail Page {params.id}
            <button onClick={toogleModal}>Open modal</button>
        {modal && <Modal onClick={toogleModal} />}
        </>
    )

}

export default DetailPage;