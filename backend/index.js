const express = require('express')
const sequelize = require('./config/db')
const cookieParser = require('cookie-parser')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())

app.use(cookieParser())

// Sync database
sequelize.sync({ force: false })
    .then(() => console.log('Database & tables created'))
    .catch(err => console.error('Sync error:', err));

app.use('/api/v1', require('./routes/UserRoutes'))

app.use('/api/v1', require('./routes/QuizRoutes'))

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})