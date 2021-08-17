const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');




const app = express();

app.use(cors())

mongoose.connect('mongodb+srv://Nathan:Password123@cluster0.ayuv0.mongodb.net/Practice-gql?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo db')
})
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true

  }),
);

app.listen(4000);