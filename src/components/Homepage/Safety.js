import React from 'react'

export default function Safety() {
    return (
        <div>
            <div className="container mb-5">
                <div className="row text-white">
                    <div
                        style={{
                            backgroundColor: "#1a1a1a",
                            padding: "20px",
                            borderRadius: "20px",
                            marginTop: "20px",
                            marginBottom: "20px"
                        }}
                        className="col-lg-12 col-md-12 col-sm-12 text-center mt-5"
                    >
                        <h5>
                            This web site will introduce you to new people.
                            You must ensure your own personal safety.
                        </h5>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12  mt-5">
                        <h1>Personal Safety</h1>
                        <h5>
                            RideHub provides a service that enables you to contact and meet new
                            people who may have similar transportation needs. This is a legal
                            agreement between you, the user, and RideHub inc.
                        </h5>
                        <br />
                        <ul style={{ fontSize: 'larger' }}>
                            <li>
                                By using this web site you agree to be bound by all the terms and conditions of this Agreement and accept that we have no responsibility for your safety.
                            </li>
                            <li>
                                By using this web site you acknowledge your acceptance of all of the terms of use described herein.
                            </li>
                            <li>
                                If you do not agree to be bound by this Agreement, do not use this site or any of its services.
                            </li>
                            <li>
                                The terms and conditions of use are subject to change at any time.
                            </li>
                            <li>
                                Your use of the services after such changes constitutes acceptance of the changes.
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
