import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import uploads from "../../../server/public"

const Articles = () => {

const [post, setPost ] = useState([]);
const [ article, setArticle] = useState([])
const navigate = useNavigate()

const deleteArticle = (id )=> {
  axios.delete(`http://localhost:5000/articles/${id}`)
  .then( res => alert(res.data))
  setArticle(article.filter(elm => elm._id !== id));
  setPost(post.filter((val)=> {
    return val._id !== id;
  }))
  navigate("/")

}
useEffect( ()=>{
  axios.get("http://localhost:5000/articles")
  .then( (res)=> setPost(res.data))
  .catch( error => console.log(error))
}, [])
 


  return (
    <ArticlesContainer>
    {!post.length ? ("Data is Loading from server"):
     ( post.map((blog, key) => {
           return ( <div className="container" key={key} >
             <img src={`./public/${blog.articleImage}`} alt="..." />
              <Link to={{
                pathname: `/article/${blog._id}`
              }}>
               <h2>{blog.title}</h2>
              </Link>
               <p>{blog.article}</p>
               <span className='badge' >{blog.authorname}</span>
               <div className="row">
                 <div className="col-sm-2">
                   <Link to={`/update/${blog._id}`}  className="btn btn-outline-success"> Edit</Link>
                 </div>
                 <div className="col-sm-2">
                   <button onClick={ ()=> deleteArticle(blog._id)} className="btn btn-outline-danger"> Delete</button>
                 </div>
              
               </div>
    
               
           </div>
          
           )
      }))}
      
     
    </ArticlesContainer>
  )
}

export default Articles;
const ArticlesContainer = styled.div`
margin-bottom: 10px;
.badge{
  background:green;
  color:black;
  margin-bottom:5px;
}
`;