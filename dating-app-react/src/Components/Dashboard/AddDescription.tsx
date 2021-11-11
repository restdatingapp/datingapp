import React from 'react';
import { Cards } from '../Cards/cards';



export const AddDescription: React.FC<any> = (props: any) => {
    const handleChange = (event: any) => {

    }

    return (
        <>
            <div id="add_project" className="modal fade" role="dialog">
                <div className="modal-dialog">


                    <div className="modal-content">
                        <div className="modal-header login-header">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            <h4 className="modal-title">Add Project</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="Project Title" name="name" onChange={handleChange} />
                            <input type="text" placeholder="Post of Post" name="mail" onChange={handleChange} />
                            <input type="text" placeholder="Author" name="passsword" onChange={handleChange} />
                            <textarea placeholder="Desicrption"></textarea>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="cancel" data-dismiss="modal">Close</button>
                            <button type="button" className="add-project" data-dismiss="modal">Save</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}