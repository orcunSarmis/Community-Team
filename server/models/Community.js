const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const communitySchema = new Schema({
    communityName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
})