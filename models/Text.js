import mongoose from 'mongoose';

const TextSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
});

mongoose.models = {};

export default mongoose.model('Text', TextSchema);