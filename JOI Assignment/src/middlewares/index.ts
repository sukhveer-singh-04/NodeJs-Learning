import Joi from 'joi';


// const schema = Joi.object()
//     .keys({
//         _id: Joi.number,
//         title: Joi.string,
//         price: Joi.string,
//         category: Joi.string,
//         description: Joi.string,
//         image: Joi.string
//     })

export function validator(req: any, res: any, next: Function){

        const schema = Joi.object()
            .keys({
                _id: Joi.number(),
                title: Joi.string().required(),
                price: Joi.string(),
                category: Joi.string(),
                description: Joi.string(),
                image: Joi.string()
            });
            
        // console.log("req body - ", req.body);
        const result = schema.validate(req.body);

        // const valid = err == null;
        // console.log('val res', result);
        
        if (result) {
            next();

        }
        else {
            console.log("error", result);
            res.status(422).json({ error: result })
        }
    }


// export { validator };