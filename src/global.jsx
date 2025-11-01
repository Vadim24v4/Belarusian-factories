import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import factory from '@/assets/favicons/factory.png'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'ru' }}>
        <title>Белорусские заводы | {title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={factory} />
        <link rel="icon" type="image/png" sizes="32x32" href={factory} />
        <link rel="icon" type="image/png" sizes="16x16" href={factory} />
        <link rel="manifest" href={factory} />
      </Head>
      <Header url={url} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
}
