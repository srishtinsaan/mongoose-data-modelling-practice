import mongoose from 'mongoose'


const doctorSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        specializedIn : [
            {
                type : String,
                required : true,
            }
        ],
        age : {
            type : Number,
            required : true,
        },
        salary : {
            type : Number,
            required : true,
        },
        qualification : {
            type : String,
            required : true,
        },
        experienceInYears : {
            type : Number,
            default : 0,
        },
        worksInHospitals : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Hospital"
            }
        ]
    },
    {timestamps : true}
)

export const Doctor = new mongoose.model("Doctor", doctorSchema)