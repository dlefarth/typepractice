import mongoose from 'mongoose';

const ScoreSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
});

mongoose.models = {};

export default mongoose.model('Score', ScoreSchema);

