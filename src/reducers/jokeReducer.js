import {FETCH_JOKE_START, FETCH_JOKE_SUCCESS,FETCH_JOKE_FAILURE} from './../actions/jokeAction';
import data from './../data/dataHolder';


export const inititalState = {
  joke: data,
  loading: false,
  error: null 

}

const  jokeReducer = (state = inititalState, action) => {
    console.log('action recieved:', action ,state )
    switch(action.type) {
    case FETCH_JOKE_START : 
    return {...state, loading: true}

    case FETCH_JOKE_SUCCESS: 
    return {...state, joke: action.payload, loading: false}

    case FETCH_JOKE_FAILURE: 
    return {...state, error: action.payload, loading: false}


        default :
         return state;
    }
    
}
export default jokeReducer;
