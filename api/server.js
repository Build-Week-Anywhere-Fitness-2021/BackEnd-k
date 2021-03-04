const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

// **************************************** uncomment once folders have been added ************************
const authRouter = require('../api/auth/auth-router');
const userRouter = require('../api/users/users-router');
const instructorRouter = require('../api/instructor/instructor-router');

server.use(express.json())
server.use(helmet())
server.use(cors())

// **************************************** uncomment once folders have been added ************************
server.get('/', (req, res) => {
    res.send({api: 'is ALIVEEEEEE!'});
});
  
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/instructor', instructorRouter);

module.exports = server
