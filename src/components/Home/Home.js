import React,{Component} from 'react';
import './Home.css'
import {getCommentList} from '../../api/api'
import { connect } from 'react-redux'
import { Button } from 'antd';
class Home extends Component {
	constructor(props){
		super(props)
	 
    this.state = { 
			  comments:{}
		 }
	}
	test(index){
		console.log(index)
	}
	componentDidMount(){
	//  console.log(this.props)
	//  this.props.dispatch({
	// 				type:'EDIT',
	// 				payload:'测试一下对不对'
	// 			})
	let {dispatch} = this.props
		getCommentList().then(res=>{
			dispatch( {
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
											<div> 邮箱:{item.email} </div>
											<div>内容: 
												<div className='content'>	{item.body} </div>	
											</div>
									</div>
						 )
				})
        return (
            <div className='home'>
							 <h1>Home组件</h1>
							 <Button type='primary' onClick={this.test.bind(this,123)}>  点我试下 </Button>
							 <div>{lists}</div>
						</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
	// console.log(ownProps,'ownProps')
  return {
		comments: state.comments,
	}
}
// 通过 mapDispatchToProps 可以进行事件的派发
// 通过派发一个事情  从而可以改变 state中的 值
// const mapDispatchToProps =( dispatch )=>{
//    return {
// 		postListReducer:dispatch({
// 			type:'EDIT',
// 			payload:'teststs'
// 		})
// 	 }

// }

const mapDispatchToProps = (dispatch, ownProps) => {
	return {dispatch}
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
// const map
// 通过connect连接组件和redux数据,传递state数据和dispatch方法
// export default connect(mapStateToProps,mapDispatchToProps)(Home);
