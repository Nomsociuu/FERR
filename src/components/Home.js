// Home.js
import React from 'react';

function Home() {
  return (
    <div className="text-center my-5">
      <img
        src="images/learning_online.jpg"
        alt="Online Courses"
        className="img-fluid"
        style={{ maxWidth: '100%' }}
      />
      <h2 className="text-primary mt-4">Welcome to Online Courses</h2>
      <p className="mt-3">
        Explore a wide variety of online courses and discover new learning opportunities!
      </p>
    </div>
  );
}

export default Home;
