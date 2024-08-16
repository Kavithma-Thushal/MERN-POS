const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const customerRoutes = require('./routes/CustomerRoutes');
const itemRoutes = require('./routes/ItemRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/v1/Customer', customerRoutes);
app.use('/api/v1/item', itemRoutes);

// MongoDB Connection
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...!'))
    .catch(err => console.error('MongoDB Connection Error...! : ', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});