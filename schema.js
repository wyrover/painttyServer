var mongoose = require('mongoose');

exports.Model = {};
exports.Schema = {};

var roomSchema = mongoose.Schema({
    name: String,
    canvasSize: {
    	width: Number,
    	height: Number
    },
    password: String,
    maxLoad: Number,
    welcomemsg: String,
    emptyclose: Boolean,
    expiration: Number,
    permanent: Boolean,
    initTimestamp: Number,
    checkoutTimestamp: Number,
    key: String,
    archive: String,
    archiveSign: String,
    port: Number,
    // Notice, localId is not a real part of Room. 
    // Instead, it represents which Child proceess owns it.
    // Designed for easy querying.
    localId: Number 
});

exports.Schema.Room = roomSchema;

exports.Model.Room = mongoose.model('Room', roomSchema);
