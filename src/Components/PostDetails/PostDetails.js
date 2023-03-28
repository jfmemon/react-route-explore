import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const postDetails = useLoaderData();
    console.log(postDetails);
    return (
        <div className='postDetails'>
            <h3>{postDetails.title}</h3>
            <p><small>{postDetails.body}</small></p>
        </div> 
    );
};

export default PostDetails;