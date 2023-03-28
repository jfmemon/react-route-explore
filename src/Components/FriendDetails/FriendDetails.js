import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css';
const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div className='friendDetails'>
            <h1>This is friend/author details page.</h1>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Company: {friend.company.catchPhrase}</p>
        </div>
    );
};

export default FriendDetails;