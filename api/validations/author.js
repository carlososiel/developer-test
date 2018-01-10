var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
module.exports = Joi.object({  
    _id: Joi.objectId(),  
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),  
});