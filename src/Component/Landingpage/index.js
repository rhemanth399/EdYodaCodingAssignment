


import React, { useState } from 'react';
import useRazorpay from 'react-razorpay'
import './style.css';

function LandingPage() {
  const [subscriptionMonths, setSubscriptionMonths] = useState(12);
  const [discount, setDiscount] = useState(179);
  const [offerTime, setOfferTime] = useState(18321);
  const Razorpay=useRazorpay();
  const handleSubscriptionChange = (months, discount, offerTime) => {
    setSubscriptionMonths(months);
    setDiscount(discount);
    setOfferTime(offerTime);
  };

  const handleProceedToPay = (e) => {
    // Redirect to Razorpay API
    // Implement your logic here
    var options = {
      key: "rzp_test_4I2n9u7ptH8Bge", // Enter the Key ID generated from the Dashboard
      amount: Math.floor(discount* 100), // Amount is in currency submits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "MyShop Checkout",
      description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
        "handler": function (response) {
          localStorage.removeItem("cart")
          window.location.href = "../cart/";
        },
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    e.preventDefault();

  };

  return (
    <div className="landingpage">
    <div className='headingmain'>
      <div className='heading'>

        <p>Access curated courses worth </p>
        <p>₹ 18500 at just <span>₹ 99</span> per year!</p>
        </div>
        <div >
          <div class='offeringdetails'>
          <img src='assest/Icon.png' alt='books' style={{width:'57px', height:'57px'}}/>
          <p><span>100+</span> Job relevant courses</p>
          </div>
          <div class='offeringdetails'>
          <img src='assest/Icon (1).png' alt='book' style={{width:'57px', height:'57px'}}/>
          <p><span>20,000+</span> Hours of content</p>
          </div>
          <div class='offeringdetails'>
            <img src='assest/Icon (4).png' alt='tv' style={{width:'57px', height:'57px'}}/>
            <p><span>Exclusive</span> webinar access</p>
          </div>
          <div class='offeringdetails'>
            <img src='assest/Icon (3).png' alt='tv' style={{width:'57px', height:'57px'}}/>
            <p>Scholarship worth <span>₹94,500</span></p>
          </div>
          <div class='offeringdetails'>
            <img src='assest/Icon (2).png' alt='adfree' style={{width:'57px', height:'57px'}}/>
            <p><span>Ad Free</span> learning experience</p>
          </div>
        </div>
        </div>
      <div className="fee">
        <div className='signupsubscribe'>
              <div className='ns'>
                <p className='number'>1</p>
                <span>Sign Up</span>
              </div>
            <div className='ns'><p className='number'>2</p>
              <span>Subscribe</span></div>
          
            </div>
            <h1 style={{color:'black',fontSize:'1.3rem',textAlign:'center',marginBottom:'1rem'}}>Select your subscription plan</h1>
            <legend style={{backgroundColor:'#FF0000',width:'105px' ,fontSize:'18px',height:'22px',position:'absolute',borderRadius:'4px',top:'-20',right:'20',marginLeft:'2rem'}}>Offer expired</legend>
           <div className='plans'> 
        <div className="plan" style={{backgroundColor:'#E7E7E7'}}>
          <div className="plandetail" >
            <input type="radio" name="months" checked={subscriptionMonths === 12} onChange={() => handleSubscriptionChange(12, 99, 18401)} disabled/>
            <p style={{ color: 'black' }}>12 Months Subscription</p>
          </div>
           <div>
                     <p style={{color:'#3C4852'}}>Total <span style={{color:'black'}}>₹99</span></p>
                      <p style={{color:'black'}}>₹8 <span style={{color:'#BEBEBE'}}>/mo</span></p>
                  </div>
              </div>
              <legend style={{backgroundColor:'#47BA68',width:'130px',position:'absolute',top:'-20',right:'20',marginLeft:'2rem',fontSize:'20px',borderRadius:'4px'}}>Recommended</legend>
<div className="plangreen" style={{backgroundColor:'#D7EDDD'}}>
          
          <div className="plandetail">
            <input
              type="radio"
              name="months"
              className='greentick'
              
              checked={subscriptionMonths === 12}
              onChange={() => handleSubscriptionChange(12, 179, 18321)}
             />
           
            <p style={{ color: 'black' }}>12 Months Subscription</p>
          </div>
           <div>
                     <p style={{color:'#3C4852'}}>Total <span style={{color:'black'}}>₹179</span></p>
                      <p style={{color:'black'}}>₹15 <span style={{color:'#BEBEBE'}}>/mo</span></p>
                  </div>
                 
              </div>
        
        <div className="plan">
          <div className="plandetail">
            <input
              type="radio"
              name="months"
              checked={subscriptionMonths === 6}
              onChange={() => handleSubscriptionChange(6, 149, 18351)}
            />
            <p style={{ color: 'black' }}>6 Months Subscription</p>
          </div>
           <div>
            <p style={{color:'#3C4852'}}>Total <span style={{color:'black'}}>₹149</span></p>
            <p style={{color:'black'}}>₹25 <span style={{color:'#BEBEBE'}}>/mo</span></p>
          </div>
          </div>
        </div>
        <div className="plan">
          <div className="plandetail">
            <input
              type="radio"
              name="months"
              checked={subscriptionMonths === 3}
              onChange={() => handleSubscriptionChange(3, 99, 18401)}
            />
            <p style={{ color: 'black' }}>3 Months Subscription</p>
          </div>
          <div>
            <p style={{color:'#3C4852'}}>Total <span style={{color:'black'}}>₹99</span></p>
            <p style={{color:'black'}}>₹33 <span style={{color:'#BEBEBE'}}>/mo</span></p>
          </div>
        </div>
        <hr style={{height:'1px', margin:'1.4rem 1rem 0 1rem',color:'#BEBEBE'}}></hr>
       <div className='discountfee'>
        <p>
          Subscription Fee
        </p>
        <p>₹18,500</p>
       </div>
       <div className='limitedoffer'>
        <div className='limitedheading'>
          <p style={{color:'#FF0000'}}>Limited time offer</p>
          <p style={{color:'#3C4852'}}>-₹{offerTime}</p>
          </div>
          <div class='offervalidity'>
          <img  src='assest/Vector (1).png' alt='time' style={{width:'20px',height:'20px'}}  /><span style={{color:'#FF0000'}}>Offer valid till 25th March 2023</span>
        </div>
       </div>
        <div className="gst">
          <p style={{color:'#3C4852'}}>Total <span style={{color:'#BEBEBE'}}>(Incl. of 18% GST)</span></p>
          <p style={{color:'#3C4852'}}>₹{discount}</p>
        </div>
        <div className="buttons">
          <button
            type="submit"
            style={{
              color: '#FF0000',
              border: '1px solid #FF0000',
              width: '125px',
              height: '35px'
            }}
          >
            CANCEL
          </button>
          <button
            type="submit"
            style={{
              color: '#FFFFFF',
              backgroundColor: '#47BA68',
              border: '1px solid #47BA68',
              width: '135.5px',
              height: '35px'
            }}
            onClick={handleProceedToPay}
          >
            PROCEED TO PAY
          </button>
        </div>
        <div>
        <img src='assest/Frame 12537.png' alt='razorpay' style={{width:'95px',height:'35px' ,margin:'0.5rem '}}/>
       </div>
      </div>
    </div>
  );
}

export default LandingPage;



