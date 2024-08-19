import { Card, message, Table } from 'antd'
import { GoBackButton } from '../components/GoBackButton'
import { GameSession, listGameSessions } from '../api/gameSessionManager'
import { useState, useEffect } from 'react'

export const GameSessionList = (): JSX.Element => {
  const [dataSource, setDataSource] = useState<GameSession[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessions = await listGameSessions()
        const sessionsWithKeys = sessions.map((session) => ({
          ...session,
          key: session.sessionId,
        }))

        setDataSource(sessionsWithKeys)
        console.log(sessionsWithKeys)
      } catch (error) {
        message.error('Failed to load game sessions')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const columns = [
    {
      title: 'Hostname',
      dataIndex: 'hostname',
      key: 'hostname',
    },
    {
      title: 'Players',
      dataIndex: 'players',
      key: 'players',
    },
    {
      title: 'Map',
      dataIndex: 'mapSpawn',
      key: 'mapSpawn',
    },
    {
      title: 'Mode',
      dataIndex: 'gameMode',
      key: 'gameMode',
    },
  ]

  return (
    <Card
      styles={{ body: { padding: '1rem' } }}
      className="w-full max-w-[800px] bg-[#000] !p-0 rounded-md border-0"
    >
      <GoBackButton />
      <Table loading={loading} dataSource={dataSource} columns={columns} />
    </Card>
  )
}
