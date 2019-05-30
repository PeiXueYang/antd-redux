import React,{Component} from 'react';
import './UserList.css'
import { connect } from 'react-redux'
import { Breadcrumb ,Card,Table,Button
} from 'antd';
import {Link} from 'react-router-dom'
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
		}
		componentDidMount(){
		
		}
    render() {
			const { userList }  = this.props.userList
			const columns = [
					{
						title: '用户名',
						dataIndex: 'userName',
						key: 'userName',
						width:200,
						align:'center'
					},
					{
						title: '手机号',
						dataIndex: 'phone',
						key: 'phone',
						width:200,
						align:'center'
					},
					{
						title: '邮箱',
						key: 'email',
						dataIndex: 'email',
						width:200,
						align:'center'
					},
					{
						title: '地址',
						dataIndex: 'address',
						key: 'address',
						width:400,
						align:'center'
					},
					
					
				];
				for(let i in userList ){
			    	userList[i]['key'] = i
			  }
			// console.log(userList)
				const data = [
					...userList
				];
        return (
            <div>
							  <div>
									<Breadcrumb  className='Breadcrumb' style={{margin:20}}>
											<Breadcrumb.Item>
												<a href="/">用户管理</a>
											</Breadcrumb.Item>
											<Breadcrumb.Item>
												<a href="/">用户列表</a>
											</Breadcrumb.Item>
									</Breadcrumb>
							</div>
							<div style={{padding:20,}}>
							      <Link to='/user/adduser'><Button type='primary'> 添加用户</Button></Link>
								    <Card style={{height:700,marginTop:20}}>
									   	<Table columns={columns} dataSource={data}  bordered pagination={false} />
										</Card>
							</div>
						</div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {

  return {
		userList: state.userList,
	}
}


export default connect(mapStateToProps,) (UserList);
