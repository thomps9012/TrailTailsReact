import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/trailtails', { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log('Connected to MongoDB')).
    catch(err => console.error('Could not connect to MongoDB', err));