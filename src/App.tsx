import { Breadcrumb, Layout, Menu, theme } from 'antd'
import './App.css'
import './index.css'

const { Header, Content, Footer } = Layout

const items = new Array(2).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}))

const App = (): JSX.Element => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu
            theme="dark"
            items={items}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb
            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
            style={{ margin: '16px 0' }}
          ></Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,

              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Alandrei Santos &copy;</Footer>
      </Layout>
    </>
  )
}

export default App
