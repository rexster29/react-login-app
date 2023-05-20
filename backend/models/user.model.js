const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: { type: String },
    token: { type: String },
}, {
    timestamps: true,
});

const { Schema, model } = require("mongoose");


const User = mongoose.model('UserDetails', userSchema);

module.exports = User;