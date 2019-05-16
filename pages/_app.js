import App, {Container} from 'next/app'
import '../asserts/styles.less'
import React from 'react'

/**
 * 封装主体页面结构的组件，作为整个App的根
 */
class MyApp extends App {
    render() {
        console.log('MyApp.....')
        const {Component, pageProps} = this.props
        return <Container>
            <Component {...pageProps} />
          </Container>
    }
}

//高阶组件包裹一下，添加侧边栏与顶部页面菜单。
export default MyApp