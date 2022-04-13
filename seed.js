import mongoose from 'mongoose';
import Review from './models/review.js';
import Trail from './models/trail.js';
import User from './models/user.js';

mongoose
    .connect('mongodb://localhost/trailtails', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const seedTrails = async () => {
    await Trail.insertMany([
        {
            name: 'Cleveland State Park',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'Cleveland',
                state: 'Ohio',
                country: 'United States',
                zip: '44114'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 5,
            reviews: []
        },
        {
            name: 'Cleveland Zoo',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'Cleveland',
                state: 'Ohio',
                country: 'United States',
                zip: '44114'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 4,
            reviews: []
        },
        {
            name: 'South Chagrin Reservation',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'Cleveland',
                state: 'Ohio',
                country: 'United States',
                zip: '44106'
            },
            length: 5,
            difficulty: 'medium',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 2,
            reviews: []
        },
        {
            name: 'North Chagrin Reservation',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'Cleveland',
                state: 'Ohio',
                country: 'United States',
                zip: '44114'
            },
            length: 5,
            difficulty: 'hard',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 1,
            reviews: []
        },
        {
            name: 'Central Park',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'New York',
                state: 'New York',
                country: 'United States',
                zip: '10001'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 5,
            reviews: []
        },
        {
            name: 'The Statue of Liberty',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'New York',
                state: 'New York',
                country: 'United States',
                zip: '10001'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 5,
            reviews: []
        },
        {
            name: 'Stinson Beach',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'San Francisco',
                state: 'California',
                country: 'United States',
                zip: '94016'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 5,
            reviews: []
        },
        {
            name: 'Golden Gate Bridge',
            description: 'This is a great place to go for a hike.',
            location: {
                city: 'San Francisco',
                state: 'California',
                country: 'United States',
                zip: '94016'
            },
            length: 5,
            difficulty: 'easy',
            image: 'https://www.nps.gov/common/uploads/grid_builder/imr/crop16_9/CABB8A3C-1DD8-B71B-0B8C8D8C8D8D8D8D.jpg?width=465&quality=90&mode=crop',
            rating: 5,
            reviews: []
        }
    ])
    console.log('Trails seeded');
}

const seedUsers = async () => {
    const trails = await Trail.find({});
    await User.insertMany([
        {
            email: 'bill@tigers.com',
            password: 'dumbopw2002',
            firstName: 'Bill',
            lastName: 'Tiger',
            phone: '1234567890',
            address: '123 Main St',
            city: 'Cleveland',
            state: 'Ohio',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[0]._id, trails[1]._id, trails[2]._id],
            reviews: [],
            favorites: [trails[1]._id, trails[2]._id],
            friends: [],
            isAdmin: true
        },
        {
            email: 'macy@macys.com',
            password: 'stumble19',
            firstName: 'Macy',
            lastName: 'Gray',
            phone: '1234567890',
            address: '123 Main St',
            city: 'Los Alamos',
            state: 'Texas',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[3]._id, trails[4]._id, trails[5]._id],
            reviews: [],
            favorites: [trails[4]._id, trails[5]._id],
            friends: [],
            isAdmin: false
        },
        {
            email: 'tdance@ligers.com',
            password: 'napon2020',
            firstName: 'Ted',
            lastName: 'Danson',
            phone: '1234567890',
            address: '123 Main St',
            city: 'Columbus',
            state: 'Ohio',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[6]._id, trails[7]._id, trails[1]._id],
            reviews: [],
            favorites: [trails[7]._id, trails[1]._id],
            friends: [],
            isAdmin: false
        },
        {
            email: 'rita@keybank.com',
            password: 'dollerbills',
            firstName: 'Rita',
            lastName: 'Turnkey',
            phone: '1234567890',
            address: '123 Main St',
            city: 'San Francisco',
            state: 'California',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[1]._id, trails[7]._id, trails[6]._id],
            reviews: [],
            favorites: [trails[6]._id, trails[7]._id],
            friends: [],
            isAdmin: false
        },
        {
            email: 'sjackson@trust.com',
            password: 'church19',
            firstName: 'Shawnda',
            lastName: 'Jackson',
            phone: '1234567890',
            address: '123 Main St',
            city: 'New York',
            state: 'New York',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[0]._id, trails[1]._id, trails[2]._id],
            reviews: [],
            favorites: [trails[0]._id, trails[1]._id, trails[2]._id],
            friends: [],
            isAdmin: false
        },
        {
            email: 'sfunny@comedian.com',
            password: 'working20',
            firstName: 'Sarah',
            lastName: 'Finnegan',
            phone: '1234567890',
            address: '123 Main St',
            city: 'New York',
            state: 'New York',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[0]._id, trails[1]._id, trails[2]._id],
            reviews: [],
            favorites: [trails[0]._id, trails[1]._id, trails[2]._id],
            friends: [],
            isAdmin: false
        },
        {
            email: 'suave@dontmesstx.com',
            password: 'kickass17',
            firstName: 'Rico',
            lastName: 'Suave',
            phone: '1234567890',
            address: '123 Main St',
            city: 'Houston',
            state: 'Texas',
            country: 'USA',
            zip: '44123',
            savedTrails: [trails[4]._id, trails[5]._id, trails[6]._id],
            reviews: [],
            favorites: [trails[4]._id, trails[5]._id, trails[6]._id],
            friends: [],
            isAdmin: false
        }
    ]);
}

const seedReviews = async () => {
    try {
        const trails = await Trail.find({});
        const users = await User.find({});
        await Review.insertMany([
            {
                title: 'Great hike',
                content: 'This was a great hike. I loved it!',
                rating: 5,
                user: users[0]._id,
                trail: trails[0]._id
            },
            {
                title: 'Good hike',
                content: 'This was a good hike. I loved it!',
                rating: 4,
                user: users[1]._id,
                trail: trails[1]._id
            },
            {
                title: 'Meh hike',
                content: 'This was a meh hike. I loved it!',
                rating: 3,
                user: users[2]._id,
                trail: trails[2]._id
            },
            {
                title: 'Bad hike',
                content: 'This was a bad hike. I loved it!',
                rating: 2,
                user: users[3]._id,
                trail: trails[3]._id
            },
            {
                title: 'Terrible hike',
                content: 'This was a terrible hike. I loved it!',
                rating: 1,
                user: users[4]._id,
                trail: trails[4]._id
            },
            {
                title: 'Great hike',
                content: 'This was a great hike. I loved it!',
                rating: 5,
                user: users[1]._id,
                trail: trails[5]._id
            },
            {
                title: 'Good hike',
                content: 'This was a good hike. I loved it!',
                rating: 4,
                user: users[2]._id,
                trail: trails[6]._id
            },
            {
                title: 'Meh hike',
                content: 'This was a meh hike. I loved it!',
                rating: 3,
                user: users[3]._id,
                trail: trails[7]._id
            }
        ])
    } finally {
        const users = await User.find({});
        const reviews = await Review.find({});
        await User.findOneAndUpdate({ _id: users[0]._id }, { $push: { reviews: reviews[0]._id } });
        await User.findOneAndUpdate({ _id: users[1]._id }, { $push: { reviews: reviews[1]._id } });
        await User.findOneAndUpdate({ _id: users[2]._id }, { $push: { reviews: reviews[2]._id } });
        await User.findOneAndUpdate({ _id: users[3]._id }, { $push: { reviews: reviews[3]._id } });
        await User.findOneAndUpdate({ _id: users[4]._id }, { $push: { reviews: reviews[4]._id } });
        await User.findOneAndUpdate({ _id: users[5]._id }, { $push: { reviews: reviews[5]._id } });
        console.log('Seeded reviews');
    }
}

const seedDb = async () => {
    try {
        await Trail.deleteMany({});
        await User.deleteMany({});
        await Review.deleteMany({});
    } catch (err) {
        console.log(err);
    }
    finally {
        seedTrails().then(() => {
            seedUsers().then(() => {
                seedReviews().then(() => {
                    console.log('Database seeded!')
                })
            })
        })
    }
}

seedDb();