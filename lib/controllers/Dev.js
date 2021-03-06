const axios = require('axios');
const Dev = require('../models/dev');
module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users =  await Dev.find({
           $and: [
               { _id: { $ne: user }},
               { _id: { $nin: loggedDev.likes }},
               { _id: { $nin: loggedDev.dislikes }},
           ],
        });
        
        return res.json(users);
    },
    async store(req, res) {
        const { username } = req.body;
        const ifExists = await Dev.findOne({
            user: username
        });
        if (ifExists) {
            return res.json(ifExists);
        }
        const result = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url } = result.data;

        const dev = await Dev.create({
            name: name,
            user: username,
            bio: bio,
            avatar: avatar_url
        })

        return res.json(dev);
    }
}