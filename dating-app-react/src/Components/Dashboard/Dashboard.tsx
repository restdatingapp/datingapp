import React from 'react';
import { Cards } from '../Cards/cards';
import { AddDescription } from './AddDescription';
import { DNavigation } from './DNavigation';
import { DToggle } from './DToggle';
import restLogo from '../Signup/restLogo.png';


export const Dashboard:React.FC<any>=(props:any)=>{
    const handleChange = (event: any) => {

    }

    return(
        <>
            <div className="container-fluid display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        
                            <a href="">
                                <img src= {restLogo} alt="" className="pp" />
                            </a>
                        
                        <DNavigation />
                    </div>
                    <DToggle />
                </div>
                
            </div>
            <div>
            </div>

            <AddDescription />
    
        </>
    )
}