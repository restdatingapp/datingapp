import React, {useState} from 'react';
import AWS from "aws-sdk";
//declare var AWS: typeof _AWS;
//var AWS = require('aws-sdk')


const S3_BUCKET = "restdating";
const REGION = "US West (N. California) us-west-1";

AWS.config.update({
    accessKeyId:'AKIATXORZZPI5GWEZVMA',
    secretAccessKey:'GOwM6OWvkpl4jkabtFWqq+y5keuC+L4IHFHeJhx'
})


const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const ImgUpload = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e:any) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file:any) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }


    return <div>
        <div>Native SDK File Upload Progress is {progress}%</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
}

export default ImgUpload;