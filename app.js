var express = require('express');
var bodyparser = require('body-parser');
var multer = require('multer');
var fs = require('fs')
var app = express();
app.set('view engine', 'pug');
app.listen(process.env.PORT, () => {
    console.log("Server has been started");
});
var upload = multer({ dest: 'uploads/' });
app.set('view engine', 'pug');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile("webpages/index.html", { root: 'public' });
});
app.post('/filesize', upload.single('file'),(req, res) => {
    reJson = {
        filesize: req.file.size
    };
    var fs = require('fs');
    var filePath = __dirname + '/uploads/';
    fs.unlinkSync(filePath + req.file.filename);
    res.json(reJson);
})