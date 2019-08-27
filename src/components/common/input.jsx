import React from 'react';

const Input=({name, label, value, type, onChange, error})=> {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                autoFocus
                name={name}
                id={name}
                type={type}
                className="form-control"/>

                {/*if error is truthy then it will execute*/}

            {error &&<div className="alert alert-danger">{error}</div>}
        </div>





    );
}

export default Input;