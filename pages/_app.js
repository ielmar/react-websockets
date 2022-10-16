import Layout from '../components/layout'

import '../public/css/app.css'
import '@tremor/react/dist/esm/tremor.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  }
  
  export default MyApp