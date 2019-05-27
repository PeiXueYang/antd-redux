import React,{Component} from 'react';
import {
    Route,
  } from "react-router-dom";
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        // console.log(this.props)
    }
    render() {
        return (
            <div>
                {
                  this.props.routes ?  this.props.routes.map((routes,index)=>{
                   return  <Route  key={index} path={routes.path} component={routes.component} ></Route>
                   })
                   :""
               }
            </div>
        );
    }
}

export default User;