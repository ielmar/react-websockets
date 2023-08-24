import Layout from '../components/layout'

import '../public/css/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  }
  
  export default MyApp