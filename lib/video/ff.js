var owner = "Islamick Chat"
var caption = "╭•┄┅════❁🌺❁════┅┄•╮\n FF Lover Best Video\n╰•┄┅════❁🌺❁════┅┄•╯"
exports.name = '/video/ff';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/ff.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            emon: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}