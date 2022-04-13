// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
import bcrypt from "bcrypt";
import mongoose from 'mongoose';
const {Schema} = mongoose;
// Creating our User model
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    // The password cannot be null
    // hash the password before saving it to the database
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // hash the phone number before saving it to the database
    phone: {
        type: String,
        required: true
    },
    // The address fields cannot be null
    // hash the address fields before saving it to the database
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    savedTrails: [{
        type: Schema.Types.ObjectId,
        ref: "Trail"
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: "Trail"
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const User = mongoose.model("User", userSchema);
export default User;