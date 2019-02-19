import React, { useState, useEffect } from 'react';
import '../semantic/dist/semantic.min.css';
import Projects from '../containers/ProjectsContainer';
import Heading from './Heading';
import Modal from './Modal';
import fire from '../config/fbConfig';
import { timingSafeEqual } from 'crypto';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';

function App() {
  const [user, setUser] = useState({});
  // const authListener = () => {
  //   fire.auth().onAuthStateChanged(member => {
  //     if (member) {
  //       setLogin(member);
  //     } else {
  //       setLogin({});
  //     }
  //   });
  // };
  useEffect(() => {
    const authListener = () => {
      fire.auth().onAuthStateChanged(member => {
        console.log('member', member);
        if (member) {
          setUser(member);
        } else {
          setUser({});
        }
      });
    };
    return authListener;
  });

  return (
    <>
      <Heading />
      <Projects />;
      <SignUp />
      <SignIn />
    </>
  );
}

export default App;
