import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    //* EC2 URI
    BaseUrl: process.env.EC2_URI as string,
};
