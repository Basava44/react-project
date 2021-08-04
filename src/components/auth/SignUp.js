import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';


class SignUp extends Component {
    
    state ={
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    }

    handelChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" id="email" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" id="password" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="firstname">First Name</label>
                         <input type="text" name="firstname" id="firstname" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="lastname">Last Name</label>
                         <input type="text" name="lastname" id="lastname" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <button className="btn pink lightn-1 z-depth-0">Sign Up</button>
                         <div className="red-text center">
                             {authError ? <p>{authError}</p>:null}
                         </div>
                     </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
      auth : state.firebase.auth,
      authError : state.auth.authError
    }
  }

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
