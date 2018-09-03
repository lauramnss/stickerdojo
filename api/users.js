const express = require ('express')
const router = express.Router()
const queries = require ("../db/queries")

router.get("/", (req, res) => {
    queries.fetchUsers().then((users) => {
        res.json({
            message: 'success',
            data: users
        })
    })
})

router.get("/:id", (req, res) => {
    queries.fetchUser(req.params.id).then((user) => {
        if(user.length){
            res.json({
                message: 'successfully get users with id' + req.params.id,
                status: 200,
                data: user
            })

        }else{
            res.json({
                message: 'failed get user with id' + req.params.id,
                status: 404,
                data: user
            })

        }
    })
})
        

router.post("/", (req, res) => {
    queries.insertUser(req.body).then((result) => {
        res.json({
            message: "its no easy",
            status: 201
        })
        
    })


})

module.exports = router
