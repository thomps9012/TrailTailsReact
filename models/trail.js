import mongoose from 'mongoose';
const { Schema } = mongoose;

const trailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    },
    length: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review"
    }],
});

const Trail = mongoose.model('Trail', trailSchema);
export default Trail;
