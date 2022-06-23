const express = require('express');
const UserRouter = new express.Router();

UserRouter.get('/me', () => {
  console.log('test');
});
UserRouter.post('/login', () => {
  console.log('test');
});
UserRouter.post('/logout', () => {
  console.log('test');
});
UserRouter.get('/', () => {
  console.log('test');
});
UserRouter.get('/friends', () => {
  console.log('test');
});
UserRouter.get('/friends/:name', () => {
  console.log('test');
});

module.exports = UserRouter;
