import { FETCH_POSTS_STARTED,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "../actions/actionType";

const initialState = {
    loading:false,
    data:[],
    error:""
} 

function postReducer(state=initialState, action){
    switch(action.type){

        case FETCH_POSTS_STARTED :
            return {...state, loading:true}
            // in here we need to return the new state.
            // so that's why we spread the state after that we made changes in state properties

        case FETCH_POSTS_SUCCESS :
            return {...state, loading:false, data:action.payload, error:""}

        case FETCH_POSTS_FAILURE : 
            return {...state, loading:false, data:[], error:action.payload}
        
        default : return state
    }
}

export default postReducer;