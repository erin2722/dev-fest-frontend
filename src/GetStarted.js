import React from 'react';
import './App.css';
import styled from "styled-components";
import BackgroundImage from './calendar3.jpg';
import InputForm from './InputForm.js';


const Wrap = styled.div`
  color: black;
  font-size: 50px;
  height: 100vh;
  width: 100%;
  
  background-size: cover;
  font-family: 'Nunito Sans', sans-serif;
`;


const NavBar = styled.div`
  background-color: white;
  float: right;
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #ecf0f1;
  text-align: right;
  height: 3%;
  width: 100%;
  font-size: 16px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
  padding-right: 6rem;
  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  a:hover {
    color: #16a085;
  }
`;

const Title = styled.div`
  float: left;
  padding-left: 15rem;
  font-size: 20px;
  font-family: 'Rubik', sans-serif;
  display: inline-block;
`;

const Body = styled.div`
  font-size: 30px;
  float: left;
  padding-left: 9rem;
  padding-right: 20rem;
  padding-top: 2rem;
  font-weight: 700;
  color: 	black;
  word-spacing: 1px;
  font-family: 'Nunito Sans', sans-serif;
  
  fade-in {
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;

const BodyText = styled.div`
  font-size: 20px;
  padding-top: 30px;
  float: left;
  padding-left: 9rem;
  color: black;
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  width: 77%;
  flex-direction: column;
  fade-in {
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;

const BlockQuote = styled.div`
  font-size: 20px;
  color: black;
  padding-top: 30px;
  padding-left: 5rem;
  padding-right: 15rem;
  display: flex;
  font-family: 'Nunito Sans', sans-serif;

  fade-in {
    animation: fadeIn ease 1.5s;
    -webkit-animation: fadeIn ease 1.5s;
    -moz-animation: fadeIn ease 1.5s;
    -o-animation: fadeIn ease 1.5s;
    -ms-animation: fadeIn ease 1.5s;
  }
  @keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity:0;
    }
    100% {
      opacity:1;
    }

`;

const Image = styled.div`
padding: 30px 25px 0px 25px;
// display: flex;
// & > img {
//     display: flex;
//     height: 100px;
//     width: auto;
// }
`;

const Bodytextcontainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

function App() {
    var tasks = ['hi', 'there', 'shruti is the best']
=======
`;

// const BlockQuote = styled.div`
//   font-size: 20px;
//   color: black;
//   padding-top: 30px;
//   padding-left: 5rem;
//   padding-right: 15rem;
//   display: flex;
//   font-family: 'Nunito Sans', sans-serif;

//   fade-in {
//     animation: fadeIn ease 1.5s;
//     -webkit-animation: fadeIn ease 1.5s;
//     -moz-animation: fadeIn ease 1.5s;
//     -o-animation: fadeIn ease 1.5s;
//     -ms-animation: fadeIn ease 1.5s;
//   }
//   @keyframes fadeIn {
//     0% {
//       opacity:0;
//     }
//     100% {
//       opacity:1;
//     }
//   }
  
//   @-moz-keyframes fadeIn {
//     0% {
//       opacity:0;
//     }
//     100% {
//       opacity:1;
//     }
//   }
  
//   @-webkit-keyframes fadeIn {
//     0% {
//       opacity:0;
//     }
//     100% {
//       opacity:1;
//     }
//   }
// `;
// const Image = styled.div`
//     padding: 30px 25px 0px 25px;
// `;

// const Bodytextcontainer = styled.div`
//     width: 100%;
//     height: auto;
//     display: flex;
//     flex-direction: row;
// `;

function App() {
  var tasks = ['physics pset', 'discrete pset', 'data structures pset'];
  return (
    <Wrap>
      <NavBar>
        <Title> TIMESORT </Title>
        <a href="/"> Home </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href="/AboutUs"> About Us </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/GetStarted"> Get Started</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </NavBar>
       <InputForm tasks = {tasks} />
    </Wrap>
  );
}

export default App;
