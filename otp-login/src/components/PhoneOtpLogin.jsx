import { useState } from 'react'
import OtpLogin from './OtpLogin';

const PhoneOtpLogin = () => {
    const [showOtp, setShowOtp] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const [phoneNo, setPhoneNo] = useState("");

    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
    }

    const handlePhoneNoSubmit = (e) => {
        e.preventDefault();
        const isNumber = /^\d+$/;
        if(isNumber.test(phoneNo) && phoneNo.length >= 10) {
            setShowOtp(true);
        }
    }

    const handleLoggedIn = () => {
        setLoggedIn(true);
        setShowOtp(false);
    }

  return (
    <div>
      {
        !showOtp ? (
            <div>
                {
                    !loggedIn ? (
                        <form onSubmit={(e) => {handlePhoneNoSubmit(e)}}>
                            <input type="text" value={phoneNo} onChange={(e) => {handlePhoneNoChange(e)}} />
                            <button type="submit">Sent Otp</button>
                        </form>
                    ) : (
                        <h2>Successfully Logged In</h2>
                    )
                }
            </div>            
        ) : (
            <>
                <h3>Enter Otp sent to +91 {phoneNo}</h3>
                <OtpLogin length={4} handleLoggedIn={handleLoggedIn} />
            </>
        )
      }
    </div>
  )
}

export default PhoneOtpLogin
