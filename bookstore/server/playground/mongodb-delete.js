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

            db.collection('User').findOneAndDelete({ name: 'Ana Liz' }).then((result) => console.log(result));

            client.close();
        });

    } catch (error) {

    }
})();
