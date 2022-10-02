import { MongoClient } from 'mongodb';

//  /api/new-mmetup
//  POST /api/new-meetup

const MONGODB_URI = 'mongodb://127.0.0.1:27017/meetups';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const {title, image, address, description} = data;

        const client = await MongoClient.connect(MONGODB_URI)
        console.log('Na here', client)
        const db = client.db();

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted'})
    }
}

export default handler;