import React from 'react';

function BankAccount(props) {
    return (
        <div className="mt-4 d-flex">
            <button className="btn btn-light-success rounded-circle">
                <i className="fas fa-piggy-bank"></i>
            </button>
            <div className="flex-grow-1 ml-3">
                <div>{props.name}</div>
                <div>xxxx xxxx xxxx 1234</div>
            </div>
        </div>
    );
}

export default BankAccount;
