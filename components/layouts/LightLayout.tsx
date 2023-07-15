import { FC, ReactNode } from 'react'

interface LightLayoutProps {
  children: ReactNode;
}

const LightLayout: FC<LightLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '5px',
				padding: '10px'
      }}
    >
			<h3>Light Layout</h3>
      <div>
        { children }
      </div>
		</div>
  )
}

export default LightLayout
