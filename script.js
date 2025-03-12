function generatorOTP(length = 6){
    let otp = "";
    for(let i = 0; i < length; i++){
        otp += Math.floor(Math.random() * 10);
    }
    
    document.write(`Your OTP is: ${otp}`);
}

const otp = generatorOTP();


