import PageHeader from 'components/PageHeader'
import '../node_modules/antd/dist/antd.css'
import 'styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <PageHeader />
      <Component {...pageProps} />
    </>
  )
}

export default App
