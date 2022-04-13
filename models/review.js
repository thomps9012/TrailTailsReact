import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    trail: {
        type: Schema.Types.ObjectId,
        ref: "Trail"
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;