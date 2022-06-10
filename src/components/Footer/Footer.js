
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="container-fluid bg-white p-2 border-top">
			<div className="container my-3">
				<div className="d-flex flex-wrap justify-content-between">
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Contacto</p>
						<p>Puedes contactarnos a través de nuestras redes sociales o vía email</p>
						<p>contacto@gmail.com</p>
					</div>
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Horarios</p>
					</div>
					<div className="col-md-3 col-12">
						<p className="footer-title mb-1">Redes sociales</p>
						<a
							href="https://facebook.com/"
							className="link-dark icon-link"
							target="_blank"
							rel="noreferrer"
						>
							
						</a>
						<a
							href="https://instagram.com/"
							className="link-dark icon-link"
							target="_blank"
							rel="noreferrer"
						>
							
						</a>
						<a
							href="https://github.com/FacuMasino/pedime-reactjs-masino"
							target="_blank"
							rel="noreferrer"
							className="link-dark icon-link"
						>
							
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;