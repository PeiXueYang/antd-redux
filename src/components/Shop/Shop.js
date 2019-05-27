import React,{Component} from 'react';
import './Shop.css'
import {
    Route,
  } from "react-router-dom";
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
    }
    render() {
        return (
            <div className='shop'>
               
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

export default Shop;