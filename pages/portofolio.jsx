import Link from 'next/link'
import Navbar from '../components/navbar'

function Portofolio() {
  return (
		<>
			<Navbar />
			<body>
				<div className="content-container">
					<div className="port-content">
						<div className="port-title">
							<h1>My Portofolios</h1>
						</div>
						<div className="port-singkat">
							<p>Some projects i've done neither individually or in group</p>
						</div>
						<div className="port-post">
							<div className="column left">
								<img src="https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1506452819137-0422416856b8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1558717738-0b9fbb9b0b21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1605918321755-0b5ffd8a796a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
							</div>
							<div className="column right">
								<img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1542837336-d14bdf342f9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
								<img src="https://images.unsplash.com/photo-1577760258779-e787a1733016?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="image"/>
							</div>
						</div>
					</div>
				</div>
				<div className="cprt">
							<p>© Copyright picture to <a href="https://unsplash.com/s/photos/web-development" target="_blank"><mark>unsplash.com</mark></a></p>
				</div>
			</body>
		</>
  )
}

export default Portofolio;