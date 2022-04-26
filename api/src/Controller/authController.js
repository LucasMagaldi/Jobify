

class AuthController {

    async Register(req,res) {
        return res.status(200).json({msg: "Register"})
    }

    async Login(req,res) {
        return res.status(200).json({msg: "Login"})
    }

    async Update(req,res) {
        return res.status(200).json({msg: "Updated user"})
    }

}

export default new AuthController();