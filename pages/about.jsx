import Link from 'next/link'
import Navbar from '../components/navbar'

function About() {
	return (
  	<>
			<head>
					<title>About Me</title>
			</head>
			<Navbar />
			<body>
				<div className="content-container">
					<div className="about-content">
						<div className="about-title">
							<h1>About Me</h1>
						</div>
						<div className="about-singkat">
							<p>You can call me Opi and welcome to my portofolio website. I'm a student from <a href="https://www.its.ac.id" target="_blank"><mark>Sepuluh Nopember Institute of Technology</mark></a> at the <a href="https://www.its.ac.id/informatika/en/home/" target="_blank"><mark>Departement of Informatics</mark></a>. Here, you can see the skills that I have honed, some work experience and competition both as a group and individually, as well as my contacts if you want to work together further. Have a nice day!</p>
						</div>
						<div className="about-myskills">
							<div className="skills-title">
								My Skills :
							</div>
							<div className="about-skills">
								<div className="skill-left">
									<img src="/img/code.png" alt="code"/>
									<p>Code</p>
								</div>
								<div className="skill-right">
									<img src="/img/potosop.png" alt="design"/>
									<p>Design</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</body>
		</>
  )
}

export default About;