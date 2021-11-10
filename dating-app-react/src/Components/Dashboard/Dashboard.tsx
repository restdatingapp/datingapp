import React from 'react';
import { Cards } from '../Cards/cards';
import { AddDescription } from './AddDescription';
import { DNavigation } from './DNavigation';
import { DToggle } from './DToggle';


export const Dashboard:React.FC<any>=(props:any)=>{
    const handleChange = (event: any) => {

    }

    return(
        <>
            <div className="container-fluid display-table">
                <div className="row display-table-row">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">
                            <a href="home.html"><img src="http://jskrishna.com/work/merkury/images/logo.png" alt="merkery_logo" className="hidden-xs hidden-sm" />
                                <img src="http://jskrishna.com/work/merkury/images/circle-logo.png" alt="merkery_logo" className="visible-xs visible-sm circle-logo" />
                            </a>
                        </div>
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