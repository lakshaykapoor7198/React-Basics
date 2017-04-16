import React, { Component } from 'react';
// import uuid from 'uuid';
class ProjectItems extends Component {
  
  handleDel(id){
    this.props.del(id);
  }

  render() {
    return (
      <li className="ProjectItems">
        {this.props.count} - {this.props.project.title} - {this.props.project.level} - <a href='#' onClick={this.handleDel.bind(this,this.props.project.id)}>Delete</a>
      </li>
    );
  }
}

export default ProjectItems;
