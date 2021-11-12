import React from 'react';


export const DemoProfile: React.FC<any> = (props: any) => {

    const handleChange = (event: any) => {

    }

    return (
        <>
            <form>
                <label>Select image:</label>
                <input type="file" id="img" name="img" onChange={handleChange} accept="image/*"/>
                    <input type="submit"/>
            </form>
                </>
                )
}