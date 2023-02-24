const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: [3, "Name must contain 3 letters"]
    },
    lname: {
        type: String,
        required: true,
        min: [3, "Name must contain 3 letters"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(v) {
            if (!validator.isEmail(v)) {
                throw new Error("Invalid Email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        min: [5, "min length 5 required"]
    },
    tokens: [{
        token: {
            type: String,
        },
        date: {
            type: String,
            default: function () {
                const timeElapsed = Date.now()
                const today = new Date(timeElapsed);
                return today.toUTCString();
            }
        }
    }],
    date: {
        type: String,
        default: function () {
            const timeElapsed = Date.now()
            const today = new Date(timeElapsed);
            return today.toUTCString();
        }
    }
});

userSchema.methods.generateAuthToken = async function () {
    try {
        const user = this
        const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY);
        user.tokens = user.tokens.concat({ token })
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

// securing password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const NewextUser = new mongoose.model("NewexrUser", userSchema);

module.exports = NewextUser;