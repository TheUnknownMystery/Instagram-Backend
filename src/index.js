require('./connect/connection');
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const PostRouter = require('./routers/PostRouter');

const app = express();

app.use(express.json());
app.use('/users', UserRouter);
app.use('/posts', PostRouter);

app.listen(3000);
