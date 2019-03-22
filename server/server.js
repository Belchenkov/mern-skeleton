import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

// Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri,  { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connecting');
        app.listen(config.port, (err) => {
            if (err) {
                console.log(err);
            }
            console.info('Server started on port %s.', config.port);
        });
    })
    .catch(err => console.log(err));
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
});


