import * as React from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = {
  title?: string,
}

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const { children, title = 'This is the default title' } = props;
  return (
    <div style={layoutStyle}>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
