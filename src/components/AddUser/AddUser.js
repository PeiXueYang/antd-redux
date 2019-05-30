import React,{Component} from 'react';
import './AddUser.css'
import { connect } from 'react-redux'
import {ADD_USER} from '../../store/action'
import { Card,Breadcrumb ,
	Form,Input,
  Cascader,
  Select,
  Button,notification
  } from 'antd';
	const { Option } = Select;
	
	const residences = [
		{
			value: '浙江',
			label: '浙江',
			children: [
				{
					value: '杭州',
					label: '杭州',
					children: [
						{
							value: '西湖',
							label: '西湖',
						},
					],
				},
			],
		},
		{
			value: '上海',
			label: '上海',
			children: [
				{
					value: '虹口区',
					label: '虹口区',
					children: [
						{
							value: '龙之梦',
							label: '龙之梦',
						},
					],
				},
			],
		},
	];
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
					autoCompleteResult: [],
					confirmDirty: false,
				 };
		}
   componentDidMount(){
		  //  console.log(this.props)
	 }
		handleSubmit = e => {
			e.preventDefault();
			this.props.form.validateFieldsAndScroll((err, values) => {
				if (!err) {
					const {dispatch } = this.props
					const action = {
						 ...ADD_USER,payload:{
							userName:values.userName,
							phone:values.phone,
							email:values.email,
							address:values.residence.join('/'),
					 }
					}
					dispatch(action)
					notification.success({
						message: '恭喜!',
						description:
							'添加用户成功.',
					});
					this.props.history.push("/user/userlist");
				}
				else{
					
					
				}
			});
		};
	
		handleConfirmBlur = e => {
			const value = e.target.value;
			this.setState({ confirmDirty: this.state.confirmDirty || !!value });
		};
	

		validateToNextPassword = (rule, value, callback) => {
			const form = this.props.form;
			if (value && this.state.confirmDirty) {
				form.validateFields(['confirm'], { force: true });
			}
			callback();
		};
	
		   
    render() {
				const { getFieldDecorator } = this.props.form;
				const prefixSelector = getFieldDecorator('prefix', {
					initialValue: '86',
				})(
					<Select style={{ width: 70 }}>
						<Option value="86">+86</Option>
						<Option value="87">+87</Option>
					</Select>,
				);
				const formItemLayout = {
					labelCol: {
						sm: { span: 1 },
					},
					wrapperCol: {
						sm: { span: 10},
					},
				};
		  
        return (
            <div className='addUser'> 
							<Breadcrumb  className='Breadcrumb' style={{marginBottom:20,marginTop:10}}>
									<Breadcrumb.Item>
										<a href="/">用户管理</a>
									</Breadcrumb.Item>
									<Breadcrumb.Item>
										<a href="/">添加用户</a>
									</Breadcrumb.Item>
							</Breadcrumb>
							 <Card  className='card'>
								  <Form  {...formItemLayout}   onSubmit={this.handleSubmit} className='Form'>
									<Form.Item  label="用户名"	>
											{getFieldDecorator('userName', {
												rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
											})(<Input style={{ width: 330 }}  placeholder='请输入用户名'/>)}
										</Form.Item>
									 <Form.Item label="手机号" >
											{getFieldDecorator('phone', {
												rules: [{ required: true, message: '请输入手机号' }],
											})(<Input addonBefore={prefixSelector} style={{ width: 330}}  placeholder='请输入手机号'/>)}
										</Form.Item>
										<Form.Item label="邮箱"  className='form-item'>
											{getFieldDecorator('email', {
												rules: [
													{
														type: 'email',
														message: '请输入正确的邮箱地址!',
													},
													{
														required: true,
														message: '请输入邮箱!',
													},
												],
											})(<Input style={{ width: 330}} placeholder='请输入邮箱'/>)}
										</Form.Item>
								
										<Form.Item label="地区" className='form-item' >
											{getFieldDecorator('residence', {
												initialValue: ['上海', '虹口区', '龙之梦'],
												rules: [
													{ type: 'array', required: true, message: '请选择地区!' },
												],
											})(<Cascader options={residences} style={{ width: 330}}  placeholder='请选择所在地区' />)}
										</Form.Item>
									
										<Form.Item >
											<Button type="primary" htmlType="submit" style={{marginLeft:20}}>
												添加
											</Button>
										</Form.Item>
									</Form>
							</Card>
					</div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(AddUser);

export default connect()(WrappedNormalLoginForm) ;
