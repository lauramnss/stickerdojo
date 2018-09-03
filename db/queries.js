const knex = require("./knex")
module.exports = {
    fetchUsers(){
        return knex("users").orderBy("id")
    },
    fetchUser(id){
        return knex("users").where('id', id)

    },
    insertUser(body){
        return knex('users').insert({
            first_name: body.first_name,
            last_name: body.last_name,
            popularity: body.popularity,
            profession: body.profession,
            create_at: new Date().toISOString(),
            modif_at: new Date().toISOString()


        })
    }
}