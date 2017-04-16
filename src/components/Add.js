import React, { Component } from 'react';
import uuid  from 'uuid'
class Add extends Component{
    static defaultProps = {
        levels :['Begginer','Intermediate','Expert']
    }

    handleAdd(e){
        e.preventDefault();
        var item = {id: uuid.v4(), title: this.refs.title.value, level : this.refs.level.value};
        this.props.add(item);
    }

    render(){
        let a = this.props.levels.map(b=>{
            return(
                <option value={b}>{b}</option>
            )
        });

        return(
            <div className='Add'>
                <form onSubmit={this.handleAdd.bind(this)}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" ref='title' /><br />
                    <select ref='level'>
                        {a}
                    </select><br />
                    <input type='submit'  value='submit'/>
                </form>
            </div>
        )
    }
}

export default Add;