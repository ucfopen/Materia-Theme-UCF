import React from 'react';

const UcfHelpHome = () => {

	return (
		<>
			<section className="full-width">
				<h2 id="faq-link">Getting Started</h2>
				<p>Having issues with Materia or don't know where to get started? We're here to help. For first-time users, get more information about Materia from the links below.</p>
				<p><a href="https://ucfopen.github.io/Materia-Docs/play/getting-started.html">Player/Student Guide</a></p>
				<p><a href="https://ucfopen.github.io/Materia-Docs/create/getting-started.html">Author/Instructor Guide</a></p>
			</section>
			<section className="full-width">
				<h2 id="flash-required">Requirements</h2>
				<p className="flash-version">Materia requires that you use an up-to-date browser with javascript and cookies enabled.</p>
			</section>

			<section className="half-width">
				<h2 id="login-issues">Login Issues</h2>
				<p>In many cases, problems logging in are a result of one of the following:</p>
				<h3>Expired Password</h3>
				<p>NID passwords expire every 30 days for security purposes. You may need to <a href="http://mynid.ucf.edu" className="external">reset your NID password</a> if it has expired.</p>
				<h3>Students Missing UCF Email Address</h3>
				<p>Students must have a UCF email address to log into Materia. You should be able to access Materia within 24 hours of receiving a UCF email address.</p>
				<p>Faculty members are similarly required to have a UCF email address in order to authenticate with Materia.</p>
				<h3>Faculty Not Currently Employed</h3>
				<p>Faculty must be categorized as currently employed to gain access.</p>
			</section>

			<section className="half-width">
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
			<section className='full-width'>
				<h2 id="faq-link">Documentation</h2>
				<p><a href="https://ucfopen.github.io/Materia-Docs/">Our docs site</a> has extensive documentation for students, authors, support users, and developers.</p>
			</section>
		</>
	)
}

export default UcfHelpHome
