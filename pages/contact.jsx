import Link from 'next/link'
import Navbar from '../components/navbar'

function Contact() {
	return (
		<>
			<Navbar />
			<body>
				<div className="content-container">
					<div className="contact-content">
						<div className="contact-title">
							<h1>Contact Me</h1>
						</div>
						<div className="contact-singkat">
							<p>Some platform to contact me, in case you need it</p>
						</div>
						<div className="socmed">
							<a href="https://api.whatsapp.com/send?phone=6289613271826&text=Hello%20I%27m%20(YourName)%20from%20(CompanyName)" target="_blank">
								<img src="/img/wa.png" alt="wa" />
							</a>
							<a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWtMnbDkWVMjfPNZCVBrRfTDDNSwQFGBWpvmrMNnRHqRnTHQlQLLSZPNvNBvVkZjktLdNKTKB" target="_blank">
								<img src="/img/mail.png" alt="email"/>
							</a>
							<a href="https://www.linkedin.com/in/aufi-fillah-4946a3152/" target="_blank">
								<img src="/img/linkedin.png" alt="linkedin"/>
							</a>
						</div>
					</div>
				</div>
			</body>
		</>
	)
}

export default Contact;