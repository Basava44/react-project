import React from 'react';

const ProjectSummary = ({project}) => {

    const currentDate = new Date();
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();    
    const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;


    return ( 
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {project.title} </span>
                <p>Posted By Basava</p>
                <p className="gret-text"> on {dateString}</p>
            </div>
        </div>
     );
}
 
export default ProjectSummary;