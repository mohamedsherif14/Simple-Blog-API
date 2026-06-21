const {body} = require("express-validator")

const userHandler = {
    signup:[
        body("name")
            .trim()
            .isLength({min:2}).withMessage("name must be 2 char at least")
            .isString().withMessage("name must be string")
        ,body("password")
            .isLength({min:6}).withMessage("password must be 6 char at least")
            .isString().withMessage("password must be string")
        ,body("email")
            .isEmail().withMessage("enter valid email")
    ],
    login:[
        body("password")
            .isLength({min:6}).withMessage("password must be 6 char at least")
            .isString().withMessage("password must be string")
        ,body("email")
            .isEmail().withMessage("enter valid email")
    ]
}

module.exports = userHandler