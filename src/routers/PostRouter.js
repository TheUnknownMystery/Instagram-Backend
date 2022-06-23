const express = require('express');
const PostRouter = new express.Router();

PostRouter.get('/', () => {
  console.log('test');
});

PostRouter.post('/like/:id', () => {
  console.log('test');
});

PostRouter.post('/dislike/:id', () => {
  console.log('test');
});

PostRouter.get('/comments', () => {
  console.log('test');
});

PostRouter.post('/comments', () => {
  console.log('test');
});

PostRouter.delete('/comments', () => {
  console.log('test');
});

module.exports = PostRouter;
