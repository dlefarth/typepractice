import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    }
});

export default mongoose.model('User', UserSchema);