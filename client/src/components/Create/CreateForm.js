import React from "react";

const CreateForm = () => {
    return(
        <div className="container">
             <div>
                <h1 className="text-center">Update Form</h1>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <label>Product Name</label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="col-md-4">
                    <label>Product Code</label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="col-md-4">
                    <label>Image</label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="col-md-4">
                    <label>Unit Price</label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="col-md-4">
                    <label>Quantity</label>
                    <input type='text' className="form-control"/>
                </div>
                <div className="col-md-4">
                    <label>Total Price</label>
                    <input type='text' className="form-control"/>
                </div>
            </div>

            <div className="row">
                <button className="btn btn-primary w-100">Save</button>
            </div>

        </div>
    )
}

export default CreateForm