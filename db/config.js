const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/googleForms',  {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    
})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

}

module.exports = connectdb;