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
            success :true,
            data : savedUser,
            message: "SignUp successfull"
        })
    }
    catch(e){
        res.json({
            success :false,
            data:null,
            message: e.message
        })
    }
}

const postLogin = async(req,res) =>{
    const {email , password} =req.body

    const user = await User.findOne({
        email :email,
        password: password
    });
    if(user){
        return res.json({
            success : true,
            data: user,
            message: "Login Successfully"
        })
    }
    else{
        res.json({
            success: false,
            data:null,
            message: "Invalid Credential"
        })
    }
}

export {
    postSignUp,
    postLogin
};