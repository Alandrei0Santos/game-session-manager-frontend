import './App.css'
import './index.css'
import { GameStart } from './pages/GameStart'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GameSessionForm } from './pages/GameSessionForm'
import { GameSessionList } from './pages/GameSessionList'

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameStart></GameStart>} />
          <Route path="/game-session" element={<GameSessionForm></GameSessionForm>} />
          <Route path="/game-session-list" element={<GameSessionList></GameSessionList>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
