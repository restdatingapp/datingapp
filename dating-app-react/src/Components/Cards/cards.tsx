import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { store } from '../../Store/store';
import prettylady from './prettylady.jpg'
import { getDates } from '../../Actions/InterestedActions'
export const Cards: React.FC<any> = (props: any) => {

    const photoDefaultPath = "https://restdating.s3.us-west-1.amazonaws.com/";
    const dispatch = useDispatch();

    //user information - local state
    const id = useSelector<any, any>((state) => state.user.id);
    const firstname = useSelector<any, any>((state) => state.user.firstname);
    const lastname = useSelector<any, any>((state) => state.user.lastname);
    const email = useSelector<any, any>((state) => state.user.email);
    const nickname = useSelector<any, any>((state) => state.user.nickname);
    const password = useSelector<any, any>((state) => state.user.password);
    const gender = useSelector<any, any>((state) => state.user.gender);
    const interestedgender = useSelector<any, any>((state) => state.user.interestedgender);
    const photourl = useSelector<any, any>((state) => state.user.photourl);


    //dates information - local state
    const interestedUsers = useSelector<any, any>((state) => state.interested);

    const interestedGenderId = parseInt(interestedgender.toString());
    let genderType: String = "";

    const defineType = (interestedGender: number) => {
        if (interestedGender == 1) {
            genderType = 'male'
        } else if (interestedGender == 2) {
            genderType = 'female'
        } else if (interestedGender == 3) {
            genderType = 'both'
        }
    }

    const deconstructedid = id;
    const deconstructedinterestedgender = interestedgender;

    const deconstructed = {
        id,
        interestedgender: { id: interestedgender, type: genderType }
    }

    const dates = async () => {
        await dispatch(
            getDates(deconstructed)
        )
    }

    useEffect(() => {
        defineType(interestedGenderId);
        dates();
    }, []);


    useEffect(() => {
        console.log("Second use effect firing.");
    }, [genderType]);


    return (
        <>


            {interestedUsers.map((interested: any) => (
                <div className="card">
                    <div className="card__inner">
                        <div className="card__face card__face--front">
                            <div className="card__header"><img src={photoDefaultPath + interested.photourl} alt="" className="pp" /><h2>{interested.firstname} {interested.lastname}</h2>
                                <div className="card__body">
                                    <h3 >Description:</h3>
                                    <p>{interested.description}</p>
                                </div>
                            </div></div></div></div>
            ))}

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

        </>
    )
}