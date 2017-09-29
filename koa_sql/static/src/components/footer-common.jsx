import React from 'react'
import ReactDOM from 'react-dom'
import {Layout} from 'antd'
import 'antd/lib/layout/style/css'
const { Footer } = Layout

class FooterCommon extends React.Component {
    render () {
        return (
            <Footer style = {{textAlign:'center'}}>
                Hello World @2017 Created by hello world
            </Footer>
        )

    }
}

export default FooterCommon