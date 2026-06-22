const {body} = require("express-validator")


const postHandler = {
    add:[
        body("title")
            .trim()
            .isLength({min:1}).withMessage("title could not be empty")
            .isString().withMessage("title must be string")
        ,body("contant")
            .trim()
            .isLength({min:1}).withMessage("contant could not be empty")
            .isString().withMessage("contant must be string")
    ],
    update:[
        body("title")
            .trim()
            .optional()
            .isLength({min:1}).withMessage("title could not be empty")
            .isString().withMessage("title must be string")
        ,body("contant")
            .trim()
            .optional()
            .isLength({min:1}).withMessage("contant could not be empty")
            .isString().withMessage("contant must be string")
    ]
}


module.exports = postHandler