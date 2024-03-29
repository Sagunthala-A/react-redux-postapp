import { FETCH_POSTS_STARTED,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE } from "./actionType";

// create action creators for every action
// action will be object and acntion creator will be function
// action creator function should return an action object

export function fetchPostsStarted(){
    return {
        type: FETCH_POSTS_STARTED
    }
}

export function fetchPostsSuccess(data){
    return{
        type: FETCH_POSTS_SUCCESS,
        payload:data
    }
}

export function fetchPostsFailure(error){
    return{
        type: FETCH_POSTS_FAILURE,
        payload:error
    }
}