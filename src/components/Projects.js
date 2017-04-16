import React, { Component } from 'react';
import ProjectItems from './ProjectItems';
// import uuid from 'uuid';
class Projects extends Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     nop: {
    //     //         id: uuid.v4(),
    //     //         count: -1
    //     //     }
    //     // }
    // }

    handleDel(id){
        this.props.del(id);
    }

    render() {
        var i=0;
        let a = this.props.projects.map(b => {
            i++;
            return (


                <ProjectItems project={b} count={i} del={this.handleDel.bind(this)}/>
            );
        });

        return (
            <div className="Projects">
                <p>Here is a list of awesome projects</p>
                {a}
            </div>
        );
    }
}

export default Projects;
