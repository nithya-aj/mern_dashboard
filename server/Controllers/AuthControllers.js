import bcrypt from "bcrypt";
import UserModel from "../Models/UserModel.js";
import otpModel from "../Models/otp.js";

// Registering a new User
export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new UserModel(req.body);
    const { email } = req.body

    try {
        const oldUser = await UserModel.findOne({ email })

        if (oldUser) {
            return res.status(400).json({ message: "email is already registered!" })
        }
        const user = await newUser.save();
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// login User   

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            const validity = await bcrypt.compare(password, user.password);
            if (!validity) {
                res.status(400).json({ message: 'Wrong password' });
            }
        } else {
            res.status(404).json({ message: 'User does not exist' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//change password
export const changePassword = async (req, res) => {
    const { newPass, email } = req.body
    try {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        if (user) {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(newPass, salt);
            user.password = hashedPass
            const updatedUser = await user.save()
            res.status(200).json({ message: 'Password changed successfully', user });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
