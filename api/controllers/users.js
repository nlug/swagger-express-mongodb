Users = require ("../modals/User.js")
module.exports = {
    get: (req, res) => {
        Users.find().exec((error, data) => {
            if (!error)
                res.json(data)
            else
                res.end("error")
        })
    },
    post: (req, res) => {
        console.log (req.swagger.params.data.value); // Get data object in body
        var newUser = new Users(req.swagger.params.data.value)
        newUser.save();
        res.json(newUser);
    },
    getOne: (req,res) => {
        Users.find({UID: req.swagger.params.id.value}).exec((error, data) => {
            if (error)
                res.end("error")
            if (data)
                res.json(data)
            else
                res.end("404 not found")
        }) ;
    }
}