import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center text-white">
                        <h1 style={{ fontSize: '60px', marginBottom: '40px', marginTop: '60px' }}>Contact</h1>
                        <h3>For any queries, please contact us by filling this form </h3>
                        <br />
                    </div>

                </div>
            </div>

            <div class="container mb-5">
                <div class="row text-white">
                    <div class="col-lg-6 col-md-6 col-sm-12">

                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required />
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="6" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary mt-2">Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}