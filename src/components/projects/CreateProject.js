// import React, { Component } from 'react';
// import { createProject } from '../../store/actions/projectActions';
// import { connect } from 'react-redux';


// class CreateProject extends Component {
    
//     state ={
//         title : '',
//         content : ''
//     }

//     handelChange = (e) =>{
//         this.setState({
//             [e.target.id] : e.target.value
//         })
//     }

//     handelSubmit = (e) =>{
//         e.preventDefault();
//         this.props.createProject(this.state)
//     }

//     render() {
//         return (
//             <div className="container">
//                 <form onSubmit={this.handelSubmit} className="white">
//                     <h5 className="grey-text text-darken-3">New Project</h5>
//                      <div className="input-field">
//                          <label htmlFor="title">Title</label>
//                          <input type="text" name="title" id="title" onChange={this.handelChange}/>
//                      </div>
//                      <div className="input-field">
//                          <label htmlFor="content">Project Content</label>
//                          <textarea name="content" id="content" className="materialize-textarea" onChange={this.handelChange}></textarea>
//                      </div>
//                      <div className="input-field">
//                          <button className="btn pink lightn-1 z-depth-0">Create</button>
//                      </div>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         createProject: (project) => dispatch(createProject(project))
//     }
// }

// export default connect(null,mapDispatchToProps)(CreateProject)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)