import Link from 'next/link'
import { withRouter } from 'next/router'
import TemporaryDrawer from '../components/drawer'


function Navbar({ router }){
	const navs = [
		{ text: 'Home', href:"/" },
		{ text: 'About', href:"/about" },
		{ text: 'Portofolio', href:"/portofolio" },
		{ text: 'Contact', href:"/contact" },
	];

	return (
		<nav className="navbar">
			<div className="container">
				<div className="logo">
					<a href="/"><h2>AUFI</h2></a>
				</ div>
				{/* <a href="#main-menu-toggle" className="menu-close">
					<span class="fa fa-close"></span>
				</a> */}
				<TemporaryDrawer />
				<ul className="nav-links">
					{ navs.map(nav => (
						<li><Link href={ nav.href }><a className={`nav-item ${ router.pathname == nav.href ? 'active' : '' }`}>{ nav.text }</a></Link></li>
					)) }
					{/* <li><Link href="/about"><a>About</a></Link></li>
					<li><Link href="/portofolio"><a>Portofolio</a></Link></li>
					<li><Link href="/contact"><a>Contact</a></Link></li> */}
				</ul>
			</div>
    </nav>
	)
}

export default withRouter(Navbar);