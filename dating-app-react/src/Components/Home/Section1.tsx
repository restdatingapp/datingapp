import React from 'react';

export const Section1:React.FC<any>=(props:any)=>{
    return(
        <>
            <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4"> Nora Ephron</h2>
                            <p>"I love that you are the last person I want to talk to before I go to sleep at night"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}