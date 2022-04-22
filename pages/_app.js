import Layout from '../src/components/layout/Layout'
import '../styles/globals.css'
import Script from "next/script"
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
<Script src = "https://gedsportsprod.s3.eu-west-3.amazonaws.com/DEV/subida-pedestre-desfiladero-de-la-hermida-potes-2022.js"/>
      <Component {...pageProps} />
    </Layout>
  )
}