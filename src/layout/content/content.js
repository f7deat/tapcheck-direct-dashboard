import React from 'react';
import GooglePlay from '../../images/google_play.svg';
import AppleStore from '../../images/apple_store.svg';

function Content() {

    const data = [{
        id: 1,
        icon: 'fas fa-random',
        accountNumber: '*** *** *** 1234',
        date: '22 Jul 2019',
        status: 1,
        money: '$50.00',
        class: 'd-flex rounded-circle p-3 btn-light-primary'
    },
    {
        id: 2,
        icon: 'fas fa-random',
        accountNumber: '*** *** *** 5678',
        date: '22 Jul 2020',
        status: 2,
        money: '-$80.00',
        class: 'd-flex rounded-circle p-3 btn-light-primary'
    }]

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
                                        <img src={GooglePlay} alt="GooglePlay" className="mr-2 cursor-pointer" />
                                        <img src={AppleStore} alt="AppleStore" className="cursor-pointer" />
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
                                    <ul className="types-line">
                                        <li>
                                            <div>
                                                39$
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                45$
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                92$
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="font-weight-bold mb-3">
                                        <span className="btn-light-primary rounded-circle px-2 mr-2"><i className="fas fa-dollar-sign"></i></span>
                                        Tapcheck Repayment Day <i className="fas fa-exclamation-circle text-muted ml-1 text-sm"></i></div>
                                    <div className="text-sm">
                                        Next day of changed: <span className="text-success">13 Jun 2020</span>
                                    </div>
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
                    <div className="bg-primary rounded h-100 w-100 shadow-sm p-4">
                        <div className="p-4">
                            <div className="d-flex">
                                <div className="flex-grow-1">
                                    <div className="font-weight-bold text-white h5">
                                        Upgrade to Tapcheck Direct Pro
                                    </div>
                                    <div className="text-sm">
                                        <a href="#upgrade" className="text-white"><u>You're now in Basic Pack</u></a>
                                    </div>
                                </div>
                                <i className="fas fa-exclamation-circle text-white mt-2"></i>
                            </div>
                        </div>
                        <img alt="Banner" className="img-fluid mt-4" src="https://www.tapcheck.com/assets/images/svg/Home_hero.svg"></img>
                        <div className="p-4 mt-4">
                            <button className="btn btn-light btn-lg btn-block text-success">Upgrade Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-4 shadow-sm border-0">
                <div className="p-4 border-bottom">
                    <div className="title mb-2">
                        <div className="float-right text-sm mt-2">
                            <a href="#editDetail" className="text-muted"><u>Edit Detail</u></a>
                        </div>
                        Recent Transactions
                    </div>
                    <table className="table">
                        <tbody>
                            {
                                data.map(item => (
                                    <tr key={item.id}>
                                        <td className="d-flex">
                                            <div className={item.class}>
                                                <i className={item.icon}></i>
                                            </div>
                                        </td>
                                        <td className="p-4">{item.accountNumber}</td>
                                        <td className="p-4">{item.date}</td>
                                        <td className="p-4">
                                            {(() => {
                                                if (item.status === 1) {
                                                    return (<span className="text-success">Transfer</span>)
                                                } else if (item.status === 2) {
                                                    return (<span className="text-danger">Repayment</span>)
                                                }
                                            }
                                            )()}
                                        </td>
                                        <td className="p-4">{item.money}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Content;
