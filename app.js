const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); 

const app = express();app.use(cors({}));
//add mongodb atlas url
const URL = "mongodb+srv://root:S3ESfG81G7NRV0Th@myfirstcluster.zoylr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const URL = 'mongodb://localhost:27017/mydb'


// new username : root
// new password :  S3ESfG81G7NRV0Th
// new url of mongodb : 

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
    })

const con = mongoose.connection

app.use(express.json())
try{
    con.on('open',() => {
        console.log('Connected After the Service started......');
    })
}catch(error)
{
    console.log("Error: "+error);
}
//  frontend build in dist folder and used in our node application to make a single docker file
app.use(express.static('dist'));
const aliRouter = require('./routes/aliens')

app.use('/aliens',aliRouter)

// app.listen(8080, function(){
//     console.log('Server Started')
// })

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});




