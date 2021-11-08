
import React from 'react';

export const Section2:React.FC<any>=(props:any)=>{
    return(
        <>
            <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">Haruki Murakami</h2>
                            <p>"If you remember me, then I don't care if everyone else forgets"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}