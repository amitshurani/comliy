import React from 'react'
import { useEffect ,useState } from 'react'
import axios from 'axios'
import jwt from "jwt-decode";

export default function Comments() {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState({})

    useEffect(()=>{
        async function getData(){
            const {data} = await axios.get('http://localhost:3002/api/comments');
            setComments(data) ;
        }
        getData()
    },[]);

    async function addComment(){
      const token=localStorage.getItem('token')
      let decoded = jwt(token, "thisString")
      await axios.post('http://localhost:3002/api/comments',{name:decoded.name, body:newComment},{headers: {'x-auth-token': `${token}`}});
    }

  return (
    <div>
        <ol>
          {comments.map(comment => 
          <li key={comment._id}>{comment.name}-{comment.body}</li>)}
        </ol>
        <form  className="m-3" onSubmit={()=>addComment()}>
        <div className="mb-3">
          <label className="form-label">body:</label>
          <textarea className="form-control" id="body" rows="3" onChange={(e)=>setNewComment(e.target.value)} ></textarea>
          <button className="btn btn-primary mt-3" type='submit'>add comment</button>  
        </div>
        </form>
    </div>
  )
}