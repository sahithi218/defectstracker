import React,{ Component } from 'react';
import AddDefects from './AddDefects';
import {defects} from './index';

class ViewDefects extends Component{
    constructor(props){
        super();
        this.state = {defects:[], filterDefects: []};
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentDidMount(){
        this.setState(
            {
                defects: defects,
                filterDefects: defects
            }
        )
    }
    changeStatus(event, defect){
        event.preventDefault();
        defect.status = 'closed';   
        
        this.setState({});
        console.log(this.state);

    }
    filter(){
        console.log("Filter");
       this.priority =  this.refs.priority.value;
       this.category = this.refs.category.value;
       let filterDefects = this.state.defects.filter(item => {
           console.log(item)
           if(this.priority !== 'All' && this.category !== 'All')
            return item.priority == this.priority && item.category == this.category;

        if(this.priority !== 'All' && this.category === 'All')
            return item.priority == this.priority;

        if(this.priority === 'All' && this.category !== 'All')
            return item.category == this.category;

        if(this.priority === 'All' && this.category === 'All')
            return true;

       })
       this.setState({filterDefects: filterDefects});
    }
    render(){
        var status = (defect) =>{
            if(defect.status == 'open')
                return <a href="" style={{textDecoration:"none",color:"#03a9f4"}} onClick={(e) => this.changeStatus(e, defect)}>Close Defect</a>
            else
                return <span style={{color: "white"}}>No action pending</span>
        }
        var defectrow = this.state.filterDefects.map((item,i) => {
            return ( 
                <tr key={i}>
                            <td>{item.category}</td>
                            <td>{item.description}</td>
                            <td>{item.priority}</td>
                            <td>{item.status}</td>
                            <td>{status(item)}</td>
                </tr>);
        })
        return(
            <div style={{textAlign:"center"}}>
                <h1> Defect Tracker </h1>
                <a href="" style={{textDecoration:"none",color:"#03a9f4"}}>Logout</a>
                <div>
                    <a href="/addDefects" style={{textDecoration:"none",color:"#03a9f4"}}>Add Defect</a> &nbsp;&nbsp;&nbsp;
                    <a href="/viewDefects" style={{textDecoration:"none",color:"#03a9f4"}}>View Defects</a>
                </div>
                <div style={{border: "1px solid",padding:"15px",margin:"10px"}}>
                    <b>Filter Details</b><br/><br/>
                    <b>Priority</b> &nbsp;&nbsp;&nbsp;
                    <select ref = "priority" onChange={this.filter.bind(this)}>
                        <option value="All">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select><br/><br/>
                    <b>Category</b>&nbsp;&nbsp;&nbsp;
                    <select ref = "category" onChange={this.filter.bind(this)}>
                        <option value="All">All</option>
                        <option value="UI">UI</option>
                        <option value="Functional">Functional</option>
                        <option value="Change Request">Change Request</option>
                    </select><br/>
                </div>
                <div>
                    <b>Defect Details</b>
                    <p style={{color:"red"}}>Search Results: {this.state.defects.length}</p>
                </div>
                <div>
                    <table cellPadding="10" style={{width: "100%"}}>
                        <thead style={{backgroundColor:"#2196f3",color:"white"}}>
                            <tr>
                                <td>Defect Category</td>
                                <td >Description</td>
                                <td >Priority</td>
                                <td >Status</td>
                                <td >Change Status</td>
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor:"#c7c7c7"}}>
                        {defectrow}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewDefects;