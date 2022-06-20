import React, { useState} from 'react';
import styled from "styled-components";
import {  useNavigate} from 'react-router-dom';
import axios from 'axios';

const Addarticle = () => {
    const[ title, setTitle] = useState("");
    const[ authorname, setAuthorname] = useState("");
    const[ article, setArticle] = useState("");
    const navigate = useNavigate();
    const [ fileName, setFilename] = useState('')
    

    const handleFile = (e)=> {setFilename(e.target.files[0])
    console.log(e.target.files[0])
    }

    const handleSubmit = (e)=> {
e.preventDefault();
   
const formData = new FormData();
formData.append("title", title);
formData.append("article", article);
formData.append("authorname", authorname);
formData.append("articleImage", fileName);

axios.post("http://localhost:5000/add/", formData)
.then((res)=> console.log(res.data)

)
.catch( (err)=> console.log(err) )
// navigate("/")

    };

  return (
    <AddArticle>
    <div className="container">

     <h3 className="form-title">Add a new post </h3>
     <form onSubmit={handleSubmit}    encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="authorName">Author Name</label>
    <input type="text" className='form-control' placeholder="Author Name" onChange={(e)=> setAuthorname(e.target.value)} />
  </div>
  <div className="form-group">
   <label  htmlFor="title"> Title</label>
    <input type="text" className='form-control' placeholder='Title'  onChange={(e)=> setTitle(e.target.value)} />
    
  </div>
  <div className="form-group">
    <label htmlFor="article">Article Content</label>
    <textarea className="form-control" rows="3"  onChange={(e)=> setArticle(e.target.value)} ></textarea>
  </div>
  <div className="form-group">
    <label htmlFor="file">upload Image</label>
    <input type="file" className='form-control-file' accept='image'  filename="articleImage" onChange={handleFile} />
  </div>

  <button   type="submit" id='post-btn' className="btn btn-primary">
      Post Article
  </button>
</form>
</div>
</AddArticle>
  )
}

export default Addarticle;
const AddArticle = styled.div`
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