import Link from "../models/Link.js";

const postLink = async(req,res) =>{
    const {title , target , slug} =req.body;

    const link = new Link({
        title,
        target,
        slug
    })

    const savedLink = await link.save();

    res.json({
        success:true,
        data:savedLink,
        message : "Link created successfully"
    })
}
const getAllLinks = async(req ,res)=>{
    const links = await Link.find()

    res.json({
        success: true,
        data: links,
        message: "All links Fetch Successfully.."
    })
}

const getRedirect = async(req,res) =>{
    const { slug } =req.params;

    const link = await Link.findOne({slug});

    if(!link){
        return  res.json({
            success: false,
            message: "Link not found"
        })
    }

    link.views = link.views + 1;
    await link.save();
    
    res.redirect(link.target)
}

export {
    postLink,
    getRedirect,
    getAllLinks
};