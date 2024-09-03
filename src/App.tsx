import './App.css'
import './index.css'
import { GameStart } from './pages/GameStart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GameSessionForm } from './pages/GameSessionForm'
import { GameSessionList } from './pages/GameSessionList'
import { ConfigProvider, Layout, theme } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'

const { darkAlgorithm } = theme

const App = (): JSX.Element => {
  return (
    <>
      <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
        <Layout className="min-h-screen bg-[#3b2c3f]">
          <Content className="flex justify-center items-center font-roboto">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<GameStart></GameStart>} />
                <Route path="/game-session" element={<GameSessionForm></GameSessionForm>} />
                <Route path="/game-session-list" element={<GameSessionList></GameSessionList>} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
          </Content>
          <Footer className="text-center text-lg bg-[#3b2c3f] text-[#fff] !p-2">Alandrei Santos &copy;</Footer>
        </Layout>
      </ConfigProvider>
    </>
  )
}

export default App
