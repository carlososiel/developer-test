const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

(async function () {

    try {
        await MongoClient.connect(url, (error, client) => {
            if (error) {
                return console.log('Unable to connect to MongoDB database');
            }
            console.log('Connected to MongoDB database');

            const db = client.db(dbName);

            db.collection('User').findOneAndUpdate(
                { name: 'Ana Liz' },
                { $set: { location: 'La Habana' } },
                { returnOriginal: false }
            ).then((result) => console.log(result));

            client.close();
        });

    } catch (error) {

    }
})();
