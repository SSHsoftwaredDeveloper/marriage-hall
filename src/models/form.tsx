import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    dishes: {
        type: [{ label: String , 
            value: String }],
        required: true,
    },
    message: {
        type : String,
        required: true,
    }
},
)

const Form = mongoose.models.Form || mongoose.model('Form', formSchema)
export default Form;