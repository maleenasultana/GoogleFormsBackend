const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectdb = () => {
    mongoose.connect('mongodb+srv://maleena:masabtank@cluster0.fvarzjq.mongodb.net/',  {
        useNewUrlParser: true, 
        useUnifiedTopology: true
})

.then(()=> console.log('DB is connected'))
.catch(err => console.log(err));

}

module.exports = connectdb;