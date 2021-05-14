import { Row, Col, Typography } from 'antd'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const { Title } = Typography

export default function Home() {
  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          {/* <ReactPlayer
            className="react-player"
            url="/Harry.Potter.e.a.Pedra.Filosofal.2001.1080p.mp4"
            controls={true}
            width="100%"
            height="1000"
          /> */}
        </Col>
      </Row>
    </>
  )
}
