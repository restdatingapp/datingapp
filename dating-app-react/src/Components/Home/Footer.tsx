import React from 'react';

export const Footer:React.FC<any>=(props:any)=>{
    return(
        <>
        <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your Website 2021</p></div>
        </footer>
        </>
    )
}