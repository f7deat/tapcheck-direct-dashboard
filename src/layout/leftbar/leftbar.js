import React from 'react';
import BankAccount from './bankAccount';

function Leftbar() {
    return (
        <div className="card shadow-sm border-0">
            <div className="p-4 border-bottom text-center">
                <div className="px-4">
                    <div className="font-weight-bold h5">
                        Available Balance
                </div>
                    <div className="text-success font-weight-bold h2 mt-4">
                        $67.00
                </div>
                    <button className="btn btn-lg btn-primary btn-block mt-4">Transfer Funds</button>
                </div>
            </div>
            <div className="p-4 border-bottom">
                <div className="title">
                    <a href="#edit" className="edit float-right">Edit</a>
                    Employment information
                </div>
                <BankAccount name="Direct Deposit Account"/>
            </div>
            <div className="border-bottom p-3">
                <div className="float-right">
                    Vodafone LLC
                </div>
                Company Name
            </div>
            <div className="border-bottom p-3">
                <div className="float-right">
                    <i className="fas fa-paperclip text-success"></i> Johny.pdf
                </div>
                Paystub
            </div>
            <div className="p-4 border-bottom">
                <div className="px-4">
                    <button className="btn btn-lg btn-primary btn-block">
                        Confirm
                </button>
                </div>
            </div>
            <div className="p-4 border-bottom">
                <div className="title mb-3">
                    <button className="btn btn-sm btn-dark float-right">
                        <i className="fas fa-plus"></i>
                    </button>
                    Bank Account Details
                </div>
                <div className="text-muted text-uppercase font-weight-bold">Instant Transfer</div>
                <BankAccount name="The City Bank Limited"/>
            </div>
        </div>
    );
}

export default Leftbar;
