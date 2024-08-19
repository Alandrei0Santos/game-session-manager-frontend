import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

interface TopLeftPosition {
  isAbsolute?: boolean
}

export const GoBackButton = ({ isAbsolute = false }: TopLeftPosition): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={`p-2 ${isAbsolute && 'self-start justify-self-start absolute top-[15px]'}`}>
      <Button size="large" onClick={() => navigate('/')} icon={<ArrowLeftOutlined style={{ fontSize: '25px' }} />}>
        {'Go back'}
      </Button>
    </div>
  )
}
