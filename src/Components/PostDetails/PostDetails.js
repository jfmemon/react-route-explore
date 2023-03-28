import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title, body, userId} = postDetails;
    const navigate = useNavigate();
    const getNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    console.log(postDetails);
    return (
        <div className='postDetails'>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={getNavigate}>Show author</button>
        </div> 
    );
};

export default PostDetails;