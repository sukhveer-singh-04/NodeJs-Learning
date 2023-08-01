import Joi from 'joi';
const schema = Joi.object()
  .keys({
      _id : Joi.number,
      title : Joi.string,
      price : Joi.string,
      category : Joi.string,
      description : Joi.string,
      image : Joi.string
  })
const data = {
    _id : 52,
    title : 'csdcsc',
    price : 'vfdvdfvdf',
    category : 'jyjn',
    description : 'ynyn',
    image : 'mjjujyum'
};

const result = schema.validate(data);
console.log(result);