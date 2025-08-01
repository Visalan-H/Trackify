import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code19: {
        type: String,
        required: true,
        unique: true
    },
    code24: {
        type: String,
        required: true,

    },
    credits: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['HS', 'BS', 'ES', 'PC', 'PE', 'OE', 'EEC', 'MC'],
        required: true
    },
    department:{
        type:Object,
        required:true
    }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;