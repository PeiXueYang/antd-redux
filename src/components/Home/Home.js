import React,{Component} from 'react';
import './Home.css'
import store from '../../store/store'
import {getCommentList} from '../../api/api'
import { connect } from 'react-redux'
class Home extends Component {
	constructor(props){
		super(props)
	
    this.state = {  }
	}
	componentDidMount(){
		getCommentList().then(res=>{
			store.dispatch( {
				type:'success',
				payload: res.data
			})
		})
	}
    render() {
		const {comments} = this.props.comments
		const lists =	comments == null ?'': comments.map((item,index)=>{
					return (
									<div key={index}> 
											<div>id: {item.id} </div>
											<div>用户名: {item.name} </div>
											<div> 邮箱:{item.emil} </div>
											<div>内容: 
												<div className='content'>	{item.body} </div>	
											</div>
									</div>
						 )
				})
        return (
            <div className='home'>
							 <h1>Home组件</h1>
							 <div>{lists}</div>
						</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments
  }
}
// 通过connect连接组件和redux数据,传递state数据和dispatch方法
export default connect(mapStateToProps)(Home);
