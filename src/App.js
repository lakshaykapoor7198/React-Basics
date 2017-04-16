import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import Add from './components/Add';
import uuid from 'uuid';
import unirest from 'unirest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getTodos(){
    unirest.get("https://jsonplaceholder.typicode.com/todos")
            .end(function(ew){
              // console.log('wfwefwfwhefuwie' +ew.body);
              for(var i=0;i<ew.body.length;i++){
                console.log(ew.body[i].title);
              }
            });
    var url = "https://jsonplaceholder.typicode.com/todos";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if(xhttp.readyState ==4 && xhttp.status==200){
        this.setState({todos:xhttp.response});
      }
    }.bind(this)
    xhttp.open("GET",url,true);
    xhttp.send();
  }

  componentWillMount() {
    this.getTodos();
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'ReactJS',
          level: 'Begginer'
        },
        {
          id: uuid.v4(),
          title: 'NodeJS',
          level: 'Intermediate'
        },
        {
          id: uuid.v4(),
          title: 'AngularJS',
          level: 'Dont know'
        }
      ]
    });
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAdd(id){
    let projects = this.state.projects;
    projects.push(id);
    this.setState(projects);
  }

  handleDel(id){
    console.log(id);
    let projects= this.state.projects;
    for(var i=0;i<projects.length;i++){
      if(projects[i].id===id){
        projects.splice(i,1);
      }
    }
    this.setState(projects);
  }

  render() {
    let style = {
      color: "red"
    }
    return (
      <div className="App">
        <center><h1 style={style} className="hi">{this.props.name}</h1></center>
        <Add add={this.handleAdd.bind(this)}/>
        <Projects  projects={this.state.projects} del={this.handleDel.bind(this)}/>
      </div>
    );
  }
}

export default App;
