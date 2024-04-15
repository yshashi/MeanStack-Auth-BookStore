import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        profileImage: {
            type: String,
            required: false,
            default: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
       roles:{
            type: [Schema.Types.ObjectId],
            required: true,
            ref: "Role"
        } 

    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);