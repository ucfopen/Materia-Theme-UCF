import React, { useEffect, useRef, useState } from 'react'
import Header from '../../../../../../src/components/header'

const UcfHelpPage = () => {
	return (
		<>
			<Header />
			<div className="container">
				<section className="page">
					<h1>Help &amp; Support</h1>
					<section className="bordered">
						<h2 id="getting-started-link">Getting Started</h2>
						<p>Check out the <a href="https://cdl.ucf.edu/support/materia/materia-quick-start-guide/" className="external">Materia Quickstart Guide</a>.</p>
					</section>
					<section className="bordered">
						<h2 id="flash-required">Requirements</h2>
						<p className="flash-version">Materia requires that you use an up-to-date browser with javascript and cookies enabled.</p>
					</section>
					<section className="float left">
						<h2 id="login-issues">Login Issues</h2>
						<p>In many cases, problems logging in are a result of one of the following:</p>
						<h3>Expired Password</h3>
						<p>NID passwords expire every 30 days for security purposes. You may need to <a href="http://mynid.ucf.edu" className="external">reset your NID password</a> if it has expired.</p>
						<h3>Students missing UCF E-Mail address</h3>
						<p>Students must have a UCF Email address to log into Materia. You should be able to access Materia within 24 hours of receiving a UCF email address.</p>
						<p>Faculty members are similarly required to have a UCF email address in order to authenticate with Materia.</p>
						<h3>Faculty not currently employed</h3>
						<p>Faculty must be categorized as currently employed to gain access.</p>
					</section>
					<section className="float right bordered">
						<h2 id="faq-link">FAQs</h2>
						<p>The Webcourses@UCF Support website provides a fequently asked questions section for help with Materia.</p>
						<p><a href="https://cdl.ucf.edu/support/materia/" className="external">View the FAQs</a></p>
					</section>
					<section className="float right">
						<h2 id="support">Support</h2>
						<p>If you need help beyond what has been provided here, please contact Webcourses@UCF Support using one of the following:</p>
						<dl>
							<dt>Webcourses@UCF Support</dt>
								<dd><a href="https://cdl.ucf.edu/support/">https://cdl.ucf.edu/support/</a></dd>
							<dt>Email</dt>
								<dd><a href="mailto:webcourses@ucf.edu">webcourses@ucf.edu</a></dd>
							<dt>Phone</dt>
								<dd><a href="tel:+14078230407">(407) 823-0407</a></dd>
						</dl>
					</section>
				</section>
			</div>
		</>
	)
}

export default UcfHelpPage
