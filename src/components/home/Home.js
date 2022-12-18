import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const bgc = useNavigate();
  const navTo = _ => {
    bgc('/bgc');
  };
  return (
    <div style={{ backgroundColor: 'yellow' }}>
      <h1 onClick={navTo} style={{ textAlign: 'center' }}>
        home
      </h1>
    </div>
  );
};

export default Home;
