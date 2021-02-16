import Joi from 'joi'

export default {
  test: Joi.object().keys({
    test: Joi.number().min(1).required()
  })
}
