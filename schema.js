const Joi = require("joi");

module.exports.postSchema = Joi.object({
  post: Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    code: Joi.string().required(),
    likes: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
  }).required(),
});

module.exports.commentSchema = Joi.object({
    comment: Joi.object({
        comment: Joi.string().required()
    }).required(),
});