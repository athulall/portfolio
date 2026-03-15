// import React from 'react'
// import './Hero.css'
// import image from '../assets/image.png';

// const Hero = () => {
//   return (
//     <div>
//         <section id='home'>
//             <div className='mainhero'>



//                 <div className='left-side'>
//                     <h1 className='txt'>Hi I'm Athul</h1><br></br>
//                     <h1 className='txt'>FULL STACK DEVELOPER</h1><br></br>
//                     <p className="para1">i build responsive web application using modern technologies
//                     like react javascript nodejs bootstrap and many modern languages</p>
//                     <div className=" lft-btn">
//                         <button className='lbn' >contact me</button>
//                         <button className='rbtn' >details</button>

//                     </div>
//                 </div>


//                 <div className=' right-side'>

//                     <img
//                 src={image}
//                  alt="developer illustration"
//                  className="img-fluid rounded-circle shadow-sm" />



//                 </div>








//             </div>





//         </section>




//     </div>
//   )
// }

// export default Hero







import React from "react";
import "./Hero.css";
import image from "../assets/image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="mainhero">

        {/* LEFT SIDE */}
        <div className="left-side">

          <h1 className="hover-text">Hi I'm Athul</h1>
          <h1 className="hover-text">FULL STACK DEVELOPER</h1>

          <p className="para1">
            I build responsive web applications using modern technologies
            like React, JavaScript, Node.js, Bootstrap and many modern frameworks.
          </p>

          <div className="lft-btn">
            <button className="lbn">Contact Me</button>
            <button className="rbtn">Details</button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">

          <div className="avatar-container">

            <div className="ring"></div>

            <img src={image} alt="developer" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;