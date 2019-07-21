import React from 'react'; 

import './App.sass';

import Employee from './Components/Employees/';

const  App = () => {
  return (
 <>
      <div className="container">
      <div className="py-5 text-center">
        <div className="d-block mx-auto mb-4" >
          <h2 className="text-primary font-weight-bold">CRUD</h2>
        </div>
        <h4 className="text-capitalize">employee management </h4>
        <p  >neat web application for <span className="text-primary">CRUD</span> operations of an employee to the database. </p>
      </div>



      <Employee/>
 

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2019 CRUD</p>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>

</>


   );
}

export default App;
