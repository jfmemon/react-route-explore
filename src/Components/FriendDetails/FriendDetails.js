import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h1>This is friend details page.</h1>
            <h3>Name: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Company: {friend.company.catchPhrase}</p>
        </div>
    );
};

export default FriendDetails;