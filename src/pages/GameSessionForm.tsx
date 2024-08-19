import { useState } from 'react'
import { Form, Input, Button, Card, Select, InputNumber, message } from 'antd'
import { GoBackButton } from '../components/GoBackButton'
import { createGameSession, CreateSessionData } from '../api/gameSessionManager'

export const GameSessionForm = (): JSX.Element => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState<boolean>(false)

  const onFinish = async (values: CreateSessionData) => {
    setLoading(true)
    try {
      await createGameSession(values)
      message.success('Game session created successfully')
      form.resetFields()
    } catch (error) {
      message.error('Failed to create game session')
    } finally {
      setLoading(false)
    }
  }

  // Define the options for the Select component
  const modeOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ]

  return (
    <Card
      styles={{ body: { padding: '1rem' } }}
      className="w-full max-w-[800px] bg-[#000] !p-0 rounded-md border-0"
    >
      <div className="bg-[#3a3958] min-h-[700px] flex flex-col items-center justify-center w-full h-full">
        <GoBackButton isAbsolute={true} />
        <Form
          form={form}
          className="max-w-[500px] flex flex-col w-full pl-1 pr-1"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Hostname"
            name="hostname"
            rules={[{ required: true, message: 'Please input the hostname!' }]}
          >
            <Input size="large" placeholder="Hostname" />
          </Form.Item>

          <Form.Item
            label="Players"
            name="players"
            rules={[{ required: true, message: 'Please input the number of players!' }]}
          >
            <InputNumber className="w-full" size="large" placeholder="Players" min={1} />
          </Form.Item>

          <Form.Item
            label="Map"
            name="mapSpawn"
            rules={[{ required: true, message: 'Please input the map name!' }]}
          >
            <Input size="large" placeholder="Map" />
          </Form.Item>

          <Form.Item
            label="Mode"
            name="gameMode"
            rules={[{ required: true, message: 'Please select the game mode!' }]}
          >
            <Select size="large" style={{ width: 200 }} options={modeOptions} />
          </Form.Item>

          <div className="relative bottom-[-30px]">
            <Form.Item className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="font-pressStart"
                loading={loading}
                disabled={loading}
              >
                {'Save session'.toUpperCase()}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Card>
  )
}
