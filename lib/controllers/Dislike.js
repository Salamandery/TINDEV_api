const Dev = require('../models/dev');
module.exports = {
    async store(req, res){
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!loggedDev) {
            return res.status(400).json({error: "Dev not exists"});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json({loggedDev});
    }
}