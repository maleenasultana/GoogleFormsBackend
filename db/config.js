const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//'mongodb+srv://maleena:masabtank@cluster0.mgflvja.mongodb.net/?retryWrites=true&w=majority'
//mongodb://localhost:27017/googleForms
const connectdb = () => {
    mongoose.connect('mongodb+srv://maleena:masabtank@cluster0.mgflvja.mongodb.net/?retryWrites=true&w=majority',  {
        useNewUrlParser: true, 
        useUnifiedTopology: true
})

.then(()=> console.log('DB is connected'))
.catch(err => console.log(err));

}

module.exports = connectdb;