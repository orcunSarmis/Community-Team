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
        <p
          style={{ background: "linear-gradient( 11deg,yellow,green, #811717)" }}
          className="text-center bg-dark text-white fs-4"
        >
          Profile Page
        </p>
        <div className="container ">
          <div className="row">
            <div className="twPc-div">
              <div className="twPc-button"></div>
              <a className="twPc-bg twPc-block"></a>
              <div>
                <a title="" href="" className="twPc-avatarLink">
                  <img alt="" src={ProPic} className="twPc-avatarImg" />
                </a>
                <div className="twPc-divUser">
                  <div className="twPc-divName">
                    <a href="">{profileData.username}</a>
                  </div>
                  <span>

    );
};

export default Profile