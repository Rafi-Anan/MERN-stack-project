import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Article = () => {
    const[ title, setTitle] = useState("");
    const[ authorname, setAuthorname] = useState("");
    const[ article, setArticle] = useState("");
    const params = useParams();

    useEffect( ()=> {
        axios.get(`http://localhost:5000/articles/${params.id}`)
        .then( res => [

           setTitle(res.data.title),
            setAuthorname(res.data.authorname),
            setArticle(res.data.article),
    
        ])
        .catch( err => console.log(err))
        
    }, [])

  return (
    <ArticleById>
        <h2>{title}</h2>
        <p>{article}</p>
        <h3>{authorname}</h3>
        <Link to="/" className='btn btn-primary' type="submit"> Back to Home</Link>
    </ArticleById>
  )
}

export default Article;
const ArticleById = styled.div`
text-align: justify;
background: wheat;
font-weight: italic;
border-redious: 10px;
width: 560px;
margin: auto;
padding: 25px;
position: relative;
top:50px;
h2{
    text-align: center;
}
`;