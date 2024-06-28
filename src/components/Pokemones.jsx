import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { ObtenerPokemonesAccion,SiguientePokemon } from "../redux/pokeDucks";


const Pokemones = ()=>{

    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.array)
    console.log(pokemones)

    return(
        <div>
            <button onClick={()=> dispatch(ObtenerPokemonesAccion())}>Obtener pokemones</button>
            <button onClick={()=> dispatch(SiguientePokemon(20))}>Siguiente Pokemon</button>
           
        </div>
    )
}

export default Pokemones