import mongoose from 'mongoose';

const RoleSchema = mongoose.Schema(
    {
        role:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Role", RoleSchema)