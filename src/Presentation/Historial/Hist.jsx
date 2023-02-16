import React from "react";
import PlatosReg from "./PlatosReg";
import Categorias from "./Categorias";
import NavBarRest from "../NavBarRest"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Hist(){
    const [listpr, setListPr] = useState([])
    const [listcr, setListCr] = useState([])

    const getCrAsyncAwait = async function(){
        try {
            const response = await fetch("http://localhost:8000/endpoints/hist/cat")
            const data = await response.json()
            setListCr(data.Categorias)
        } catch ({error}) {
            console.console.error("Error obteniendo historial");
        }
    }

    const getPrAsyncAwait = async function(ctg){
        try {
            const response = await fetch(`http://localhost:8000/endpoints/hist/plato?categoria=${ctg}`)
            const data = await response.json()

            if (data.error ==="") {
                setListPr(data.platos)
            }else{
                console.error(data.error)
            }

        } catch (error) {
            console.console.error("Error de comunicación");      
        }
    }
    const location = useLocation()
    const navigaate = useNavigate()
    useEffect(function(){
        getCrAsyncAwait()
        getPrAsyncAwait(-1)
    },[])


    return(<main>
    <NavBarRest />
    <div className="bg-light cont-hist">
        <div>
            <h2>Categorias registradas</h2>
            <Categorias categorias = {listcr} />
            </div>
        
        <div>
            <h2>Platos registradoss</h2>
            <PlatosReg platos = {listpr} />
        </div>
    </div>    
    </main>
    )
}
export default Hist