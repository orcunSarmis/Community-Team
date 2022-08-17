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
                    <a href="">
                      @<span>{profileData._id}</span> - [{profileData.email}]
                    </a>
                  </span>
                </div>
                <div className="twPc-divStats">
                  <ul className="twPc-Arrange d-flex justify-content-around">
                    <li className="twPc-ArrangeSizeFit">
                      <a href="" title="3 events">
                        <span className="twPc-StatLabel twPc-block">Events</span>
                        <span className="twPc-StatValue">3</span>
                      </a>
                    </li>
                    <li className="twPc-ArrangeSizeFit">
                      <a href="" title="885 Following">
                        <span className="twPc-StatLabel twPc-block">Following</span>
                        <span className="twPc-StatValue">885</span>
                      </a>
                    </li>
                    <li className="twPc-ArrangeSizeFit">
                      <a href="" title="1.810 Followers">
                        <span className="twPc-StatLabel twPc-block">Followers</span>
                        <span className="twPc-StatValue">1.810</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Profile