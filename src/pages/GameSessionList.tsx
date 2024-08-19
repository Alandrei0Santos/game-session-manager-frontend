import { Card, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { GoBackButton } from '../components/GoBackButton'

export const GameSessionList = (): JSX.Element => {
  const navigate = useNavigate()

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '9',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '10',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '12',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '53499',
      map: 'duke nukem',

      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5235423',
      name: 'John',
      map: 'duke nukem',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '32435',
      name: 'John',
      age: 42,
      map: 'duke nukem',
      address: '10 Downing Street',
    },
    {
      key: '534',
      name: 'John',
      map: 'duke nukem',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9878',
      name: 'John',
      map: 'duke nukem',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '667',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      map: 'duke nukem',
    },
    {
      key: '55',
      name: 'John',
      age: 42,
      map: 'duke nukem',
      address: '10 Downing Street',
    },
    {
      key: '234',
      name: 'John',
      map: 'duke nukem',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4353',
      map: 'duke nukem',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '23',
      map: 'duke nukem',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '65',
      name: 'John',
      map: 'duke nukem',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '69',
      name: 'John',
      age: 42,
      map: 'duke nukem',
      address: '10 Downing Street',
    },
  ]

  const columns = [
    {
      title: 'Hostname',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Players',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Map',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Mode',
      dataIndex: 'map',
      key: 'map',
    },
  ]

  return (
    <Card
      styles={{ body: { padding: '1rem' } }}
      className="w-full max-w-[800px]  bg-[#000] !p-0 rounded-md border-0 "
    >
      <GoBackButton />
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  )
}
