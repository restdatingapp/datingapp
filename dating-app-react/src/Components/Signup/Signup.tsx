import React, { useState, useEffect } from 'react';
import restLogo from './restLogo.png';
import './Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '../../Actions/UserActions';
import ReactDOM from 'react-dom';
import { IUser } from '../../Store/types';
import { stringify } from 'querystring';
import { IntersectionTypeNode } from 'typescript';

export const Signup: React.FC<any> = () => {

    const appState = useSelector<any, any>((state) => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState({id: 1, type:'male'});
    const [interested, setInterested] = useState({id: 1, type:'male'});
    const [photourl, setphotourl] = useState("https://dwrhx129r2-flywheel.netdna-ssl.com/wp-content/uploads/2015/08/blank-avatar.png")
    console.log(photourl);
    
    var deconstructedgid = gender.id;
    var deconstructedgtype = gender.type;
    var deconstructediid = interested.id;
    var deconstructeditype = interested.type;

    useEffect(() => {
        if (appState.user.id > 0) {
            navigate('home');
        }
    }, [appState]);

    useEffect(() => {
        genderBuilder(gender.type);
        console.log("Inside of the useEffect");
        interestedBuilder(interested.type);
        deconstructedgid = gender.id;
        deconstructedgtype = gender.type;
        deconstructediid = interested.id;
        deconstructeditype = interested.type;
    }, [gender.type, interested.type])

    const handleChange = (event: any) => {
        switch (event.target.name) {
            case "firstname":
                setFirstName(event.target.value);
                break;
            case "lastname":
                setLastName(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "nickname":
                setNickname(event.target.value);
                console.log(nickname);
                break;
            case "password":
                setPassword(event.target.value);
                break;

            case "gender":
                setGender({id: 1, type: event.target.value});
                break;
            
            case "interestedIn":
                setInterested({id: 1, type: event.target.value});
                break;
        }
    }

    var genderBuilder = (gendertype: string) => {

        console.log(gendertype);

        if (gendertype == 'male') {
                setGender({id: 1, type: 'male'});
                return gender;
        } else if (gendertype == 'female') {
                setGender({id: 2, type: 'female'});
                return gender;
        } else if (gendertype == 'non-binary') {
                setGender({id: 3, type: 'non-binary'});
                return gender;
        } else if (gendertype == 'doNotDisclose') {
                setGender({id: 4, type: 'do not disclose'});
                return gender;
        } else{
            console.log("no results matched");
        }
    }

    var interestedBuilder = (interestedtype: string) => {
            console.log(interestedtype);
        if (interestedtype == 'male') {
                setInterested({id: 1, type: 'male'})
                return interested.type;
        } else if (interestedtype == 'female') {
                setInterested({id: 2, type: 'female'})
                return interested.type;
        } else if (interestedtype == 'both') {
                setInterested({id: 3, type: 'both'})
                return interested.type;
        } else{
            console.log("no results matched");
        }
    }



const signup = async (e: any) => {
    e.preventDefault();


    let gender:object;
    gender = {
        id : deconstructedgid,
        type: deconstructedgtype
    }
    
    let interestedgender:object;
    interestedgender = {
        id: deconstructediid,
        type : deconstructeditype
    }
    console.log(gender);
    console.log(interestedgender);

    await dispatch(
        signupUser({ firstname, lastname, email, nickname, password, gender, interestedgender, photourl})
    );
    navigate('../login');
}


return (
    <div className='signup'>
        <div className='logoDiv'>
            <img src={restLogo} className='logo' />
        </div>
        <div className='signupDiv'>
            <h3>Sign up for the REST Dating app!</h3>
            <form className='signup-form' onSubmit={signup}>
                <label>First Name: </label>
                <input type='text' className='signupInput' placeholder='Enter first name...' name='firstname' onChange={handleChange} required />
                <br />
                <label>Last Name: </label>
                <input type='text' className='signupInput' placeholder='Enter last name...' name='lastname' onChange={handleChange} required />
                <br />
                <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter email...' name='email' onChange={handleChange} required />
                <br />
                <label>Nickname:&nbsp;&nbsp;</label>
                <input type='text' className='signupInput' placeholder='Enter Nickname (username)' name='nickname' onChange={handleChange} required />
                <br />
                <label>Password: &nbsp; </label>
                <input type='password' className='signupInput' placeholder='Enter password' name='password' onChange={handleChange} required />
                <br />
                <br />
                <label>Gender: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <select name='gender' onChange={handleChange}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='non-binary'>non-binary</option>
                    <option value='doNotDisclose'>do not disclose</option>
                </select>
                <br />
                <br />
                <label>Interested in:</label>
                <select name='interestedIn' onChange={handleChange}>
                    <option value='male'>male</option>
                    <option value='female'>female</option>
                    <option value='both'>both</option>
                </select>
                <br />
                <br />
                <input type='submit' className='signupSubmit' value='submit' />
            </form>
        </div>
    </div>
)
}