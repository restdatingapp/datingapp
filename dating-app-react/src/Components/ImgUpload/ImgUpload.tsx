
// import React, {useRef} from 'react';
// import S3 from 'react-aws-s3';
// export function  Upload(){

// const fileInput:any= useRef();
// let stepInput: React.RefObject<HTMLInputElement>;
//  stepInput = React.createRef();

// const handleClick = (event:any) =>{
//     event.preventDefault();
//     console.log(fileInput.current)
// let file = fileInput.current.files[0];

// let newFileName=fileInput.current.files[0].name;
// const config={
//     bucketName:process.env.REACT_APP_BUCKET_NAME,
//     region:process.env.REACT_APP_REGION,

// }

// }

//     return(
//         <>
//         <form className='upload-steps' onSubmit={handleClick}>
// <label>Upload File:<input type='file' ref={stepInput} /></label>
// <br/>
// <button type='submit'>upload</button>

//         </form>
//         </>
//     )
// }




import React, {useState} from 'react';
import AWS from "aws-sdk";
import dotenv from 'dotenv';
//declare var AWS: typeof _AWS;
//var AWS = require('aws-sdk')
//Set up AWS.config.update with keys, and region 
//const AWS.S3
//putObject




//const S3_BUCKET='restdating';
const REGION = "us-west-1";



AWS.config.update({
    accessKeyId:"AKIATXORZZPI5GWEZVMA",
    secretAccessKey:"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",
   region:"us-west-1"
})
const awsConnect=new AWS.S3()
console.log("WHAT IS THE VALUE FROM THE DOTENV " +process.env.REACT_APP_ACCESS_ID)
// const myBucket = new AWS.S3({
//     params: { Bucket: S3_BUC},
//     region: REGION,
// })

const ImgUpload = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e:any) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file:any) => {
if(selectedFile){
        const params = {
            ACL: 'public-read',
            Body: selectedFile,
            Bucket: 'restdating',
            Key: file.name,
            ContentType:'jpeg'
        };

        console.log(params)
        awsConnect.putObject(params)
        .on('httpUploadProgress', (evt) => {
            setProgress(Math.round((evt.loaded / evt.total) * 100))
        })
        .send((err) => {
            if (err) console.log(err)
        })
    }

       
    }


    return <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
}

export default ImgUpload;