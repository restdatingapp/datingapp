import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Store/store';


export const Cards:React.FC<any>=(props:any)=>{
	const state = store.getState();
	const firstname = state.user.firstname;
	const lastname=state.user.lastname;
	const description=state.user.nickname;
	const appState = useSelector<any, any>((state) => state);
	console.log(appState);
	console.log("firstname is: " + firstname);
    return(
        <>
        <div className="card">
		<div className="card__inner">
			<div className="card__face card__face--front">
				
				<div className="card__header">
						<img src="pp.jpg" alt="" className="pp" />
						<h2>{firstname} </h2>
						<h2>{lastname} </h2>
					</div>
					<div className="card__body">
						<h3 >{description}</h3>
						<p>Lorem ipsum 
							<strong>dolor</strong> sit amet, consectetur <strong>adipiscing</strong> elit. Sed id erat a magna lobortis dictum. Nunc est arcu, <strong>lacinia</strong> quis sapien placerat, <strong>laoreet</strong> tincidunt nulla.
							</p>
					</div>
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