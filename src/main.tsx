import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ConfigProvider, Layout, theme } from 'antd'
const { darkAlgorithm } = theme
const { Content, Footer } = Layout

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
      <Layout className="min-h-screen bg-[#3b2c3f]">
        <Content className="flex justify-center items-center font-roboto">
          <App />
        </Content>
        <Footer className="text-center text-lg bg-[#3b2c3f] text-[#fff] !p-2">Alandrei Santos &copy;</Footer>
      </Layout>
    </ConfigProvider>
  </StrictMode>
)
