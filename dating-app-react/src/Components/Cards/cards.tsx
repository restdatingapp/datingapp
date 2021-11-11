import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../Store/store';
import { getDates } from '../../Actions/UserActions';
export const Cards:React.FC<any>=(props:any)=>{

    const state = store.getState();
    const description=state.user.nickname;
    const appState = useSelector<any, any>((state) => state);
	const dispatch = useDispatch();

	const [id, setId] = useState(state.user.id);
	const [firstname, setFirstName] = useState(state.user.firstname);
    const [lastname, setLastName] = useState(state.user.lastname);
    const [email, setEmail] = useState(state.user.email);
    const [nickname, setNickname] = useState(state.user.nickname);
    const [password, setPassword] = useState(state.user.password);
    const [gender, setGender] = useState({id: state.user.gender});
    const [interestedGender, setInterestedgender] = useState({id: state.user.interestedgender});

	
	const interestedGenderId = parseInt(interestedGender.id.toString());
	let genderType:String = "";

	const defineType = (interestedGender:number) =>{
		if(interestedGender == 1){
			genderType = 'male'
		} else if(interestedGender == 2){
			genderType = 'female'
		} else if(interestedGender == 3){
			genderType = 'both'
		}
	}

	const deconstructedid = id;
	const deconstructedinterestedgender = interestedGender.id;

	const deconstructed = {
		id,
		interestedgender: {id: 2, type:genderType}
	}

	console.log(deconstructed);

	const dates = async () => {
		await dispatch(
			getDates(deconstructed)
		)
	}

	useEffect(() => {
		defineType(interestedGenderId);
		dates();
    },);

	/*
	const dates = async () => {
        console.log("firing dates");
        await dispatch(
            getDates(newObj);
        )
    }
	*/
	
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