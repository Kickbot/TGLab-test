import './landing.css';
import { useEffect } from 'react';

const LandingPage = () => {


  useEffect(() => {
    document.body.classList.remove('page');
    document.body.classList.add('home');
  });

  return (
      <h1>Landing page</h1>
  )
};

export default LandingPage;