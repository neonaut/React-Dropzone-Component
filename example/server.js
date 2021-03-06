var express     = require('express'),
    path        = require('path'),
    multer      = require('multer'),
    bodyParser  = require('body-parser'),
    MulterImpl  = require('./src-server/multerImpl'),
    app         = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./'));
app.use(new MulterImpl({}).init());

app.post('/uploadHandler', function (req, res) {
    // This block is only relevant to users
    // interested in custom parameters - you
    // can delete/ignore it as you wish
    if (req.body) {
        console.dir(req.body);
    }

    res.sendStatus(200);
});

module.exports = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
    console.log('Visit http://localhost:' + app.get('port') + '/example/ to check out the upload example');
});