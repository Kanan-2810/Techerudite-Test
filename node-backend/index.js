
require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./schema/typeDefs');
const cors = require('cors');
const resolvers = require('./resolvers/authResolver');
const  { PrismaClient } = require ("@prisma/client");

const app = express();
app.use(cors());
app.use(express.json());

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = 4000;
const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log(`Database connection established successfully :)`);
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/graphql`));
  })
  .catch((error) => {
    console.error(`Error while connecting to the database: ${error}`);
    process.exit(1);
  });


