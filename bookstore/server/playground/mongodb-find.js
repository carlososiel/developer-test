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

            db.collection('User').find({ _id: new ObjectId("5acea9654c8bac2c60ee78bd") }).toArray()
                .then(
                    (documents) => {
                        console.log(documents)
                    },
                    (error) => {
                        console.log(error)
                    }
                );

                db.collection('User').find({ name: 'Ana Liz' }).count()
                    .then(
                        (count) => {
                            console.log(`Users count: ${count}`)
                        },
                        (error) => {
                            console.log(error)
                        }
                    );

            client.close();
        });

    } catch (error) {

    }
})();
