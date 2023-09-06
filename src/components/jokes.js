import React ,{useEffect, useReducer} from 'react';
import reducer, {inititalState} from '../reducers/jokeReducer';
import  { fetchJoke }  from '../actions/jokeAction'
import '../joke.css';



const Jokes = () => {

    const [state, dispatch] = useReducer(reducer, inititalState)


useEffect(() => {
 fetchJoke()(dispatch)
},[dispatch] )

const toggleJoke = () => {
  fetchJoke()(dispatch)
}


console.log(state)

    return (
        <div className='main-page' >
            <h1>Have a laugh!</h1>
            <div className='joke-container' >
            {state.loading ? ('loading...') : ( <div> 
            <p> Joke: {state.joke?.setup }</p> 
            <p> Punchline : {state.joke?.punchline}</p>
            <button onClick={toggleJoke}>Make me laugh!</button>
            </div>)}

      <div className='joke-box'>
       
      </div>
            </div>
        </div>
    )

}
export default Jokes;

     
   