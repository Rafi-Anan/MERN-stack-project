import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useParams} from 'react-router-dom';

const EditArticle = () => {
    const[ title, setTitle] = useState("");
    const[ authorname, setAuthorname] = useState("");
    const[ article, setArticle] = useState("");
    const params= useParams();
    const handleSubmit = (e)=> {
e.preventDefault();
const articles = {
    title, 
    article, 
    authorname
}
axios.put(`http://localhost:5000/update/${params.id}`, articles)
.then((res)=> console.log(res.data))
.catch( (err)=> console.log(err) )

    };

    useEffect( ()=> {
      axios.get(`http://localhost:5000/articles/${params.id}`)
      .then(( res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorname(res.data.authorname)
      ])
      .catch( err => console.log(err))
      
  }, [])


  return (
    <EditArticleComponent>
    <div className="container">

     <h3 className="form-title">Edit post </h3>
     <form  onSubmit={handleSubmit}  encType='multipart/form-data' method='post' >
  <div className="form-group">
    <label htmlFor="authorName">Author Name</label>
    <input type="text" className='form-control' placeholder="Author Name" value={authorname} onChange={(e)=> setAuthorname(e.target.value)} />
  </div>
  <div className="form-group">
   <label  htmlFor="title"> Title</label>
    <input type="text" className='form-control' placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
    
  </div>
  <div className="form-group">
    <label htmlFor="article">Article Content</label>
    <textarea className="form-control" rows="3" value={article} onChange={(e)=> setArticle(e.target.value)} ></textarea>
  </div>
  
  <button  type="submit" id='post-btn' className="btn btn-primary">
      Update Article
  </button>
</form>
</div>
</EditArticleComponent>
  )
}

export default EditArticle;
const EditArticleComponent = styled.div`
margin: 3rem auto;
padding: 4rem;
width: 31.25rem;

.form-title{
    text-align: center;
}
.btn-primary{
    margin-top: 20px;
    float: right;
}


`;