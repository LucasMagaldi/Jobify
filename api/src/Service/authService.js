import User from '../Models/User.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class authService {

    async register(name, email, pw) {
        try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(pw, salt);

            const user = await User.create({name, email, password: hash});
            console.log(user)
            return user;
        } catch (error) {
            return false
        }
    }

    login() {
        
    }

    async findByEmail(email) {
        try {
            const emailAlreadyExist = await User.findOne({email});
            console.log(`Here: ${emailAlreadyExist}`)
            return emailAlreadyExist;
        } catch (error) {
            return error
        }
    }

}

export default new authService();