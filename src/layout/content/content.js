import React from 'react';
import GooglePlay from '../../images/google_play.svg';
import AppleStore from '../../images/apple_store.svg';

function Content() {
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-8">
                    <div className="mb-4">
                        <div className="d-flex">
                            <div className="h2 font-weight-bold flex-grow-1">
                                Direct Dashboard
                        </div>
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#0"><i className="fas fa-angle-left"></i></a></li>
                                    <li className="page-item disabled"><a className="page-link" href="#1">1</a></li>
                                    <li className="page-item"><a className="page-link " href="#2">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#4"><i className="fas fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm text-center">
                                <div className="p-4">
                                    <div className="title mb-3">Invite a Friend, get 5$</div>
                                    <div className="text-muted mb-3">
                                        Invite a friend and you'll get $5 after they make their first purchase!
    </div>
                                    <button className="btn btn-success">Copy invite link</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm">
                                <div className="p-4">
                                    <div className="title mb-3">
                                        Download Our App
</div>
                                    <div className="text-muted mb-3">
                                        For iOS and Android
</div>
                                    <div className="d-flex mb-3">
                                        <img src={GooglePlay} alt="GooglePlay" className="mr-2" />
                                        <img src={AppleStore} alt="AppleStore" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 shadow-sm mt-4">
                        <div className="p-4 border-bottom">
                            <div className="title mb-4">
                                <div className="text-success float-right text-sm mt-2">2 successfull repayment will increase balance</div>
                        Available Balance Summary
                    </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="h4 font-weight-bold text-success">$100</div>
                                    <div className="text-muted">
                                        Current available balance
                            </div>
                                </div>
                                <div className="col-md-6">

                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="row">
                                <div className="col-md-7">

                                </div>
                                <div className="col-md-5">
                                    <div className="d-flex">
                                        <div className="btn-light-primary p-3 h5 d-flex rounded-circle">
                                            <i className="fas fa-address-card"></i>
                                        </div>
                                        <div className="ml-3 flex-grow-1">
                                            <div className="h4 font-weight-bold">$700</div>
                                            <div className="text-muted text-uppercase">Total Transfer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
            <div className="card mt-4 shadow-sm border-0">
                <div className="p-4 border-bottom">
                    <div className="title">
                        Recent Transactions
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
