import React from 'react';
import { Cards } from '../Cards/cards';



export const DNavigation: React.FC<any> = (props: any) => {
    const handleChange = (event: any) => {

    }

    return (
        <>

            <div className="navi">
                <ul>
                    <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                    <li><a href="#"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">messeges</span></a></li>
                    <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">help</span></a></li>
                    <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Calender</span></a></li>
                    <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Users</span></a></li>
                    <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Setting</span></a></li>
                </ul>
            </div>
        </>
    )
}