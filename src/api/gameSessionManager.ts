import axios from 'axios'

export interface GameSession {
  sessionId: string
  hostname: string
  players: number
  mapSpawn: string
  gameMode: string
}

export interface CreateSessionData {
  hostname: string
  players: number
  mapSpawn: string
  gameMode: string
}

const API_BASE_URL = import.meta.env.VITE_BASE_URL

export const createGameSession = async (sessionData: CreateSessionData): Promise<GameSession> => {
  console.log(`${API_BASE_URL}/sessions`, sessionData)

  try {
    const response = await axios.post<GameSession>(`${API_BASE_URL}/sessions`, sessionData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  } catch (error) {
    console.error('Error creating game session:', error)
    throw error
  }
}

export const listGameSessions = async (): Promise<GameSession[]> => {
  try {
    const response = await axios.get<GameSession[]>(`${API_BASE_URL}/sessions`)
    return response.data
  } catch (error) {
    console.error('Error listing game sessions:', error)
    throw error
  }
}
