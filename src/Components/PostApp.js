import { useEffect } from "react";
import { fetchPostsStarted,fetchPostsSuccess,fetchPostsFailure } from "../redux/actions/postActions";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

const PostApp = ()=>{

    // const state = useSelector(state=>state)
    const {loading,data,error} = useSelector(state=>state)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPostsStarted())
        axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
        .then(response => dispatch(fetchPostsSuccess(response.data)))
        .catch(error => dispatch(fetchPostsFailure(error.message)))
    },[])

    return(
        <div>
            <h1>POST APP</h1>
            {
                data.length>0 && data.map(post =>(
                    <div key={post.id}
                        style={{border:"2px solid wheat",
                                padding:"10px",
                                margin:"10px"
                            }}
                    >
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PostApp;