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

export default mongoose.model('Score', ScoreSchema);

