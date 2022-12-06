const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  decription: {
    type: String,
    default: ' ',
  },
  image:{
    type: String,
    default: ' ',
  }, 
  date: {
    type:String,
    default: Date.now(),
  }, 
  author:{
    type: String,
    default: ' ',
  },
  slug:{
    type: String,
    default: this.name,
  },
  title:{
    type: String,
    default: ' ',
  },
  image:{
    type: String,
    default: ' ',
  },
  
  name:{
    type: String,
    default: ' ',
  },
 
  level:{
    type:String,
    default: '',
  }
  
},{
  timestamps: true,
});

module.exports = mongoose.model('BlogPost',BlogPost )



