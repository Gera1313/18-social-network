const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');

const PORT = process.env.PORT || 3002;
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Social Network API');
});

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
});