import React from 'react';

export const Cards:React.FC<any>=(props:any)=>{
	
    return(
        <>
        <div className="card">
		<div className="card__inner">
			<div className="card__face card__face--front">
				<h2>Card Front</h2>
			</div>
			<div className="card__face card__face--back">
				<div className="card__content">
					<div className="card__header">
						<img src="pp.jpg" alt="" className="pp" />
						<h2>Tyler Potts</h2>
					</div>
					<div className="card__body">
						<h3>JavaScript Wizard</h3>
						<p>Lorem ipsum <strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
        </>
    )
}