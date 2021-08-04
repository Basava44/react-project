// export const createProject = (project) => {
//     return (dispatch, getState, { getFirebase,getFirestore }) =>{
//         // push data to firebase
//         const firestore = getFirestore();
//         firestore.collection('projects').add({
//             ...project,
//             authorFirstName:"karibasava",
//             authorLastName:"TG",
//             authorId:1234,
//             createdAt: new Date()         //after it updates it gives dummy callbackfunction
//         }).then(()=>{
//             dispatch({type:'CREATE_PROJECT', project});
//         }).catch((err)=>{
//             dispatch({type:'CREATE_PROJECT_ERROR',err});
//         })
//     }
// }; 

export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
      const firestore = getFirebase().firestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Karibasaveshwara',
        authorLastName: 'TG',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project: project })
      }).catch((error) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error: error })
      })
    }
  };