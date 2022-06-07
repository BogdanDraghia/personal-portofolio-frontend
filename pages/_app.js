import Layout from '../src/components/layout/Layout'
import '../styles/globals.css'
import Script from "next/script"
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Script
              id="hello"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "c7aitjvicw");`
              }}
      />
      <Component {...pageProps} />
    </Layout>
  )
}