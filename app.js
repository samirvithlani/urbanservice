const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./src/config/config');
const PORT = config.PORT;
app.use(express.json());
app.use(cors());





const roleRoutes = require('./src/routes/RoleRoutes');
app.use('/api/role',roleRoutes);




mongoose.connect(config.DB_URL).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

