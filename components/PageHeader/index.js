import { Row, Col, Menu, Input } from 'antd'

const { Search } = Input

export default function PageHeader() {
  return (
    <Row style={{ marginBottom: 25, marginTop: 50 }}>
      <Col span={18} offset={3}>
        <Row>
          <Col span={5}>
            <img src="https://popcorn-time.tw/images/logo.png" />
          </Col>
          <Col span={12} style={{ marginTop: 5 }}>
            <Menu selectedKeys={['acao']} mode="horizontal" theme="dark">
              <Menu.Item key="acao">Destaques</Menu.Item>
              <Menu.Item key="aventura">Lançamentos</Menu.Item>
              <Menu.Item key="animacao">Filmes</Menu.Item>
              <Menu.Item key="biografica">Séries</Menu.Item>
              <Menu.Item key="crime">Documentários</Menu.Item>
            </Menu>
          </Col>
          <Col span={7} style={{ marginTop: 5 }}>
            <Search placeholder="O que você procura?" size="large" style={{ width: '100%' }} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
