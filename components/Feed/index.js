import { Row, Col, Modal, Typography, Button, Tag, Layout } from 'antd'
import { useEffect, useState } from 'react'
import { EyeOutlined, EyeFilled } from '@ant-design/icons'
import { useRouter } from 'next/router'
import axios from 'axios'

const { Title } = Typography
const { Footer } = Layout

export default function Feed() {
  const router = useRouter()
  const [movies, setMovies] = useState([])
  const [selected, setSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(async () => {
    const movies = await axios.get(
      'https://api.apipop.net/list?sort=seeds&short=1&cb=&quality=720p,1080p,3d&page=1&ver=100.0.0.0.&os=windows&app_id=T4P_ONL',
    )
    setMovies(movies.data.MovieList)
  }, [])

  const selectCover = data => {
    console.log(data)
    setSelected(data)
    setModalVisible(true)
  }

  const modalCancel = () => {
    setSelected({})
    setModalVisible(false)
  }

  return (
    <>
      <Row>
        <Col span={18} offset={3}>
          <Row gutter={24}>
            {movies.map((movie, index) => {
              return (
                <Col span={4} className="cover" key={index} onClick={() => selectCover(movie)}>
                  <img src={movie.poster_med} width="100%" />
                  <p>{movie.title}</p>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
      <Modal title={''} visible={modalVisible} onCancel={modalCancel} width={900} footer={null} centered>
        <Row gutter={24}>
          <Col span={10}>
            <img src={selected?.poster_big} width="100%" />
          </Col>
          <Col span={14}>
            <Title>{selected?.title}</Title>
            <p>
              <Tag color="#108ee9">{selected?.year}</Tag>
              <Tag>{selected?.rating}</Tag>
            </p>
            <p>{selected?.description}</p>
            <Button
              type="primary"
              icon={<EyeOutlined />}
              size="large"
              style={{ marginRight: 10 }}
              onClick={() => {
                router.push('/cover/1')
              }}
            >
              Ver Agora
            </Button>
            <Button type="primary" icon={<EyeFilled />} size="large" ghost>
              Trailer
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  )
}
