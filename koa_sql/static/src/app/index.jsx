import React from 'react'
import ReactDOM from 'react-dom'
import {Layout,Menu,Breadcrumb} from 'antd'
import 'antd/lib/layout/style/css'

const {Header,Content,Footer} = Layout
import HeadNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'
import FormGroup from './../components/form-group'
class App extends React.Component{
    render(){
        return(
            <Layout className="layout">
                <HeadNav />
                <Content style={{padding:'0 50px'}}>
                    <Breadcrumb style={{margin:'12px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>                        
                    </Breadcrumb>  
                    <div style = {{ background: '#fff', padding:24, minHeight: 280}}>
                        <FormGroup />
                    </div>                  
                </Content>
                <FooterCommon/>                   
            </Layout>         
        )
    }
}
export default App
