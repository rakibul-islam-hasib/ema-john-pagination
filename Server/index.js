const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


// Middleware 
app.use(cors());
app.use(express.json())



// Mongodb 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zioaowq.mongodb.net/?retryWrites=true&w=majority`;

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
    const emaJhon = client.db('emajhon').collection('shopDB');

    app.get('/shop', async (req, res) => {
      const page = parseInt(req.query.page) || 0 ; 
      const limit = parseInt(req.query.limit) || 10 ; 
      const skip = page * limit ; 
      const result = await emaJhon.find().skip(skip).limit(limit).toArray();
      res.send(result);
    })

    // get total number of count per page 
    app.get('/totalData', async (req, res) => {
      const result = await emaJhon.estimatedDocumentCount();
      res.send({ totalItem: result })
    })
    // * Get data by id
    app.post('/product', async (req, res) => {
      const id = req.body;
      const objectId = id.map(id => new ObjectId(id));
      const query = { _id: { $in: objectId } };
      const result = await emaJhon.find(query).toArray();
      res.send(result);
    })
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('SERVER IS RUNNING')
})

app.listen(port, () => {
  console.log(`SERVER IS RUNNING AT PORT : ${port}`)
})
