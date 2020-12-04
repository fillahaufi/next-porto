import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
// import style from '_app.jsx'

function Home() {
  return (
    <>
      <head>
        <title>Testing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <Navbar />
      <body>
        <div className="content-container">
          <div className="home-content">
            <div className="home-left">
              <h1>Hello, I'm Aufi Fillah</h1>
              <p>A UI/UX designer and front-end developer</p>
              <Link href="/about"><button><a>More Information</a></button></Link> 
            </div>
            <div className="home-right">
              <img src="/img/me.png" alt="me"/>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default Home;