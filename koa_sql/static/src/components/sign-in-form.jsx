import React from 'react'
import 'babel-polyfill' 
import ReactDOM from 'react-dom'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import { signInApi } from './../api/sign-in'
// import { signInApi } from './../api/sign-in'

const FormItem = Form.Item
// 通用 model{name:,gender:,password:''} -> 表单里的字段
const SignInForm = Form.create()(React.createClass({
    async handleSubmit (e) {
        console.log(e)
        e.preventDefault()
        var values = await this.getFormValues()
        if (values) {
            //  console.log(values)
             let result = await signInApi(values)
            //  跑通前端业务
             if (result.login == 'success') {
                 message.success('登陆成功')
             } else {
                 message.error(result.message);
             }
        } else {
            // var values = {name: 'admin001', password: '123456' }
            // let result = await signInApi(values)
            message.error('系统繁忙,稍后再看！')
        }
    },
    getFormValues () {
        // 表单的验证 
        // username -> 数据库是否有
        return new Promise((resolve, reject) => {
            // 由框架提供
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    resolve(values)
                } else {
                    reject (false)
                } 
            })
        })
    },
    render () {
        const { getFieldDecorator } = this.props.form
        // console.log(this.props.form)
        return (
            <div style={{width: "280px", margin: "0 auto"}}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, 
                            message: '请输入账号名称!'}]
                        })(
                            <Input addonBefore={<Icon type="user" />} 
                            placeholder="请您输入用户名称!"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, 
                            message: '请输入账号密码!'}]
                        })(
                            <Input addonBefore={<Icon type="lock" />} 
                            type="password" placeholder="请您输入用户名称!"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <a className="login-form-forgot">忘记密码</a>
                        <Button 
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        确定</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}))
export default SignInForm
