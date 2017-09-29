import React from 'react'
import ReactDOM from 'react-dom'
import {Layout,Menu,Breadcrumb} from 'antd'
import 'antd/lib/layout/style/css'
import FormGroup from './../components/form-group.jsx'
import HeadNav from './../components/header-nav.jsx'
import FooterCommon from './../components/footer-common.jsx'

const { Content } =Layout
class App extends React.Component {
    render () {
        return (
            <Layout className="layout">
                <HeadNav></HeadNav>
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