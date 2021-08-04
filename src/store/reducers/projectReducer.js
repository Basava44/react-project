
const initState = {
    projects: [
        {id:'1',title:'Help me',content:'blah blah balh'},
        {id:'2',title:'Move me',content:'blah blah balh'},
        {id:'3',title:'Find me',content:'blah blah balh'}
    ]
}

const projectReducer = (state = initState, action) =>{
    
    switch(action.type){
        case "CREATE_PROJECT": 
            console.log("project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error", action.error);
            return state;
        default:
            return state;
    }
}

export default projectReducer