import User from '../Models/User.js'
import bcrypt from 'bcryptjs';

class AuthController {

    async Register(req,res, next) {
        try {
            //console.log(req.body);
            const { name, email, password } = req.body;
            if(!name || !email || !password) {
                return res.status(400).json({msg: "Please provide all values"});
            }

            const emailAlreadyExist = await User.findOne({email});
            if(emailAlreadyExist) {
                return res.status(401).json({msg: "Email address already used"})
            }

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            const user = await User.create({name, email, password: hash});
            console.log(user)
            User.createJWT()
            return res.status(200).json({user: user});
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