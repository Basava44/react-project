import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Mario Plan</Link>
                { links }
            </div>
        </nav>
     );
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth
    }
}
 
export default connect(mapStateToProps)(Navbar);