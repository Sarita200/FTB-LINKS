import User from "../models/User.js";

const postSignUp= async (req,res) =>{
    const { fullName,email,password,proffession } = req.body
    const user = new User({
        fullName,
        email,
        password,
        proffession
    })

    try{
        const savedUser = await user.save();
        
        res.json({
            succss :true,
            data : savedUser,
            message: "SignUp successfull"
        })
    }
    catch(e){
        res.json({
            success :false,
            data:null,
            message: e
            .message
        })
    }
}

export {
    postSignUp
};