import mongoose from 'mongoose';
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'lastName'
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide PW'],
        select: true
        //unique: true
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'My city'
    }
});

/*UserSchema.pre('save', async () => {
    console.log(this)
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});*/

export default mongoose.model('User', UserSchema);