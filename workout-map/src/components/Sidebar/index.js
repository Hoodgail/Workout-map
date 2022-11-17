import React from 'react';
import Login from '../Login';

function Sidebar() {
  // function

  return (
    <div className="sidebar">
      <ul className="workouts">
        <Login />
      </ul>

      <p className="copyright">
        &copy; Copyright by
        <a href="https://github.com/AaronLiuXM"> Aaron</a>,
        <a href="https://github.com/Hoodgail"> Hoodley</a>,
        <a href="https://github.com/srich92"> Shantel</a>
      </p>
    </div>
  );
}

export default Sidebar;
