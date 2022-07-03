import React from 'react';

const Header = () => {
	return (
		<div className="jumbotron">
			<div className="row">
				<div className="col-12 col-sm-4 text-center">
					<h6 className="text-uppercase text-left">July 4, 2022</h6>
					<h6 className="text-uppercase text-left">Malang, Jawa Timur</h6>
				</div>
				<div className="col-12 col-sm-8 text-lg-right">
					<div>
						<img src="/static/SVCClogo.png" />
					</div>
					<h2>Galih Permana</h2>
				</div>
			</div>
		</div>
	);
};

export default Header;
