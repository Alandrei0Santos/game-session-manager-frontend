import { Form, Input, Button, Card, Select, SelectProps } from 'antd'
import { GoBackButton } from '../components/GoBackButton'

interface GameSessionRequest {
  hostname: string
  players: number
  map: string
  mode: string
}

export const GameSessionForm = (): JSX.Element => {
  const onFinish = (values: any) => {
    console.log('Form values:', values)
    // Handle form submission here
  }

  const options: SelectProps['options'] = []

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    })
  }

  return (
    <Card
      styles={{ body: { padding: '1rem' } }}
      className="w-full max-w-[800px]  bg-[#000] !p-0 rounded-md border-0 "
    >
      <div className="bg-[#3a3958]  min-h-[700px] flex flex-col items-center justify-center w-full h-full">
        <GoBackButton isAbsolute={true} />
        <Form className="max-w-[500px] flex flex-col w-full " layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Hostname"
            name="hostname"
            rules={[{ required: true, message: 'Please input the hostname!' }]}
          >
            <Input size="large" placeholder={'Hostname'} />
          </Form.Item>

          <Form.Item
            label="Players"
            name="players"
            rules={[{ required: true, message: 'Please input the amount of players!' }]}
          >
            <Input size="large" placeholder={'Players'} />
          </Form.Item>

          <Form.Item label="Map" name="map" rules={[{ required: true, message: 'Please input the map name!' }]}>
            <Input size="large" placeholder={'Map'} />
          </Form.Item>

          <Form.Item
            label="Mode"
            name="mode"
            rules={[{ required: true, message: 'Please select the game mode!' }]}
          >
            <Select size="large" style={{ width: 200 }} options={options} />
          </Form.Item>
          <div className="relative bottom-[-30px]">
            <Form.Item className="flex justify-center">
              <Button type="primary" htmlType="submit" size="large" className="font-pressStart">
                {'Save session'.toUpperCase()}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Card>
  )
}
