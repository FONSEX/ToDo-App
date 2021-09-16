import React from 'react';
import "../Navbar/Navbar.css";


function Navbar(props) {

    return (

        <React.Fragment>

    <div className="Navbar">
        <div className="container-fluid">
          <div className="Navbar__brand" >
            <span className="Navbar__brand-logo"  > <i class="fas fa-check-double fa-3x text-white" > </i></span>
            <h1 className="font-weight-light">Fon</h1>
            <span className="font-weight-bold">To</span>
            <h1 className="font-weight-light">Do </h1>
        


          </div>
        </div>
      </div>
    


        </React.Fragment>



    )


}

export {Navbar}