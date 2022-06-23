
import './Footer.scss';

export const Footer = () => {
	return (
		<footer className="container-fluid bg-white p-2 border-top ">
			<div className="container my-3 color">
				<div className="d-flex flex-wrap justify-content-between">
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Ver Curriculum</p>
					</div>
					<div className="col-md-3 col-12 copyright">
						<p className="footer-title mb-1">Copyright © 2022. Realizado por Cornejo Ramiro</p>
					</div>
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Redes sociales</p>
						<a
							href="https://github.com/ramiro-cornejo"
							className="link-dark icon-link"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/ramiro-sebasti%C3%A1n-cornejo/"
							className="link-dark icon-link"
							target="_blank"
							rel="noreferrer"
						>
							Linkedin
						</a>
						
					</div>
				</div>
			</div>
		</footer>
	);
};

