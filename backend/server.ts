import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import app from './app';
import schema from './src/graphql/schema';

mongoose
  .connect(String(process.env.DATABASE), {})
  .then(() => {
    console.log("🤩🍃 MongoDB is Running");
  })
  .catch(err => {
    console.log(`❌🤬 ${err}`);
    process.exit();
  });

mongoose.connection.on('error', err => `❌🤬❌🤬 ${err}`);

const PORT = Number(process.env.PORT);

const server: ApolloServer = new ApolloServer({
  schema,
  introspection: true,
  context: integrationContext => ({
    req: integrationContext.req,
    res: integrationContext.res,
    setCookies: [],
    setHeaders: [],
  }),
});

server.start().then(() => {
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      // gin: [process.env.CLIENT_URL!, process.env.DASHBOARD_URL!],
    },
  });

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
});

