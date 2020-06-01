const Joi = require('@hapi/joi');
const { nanoid } = require('nanoid');

const db = require('./connection');
const urls = db.get('urls');

const create = async (data) => {
    if (!data.name) {
        data.name = nanoid(5);
    }
    const schema = Joi.object().keys({
        name: Joi.string().token().min(1).max(30).required(),
        link: Joi.string().min(1).max(500).required()
    });
    const result = await schema.validate(data);
    if (!result.error) {
        const exists = await urls.findOne({ name: data.name });
        if (exists) {
            return Promise.reject({
                isError: true,
                message: '🙊 Name already Exists' 
            });
        } else {
            return urls.insert(data);
        }
    } else {
        return Promise.reject({
            isError: true,
            message: '😮 Your name and URL do not match our schema!'
        });
    }
};

const find = async (name) => {
    const url = await urls.findOne({ name: name });
    return url;
}

module.exports = {
    create,
    find
};