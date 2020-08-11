const initialState = {
    pokemon: []
}

const GET_POKEMON = 'GET_POKEMON'

export function getPokemon (pokemonArr){
    return {
        type: GET_POKEMON,
        payload: pokemonArr
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_POKEMON:
            console.log("PAYLOAD", action.payload)
            return {...state, pokemon: action.payload }
        default:
            return state
    }
}