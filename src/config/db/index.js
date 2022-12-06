const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/ita_blog_dev');
        console.log('connect sus')
    }
    catch(error){
        console.log('connect falid')

    }
}

module.exports = {connect}