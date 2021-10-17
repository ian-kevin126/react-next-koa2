import App, { Container } from 'next/app'
import 'antd/dist/antd.css'
import React from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import PageLoading from '../components/PageLoading'

class MyApp extends App {
  // 自定义App组件必须要做的步骤——重写getInitialProps方法，App组件的getInitialProps比较特殊，能拿到一些额外的参数
  // 注意的是：每次页面切换都会执行这个方法
  // Component: 被包裹的组件
  static async getInitialProps(ctx) {
    const { Component } = ctx
    let pageProps = {}

    // 拿到Component上定义的getInitialProps
    if (Component.getInitialProps) {
      // 执行拿到返回结果`
      pageProps = await Component.getInitialProps(ctx)
    }

    // 返回给组件
    return {
      pageProps,
    }
  }

  state = {
    context: 'value',
    loading: false,
  }

  startLoading = () => {
    this.setState({
      loading: true,
    })
  }

  stopLoading = () => {
    this.setState({
      loading: false,
    })
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
          <Layout>
            {this.state.loading && <PageLoading />}
            {/* 把pageProps解构后传递给组件 */}
            <Component {...pageProps} />
          </Layout>
      </Container>
    )
  }
}

export default MyApp
