import User from '../Models/User.js'

class AuthController {

    async Register(req,res, next) {
        try {
            //console.log(req.body);
            const { name, email, password } = req.body;
            const user = await User.create({name, email, password});
            console.log(user)
            return res.status(200).json({user: user})
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