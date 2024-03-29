import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions';


class SignIn extends Component {
    
    state ={
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
        this.props.signIn(this.state);
    }

    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to="/" />
        return (
            <div className="container">
                <form onSubmit={this.handelSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" id="email" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="password" name="password" id="password" onChange={this.handelChange}/>
                     </div>
                     <div className="input-field">
                         <button className="btn pink lightn-1 z-depth-0">Login</button>
                         <div className="red-text center">
                            { authError ? <p>{authError}</p> : null }
                         </div>
                     </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authError : state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
