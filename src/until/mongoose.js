const { default: mongoose } = require("mongoose")

module.exports = {
    mutipleMongooseObjectToObject: function(moongoses) {
        return moongoses = moongoses.map(mongoose => mongoose.toObject())

    },
    mongooseObjectToObject: function(moongose) {
        return moongose ? moongose.toObject() : moongose
    }
}