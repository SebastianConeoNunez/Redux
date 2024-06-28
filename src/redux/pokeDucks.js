import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

//Constantes

const dataInicial = {
    array :[],
    offset: 0
    
}

//type

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITOS ='SIGUIENTE_POKEMONES_EXITOS'

//Reducer

export default function PokeReducer(state = dataInicial,action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return{...state,array: action.payload}

        case SIGUIENTE_POKEMONES_EXITOS: 
            return {...state,array: action.payload.array, offset:action.payload.offset}
        default:
                return state;
    }
}

//Actions-Consumir la api

export const ObtenerPokemonesAccion = () => async(dispatch, getState) =>{
    console.log('get state', getState().pokemones) //el get state va es a la tienda, y de la tienda tomamos el atributo que me interesa
    const offset = getState().pokemones.offset
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: res.data.results
        })
    }
    catch(error){
        console.log(error)
    }
}


export const SiguientePokemon = (numero) => async(dispatch, getState) =>{
    
    const offset = getState().pokemones.offset
    const siguiente = offset +numero
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${siguiente}`)
        dispatch({
            type:SIGUIENTE_POKEMONES_EXITOS,
            payload: {
                array:res.data.results,
                offset: siguiente
            }
        })
    }
    catch(error){
        console.log(error)
    }
}