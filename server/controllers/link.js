import Link from "../models/Link.js";
import User from "../models/User.js";

const postLink = async (req, res) => {
    const { title, target, slug, user } = req.body;

    const link = new Link({
        title,
        target,
        slug,
        user
    })

    try {
        const savedLink = await link.save();

        res.json({
            success: true,
            data: savedLink,
            message: "Link created successfully"
        })
    }
    catch (e) {
        res.json({
            success: false,
            data: null,
            message: e.message
        })
    }
}
    const getRedirect = async (req, res) => {
        const { slug } = req.params;

        const link = await Link.findOne({ slug });

        if (!link) {
            return res.json({
                success: false,
                message: "Link not found"
            })
        }

        link.views = link.views + 1;
        await link.save();

        res.redirect(link.target)
    }

    const getAllLinks = async (req, res) => {
        const { userId } = req.query;
        console.log('userId', userId)
        const user = await User.findById(userId);

        if (!user) {
            return res.json({
                success: false,
                data: null,
                message: "user not found"
            })
        }
       
        const links = await Link.find({ user: userId }).sort({ createdAt: -1 })

        res.json({
            success: true,
            data: links,
            message: "All links Fetch Successfully.."
        })
    
    }




export {
    postLink,
    getRedirect,
    getAllLinks
};