require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors()); // to resolved the browser restriction
app.use(express.json()); // to parse the data from the requested body


// mongodb database 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB__USER}:${process.env.DB__PASS}@cluster0.ddl1jzo.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const userManagementCollection = client.db('userManagementSystemDB').collection('userManagementCollection');
    
    // post api for a single user
    app.post('/users', async (req, res) => {
        const newUserRequest = req.body;
        const newUser = await userManagementCollection.insertOne(newUserRequest);
        res.send(newUser);
    })

    // get api for all users
    app.get('/users', async (req, res)=>{
        const cursor = userManagementCollection.find()
        const processedUsers = await cursor.toArray();
        res.send(processedUsers);
    })

    // delete api for a single specific user
    app.delete('/users/:id', async (req, res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const deletedUser = await userManagementCollection.deleteOne(query);
        res.send(deletedUser);

    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})