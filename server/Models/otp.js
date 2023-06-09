import mongoose from "mongoose";

const otpSchema = mongoose.Schema(
    {
        email: String,
        code: String,
        expireIn: Number
    },
    { timestamps: true }
);

const otpModel = mongoose.model("Otp", otpSchema);
export default otpModel;