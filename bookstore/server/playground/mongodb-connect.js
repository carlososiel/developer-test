const { MongoClient } = require('mongodb');

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

            db.collection('User').insertOne(
                {
                    name: 'Ana Liz',
                    age: 30,
                    location: 'Pinar del Río'
                },
                null,
                (error, result) => {
                    if (error) {
                        return console.log('Unable to insert User');
                    }

                    console.log(result.ops, undefined, 2)
                });

            client.close();
        });

    } catch (error) {

    }
})();
