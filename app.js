const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
app.use(express.json());
app.use(userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.console.log('Server running on port ${PORT}');
})