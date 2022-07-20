const express = require('express');
const Path = require('path')

const PORT = 8081;

const app = express();

console.log(Path.join(__dirname,"./public"));

const Staticpath = Path.join(__dirname,'./public')


app.use(express.static(Staticpath))




app.listen(PORT,()=>{
    console.log(`app is listening to Port : ${PORT}`);
    
})