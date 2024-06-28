import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

//Constantes

const dataInicial = {
    array :[]
}

//type

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'

//Reducer

export default function PokeReducer(state = dataInicial,action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return{...state,array: action.payload}
    }
}

//Actions-Consumir la api

export const ObtenerPokemonesAccion = () => async(dispatch, getState) =>{
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    }
    catch(error){
        console.log(error)
    }
}