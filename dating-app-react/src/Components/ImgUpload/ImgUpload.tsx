import React, { useState, useReducer,useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { IUser } from '../../Store/types';
import { photoUser } from '../../Actions/UserActions';
import { useNavigate, Link } from 'react-router-dom';
import AWS from "aws-sdk";
import '../Profile/Profile.css'
import dotenv from 'dotenv';

export const ImageUpload: React.FC<any> = (props: any) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const id = useSelector<any, any>((state) => state.user.id);
    const firstname = useSelector<any, any>((state) => state.user.firstname);
    const lastname = useSelector<any, any>((state) => state.user.lastname);
    const email = useSelector<any, any>((state) => state.user.email);
    const nickname = useSelector<any, any>((state) => state.user.nickname);
    const password = useSelector<any, any>((state) => state.user.password);
    const gender = useSelector<any, any>((state) => state.user.gender);
    const interestedgender = useSelector<any, any>((state) => state.user.interestedgender);
    const photourl = useSelector<any, any>((state: any) => state.user.photourl);

    
    

    let interestedgenderType = "";
    let genderType: String = "";
    const definegenderType = (Gender: number) => {
        if (interestedgender == 1) {
            interestedgenderType = 'male'
        } else if (interestedgender == 2) {
            interestedgenderType = 'female'
        } else if (interestedgender == 3) {
            interestedgenderType = 'both'
        }
    }

    const defineinterestedType = (interestedGender: number) => {
        if (interestedGender == 1) {
            interestedgenderType = 'male'
        } else if (interestedGender == 2) {
            interestedgenderType = 'female'
        } else if (interestedGender == 3) {
            interestedgenderType = 'both'
        }
    }

    useEffect(() => {
        definegenderType(gender);
        defineinterestedType(interestedgender)
    }, []);

    let user = {
        id,
        firstname,
        lastname,
        email,
        nickname,
        password,
        gender: {
        gender,
        type: genderType
        },
        interestedgender: {
            interestedgender,
            type: "male"
        },
        photourl
    }


    AWS.config.update({
        accessKeyId: "AKIATXORZZPIWLZEGG6Y",
        secretAccessKey: "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",
        region: "us-west-1"
    })
    const awsConnect = new AWS.S3()

    const handleFileInput = (e: any) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file: any) => {
        if (selectedFile) {
            const params = {
                ACL: 'public-read',
                Body: selectedFile,
                Bucket: 'restdating',
                Key: id + firstname + (Math.floor(Math.random() * (1500 - 1 + 1)) + 1),
                ContentType: 'jpeg'
            };
            

            console.log(params)
            awsConnect.putObject(params)
                .on('httpUploadProgress', (evt) => {
                    setProgress(Math.round((evt.loaded / evt.total) * 100))
                })
                .send((err) => {
                    if (err) console.log(err)
                });
                user.photourl = params.Key;
                console.log(user);
                dispatch(
                    photoUser(user)
                )
        }


    }

    return (<div className='fileUploadDiv'>
        <div><span>Native SDK File Upload Progress is {progress}%</span></div>
        <label> Select a photo to upload </label>
        <input type="file" name='fileUpload' onChange={handleFileInput} />
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
    )

}

