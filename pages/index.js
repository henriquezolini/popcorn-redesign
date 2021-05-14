import { Menu, Row, Col, Typography, Button } from 'antd'
import { EyeOutlined, HomeOutlined, DownloadOutlined } from '@ant-design/icons'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import PageHeader from 'components/PageHeader'
import Feed from 'components/Feed'

const { Title } = Typography

export default function Home() {
  return (
    <>
      <Feed />
      {/* <Row>
        <ReactPlayer className="react-player" url="/Harry.Potter.e.a.Pedra.Filosofal.2001.1080p.mp4" controls={true} />
      </Row> */}
    </>
  )
}
