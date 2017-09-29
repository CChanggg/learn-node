import React from 'react'
import ReactDOM from 'react-dom'
import SignInForm from './../components/sign-in-form.jsx'
import SignUpForm from './../components/sign-up-form.jsx'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
 
class FormGroup extends React.Component {
    render () {
        return (
            <div style={{width:"640px",margin:"0 auto"}}>
                <Tabs defaultActiveKey="1" size="small">
                    <TabPane tab="登录" key="1">
                        <SignInForm />
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        <SignUpForm />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default FormGroup
