import React, { Component } from 'react';
import { defects } from './index';
class AddDefects extends Component{
    constructor(props){
        super();
        this.addDefect = this.addDefect.bind(this);
    }
    addDefect(){
        if(this.refs.categoryValue.value === "" || this.refs.priorityValue.value === "" || this.refs.descriptionValue.value === "" ){
            alert("Category, Description or Priority can't be null");
        }
        else{
       let newDefect = {
           category : this.refs.categoryValue.value,
           priority : this.refs.priorityValue.value,
           description : this.refs.descriptionValue.value,
           status: 'open'
       }
      
       defects.push(newDefect);
      
       this.props.history.push('viewDefects',{
               defects: defects
           })
        }
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                 <h1> Defect Tracker </h1>
                <a href="" style={{textDecoration:"none",color:"#03a9f4"}}>Logout</a>
                <div>
                    <a href="/addDefects" style={{textDecoration:"none",color:"#03a9f4"}}>Add Defect</a> &nbsp;&nbsp;&nbsp;
                    <a href="/viewDefects" style={{textDecoration:"none",color:"#03a9f4"}}>View Defects</a>
                </div>
                <div style ={{textAlign:"center"}}>
                <h3 style={{backgroundColor:"#03A9F4",color:"white"}}>Add Defects </h3>
                <div style={{border:"1px solid #f5f5f5", padding:"10px",backgroundColor :"#f5f5f5"}}>
                    <label>Defect Category</label>&nbsp;
                    <select style={{height: "30px", width: "10%"}} ref = "categoryValue">
                    <option value="" selected disabled hidden>select</option>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select><br/><br/>
                    <label>Description</label>&nbsp;
                    <textarea rows="3" cols="30" placeholder ="Enter Description" ref = "descriptionValue"></textarea><br/><br/>
                    <label >Priority</label>&nbsp;
                    <input type = "text" style={{height: "20px", width: "5%"}} ref = "priorityValue"/><br/><br/>
                <button onClick={this.addDefect}>Add Defect</button>
                </div>
                </div>
            </div>
        );
    }
}

export default AddDefects;