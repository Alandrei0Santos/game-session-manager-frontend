import { Button, Card, ConfigProvider } from 'antd'
import img from '@assets/imgs/controller.png'
import { useNavigate } from 'react-router-dom'

export const GameStart = (): JSX.Element => {
  const usePixelBgStyle = (color: string): React.CSSProperties => {
    return {
      '--pixel-bg-color': color,
    } as React.CSSProperties
  }

  const navigate = useNavigate()

  return (
    <>
      <Card
        style={usePixelBgStyle('#4279a2')}
        styles={{ body: { padding: '0.5rem' } }}
        className="pixel-corners w-full max-w-[800px] mx-8 bg-[#4a95ce] rounded-none !p-0 "
      >
        <div style={usePixelBgStyle('#d8f9ec')} className="pixel-corners p-2">
          <div
            style={{ color: '#f9feec' }}
            className="font-pressStart text-center text-[3.5rem] 500px:text-[2rem] leading-normal"
          >
            {'Game Session Manager'.toUpperCase()}
          </div>
          <div className="flex flex-col items-center">
            <img src={img} className="max-w-[420px]" alt="" />
            <div className="flex flex-col gap-2">
              <ConfigProvider
                theme={{
                  token: {
                    // After hover
                    colorPrimary: '#e46dee',
                    colorText: '#fff',

                    // Initial bg color
                    colorBgContainer: '#6c5a95',
                  },
                }}
              >
                <Button
                  onClick={() => navigate('/game-session')}
                  className="pixel-btn-corners  h-[60px] p-2 font-pressStart text-sm"
                  type="default"
                >
                  {'New game session'.toUpperCase()}
                </Button>
                <Button
                  onClick={() => navigate('/game-session-list')}
                  className="pixel-btn-corners h-[60px] p-2 font-pressStart text-sm"
                  type="default"
                >
                  {'List game sessions'.toUpperCase()}
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}
