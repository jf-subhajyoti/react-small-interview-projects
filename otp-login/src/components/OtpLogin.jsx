import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const OtpLogin = ({ length = 4, handleLoggedIn = () => {}}) => {

    const [otp, setOtp] = useState(new Array(length).fill(""));
    const otpRef = useRef([]);

    useEffect(() => {
        if(otpRef.current && otpRef.current[0]) {
            otpRef.current[0].focus()
        }
    }, []);

    const handleOtpChange = (e, index) => {
        let {value} = e.target;
        if(isNaN(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);

        setOtp(newOtp);

        if(value && index + 1 < length && otpRef.current && otpRef.current[index + 1]) {
            otpRef.current[index + 1].focus();
        }

        if(newOtp.join('').length === length) {
            handleLoggedIn();
        }
    }
    const handleOtpClick = (e) => {
        e.target.setSelectionRange(1,1)
    }
    const handleOtpKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index - 1 >= 0 && otpRef.current && otpRef.current[index - 1]) {
            otpRef.current[index - 1].focus();
        }
    }

    return (
        <div>
            {
                otp?.map((ele, index) => {
                    return (
                        <input 
                            key={index} 
                            ref={input => otpRef.current[index] = input} 
                            type="text" 
                            value={ele}
                            onChange={(e)=>handleOtpChange(e, index)}
                            onClick={(e)=>handleOtpClick(e)}
                            onKeyDown={(e)=>handleOtpKeyDown(e, index)}
                            className="otpInput"
                        />
                    )
                })
            }
        </div>
    )
}

export default OtpLogin;