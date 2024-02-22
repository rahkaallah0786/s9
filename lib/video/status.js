var owner = "EMON HAWLADAR"
var caption = "☆《STATUS VIDEO》☆"
exports.name = '/video/status';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/status.json');
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