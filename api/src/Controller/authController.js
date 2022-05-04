import User from '../Models/User.js'
import dotenv from 'dotenv';
import authService from '../Service/authService.js';
import jwt from 'jsonwebtoken';

dotenv.config();

class AuthController {

    async Register(req,res, next) {
        try {
            //console.log(req.body);
            const { name, email, password } = req.body;
            if(!name || !email || !password) {
                return res.status(400).json({msg: "Please provide all values"});
            }

            const emailAlreadyExist = await authService.findByEmail(email)
            //const emailAlreadyExist = await User.findOne({email});
           // console.log(emailAlreadyExist._id)
            if(emailAlreadyExist) {
                return res.status(401).json({msg: "Email address already used"})
            }

            const user = await authService.register(name, email, password);
        
            return res.status(200).json({
                status: true,
                user: {
                    email: user.email,
                    lastName: user.lastName,
                    location: user.location,
                    name: user.name
                },
                token: jwt.sign(
                    {id: user._id, location: user.location, name: user.name },
                    process.env.JWT_SECRET,
                    {expiresIn: "1h"}
                )
            });
        } catch (error) {
           // console.log(error);
            next(error)
            //return res.status(500).json({msg: "Register fail"})
        }
        
    }

    async Login(req,res) {
        return res.status(200).json({msg: "Login"})
    }

    async Update(req,res) {
        return res.status(200).json({msg: "Updated user"})
    }

}

export default new AuthController();