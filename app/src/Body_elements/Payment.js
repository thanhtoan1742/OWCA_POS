import React from 'react';
import './Payment.css'

function Payment() {
    return (
        <div class = "payment-container">
            <h2>Payment Form</h2>
            <form action="" method="post">
                <h4>Personal Information</h4>
                <div class="box">
                    <div class="input_box">
                        <input type="text" placeholder="First Name" required class="name"/>
                        <i class="fa fa-user icon"></i>
                    </div>
                    <div class="input_box">
                        <input type="text" placeholder="Last Name" required class="name"/>
                        <i class="fa fa-user icon"></i>
                    </div>
                </div>
                <div class="box">
                    <div class="input_box">
                        <input type="email" placeholder="Email Address" required class="name"/>
                        <i class="fa fa-envelope icon"></i>
                    </div>
                </div>
                <div class="box">
                    <div class="input_box">
                        <input type="text" placeholder="Address" required class="name"/>
                        <i class="fa fa-map-marker icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="box">
                    <div class="input_box">
                        <input type="tel" placeholder="Phone Number" required class="name"/>
                        <i class="fa fa-phone icon"></i>
                    </div>
                </div>

                <div class="box">
                    <div class="input_box">
                        <h4>Date Of Birth</h4>
                        <input type="text" placeholder="DD" required class="dob"/>
                        <input type="text" placeholder="MM" required class="dob"/>
                        <input type="text" placeholder="YYYY" required class="dob"/>
                    </div>
                    <div class="input_box">
                        <h4>Gender</h4>
                        <input type="radio" name="gender" class="radio" id="b1" checked/>
                        <label for="b1">Male</label>
                        <input type="radio" name="gender" class="radio" id="b2"/>
                        <label for="b2">Female</label>
                    </div>
                </div>

                <div class="box">
                    <div class="input_box">
                        <h4>Payment Method</h4>
                        <input type="radio" name="pay" class="radio" id="bc1" />
                        <label for="bc1"><span>
                                <i class="fa fa-credit-card"></i>Credit Card</span></label>
                        <input type="radio" name="pay" class="radio" id="bc2"/>
                        <label for="bc2"><span>
                                <i class="fab fa-cc-paypal"></i>Paypal</span></label>
                    </div>
                </div>
                

                <div class="box">
                    <div class="input_box">
                        <button type="submit">PAY NOW</button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Payment;