import React from 'react';

export const Section3
:React.FC<any>=(props:any)=>{
    return(
        <>
        <section>
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <div className="p-5">
                            <h2 className="display-4">Maya Angelou</h2>
                            <p>“I am grateful to have been loved and to be loved now and to be able to love, because that liberates. Love liberates" </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}