import { useQuery } from '@apollo/client';
import React from 'react';
import "../styles/profile.css";
import ProPic from "../img/profile.svg";
import { QUERY_ME } from '../utils/queries';
import { QUERY_COMMUNITY } from '../utils/queries';


const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME);
    const {} = useQuery(QUERY_COMMUNITY);

    if (loading) {
        return (
            <>
                Loading...
            </>
        )
    }

    const profileData = data?.me || {}
    // const profileData = data?.community || {}
    console.log(profileData._id)
    console.log(profileData.email)
    console.log(profileData.username)

    return (
        <>
            <p>Profile Page</p>
            Id: {profileData._id}
            <br/>
            Email: {profileData.email}
            <br/>
            Username: {profileData.username}
            <br/>
            Community: {profileData.name}
        </>
    );
};

export default Profile