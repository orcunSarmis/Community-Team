import React from 'react';
import Img2 from '../img/img2.jpg'
import Img3 from '../img/img3.jpg'



const Home = () => {
  return (
    <main>
      <div className="">
        <div className="" style={{position:'relative'}}>
        <div className="" style={{position:'absolute'}}>
          <img src={Img2} className="w-100" alt="" />
        </div>
        <div className="" style={{position:'absolute', width:'100%', top:'10rem', textAlign:'center', background:'#201919c4', color:'white'}}>
        <h1>Everthing you need local is <span style={{color:'#a7a376'}}>a click away</span></h1>
        <h1>Everthing you need local is <span style={{color:'#a7a376'}}>CommuniTeam</span></h1>
        </div>
        </div>
        {/* <img src={Img3} className="w-100" alt="" /> */}
      </div>
      <div>
        <p>CommuniTeam exists to help new members to settle down, access the services they need, 
          meet new people and feel welcome. We want to build bridges and create connections to give 
          everyone a chance to take an active role in their community</p>
        </div> 
    </main>  
  );
};

export default Home;
