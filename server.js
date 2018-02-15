const express = require('express');
/*
Modified some parts of the hls-fetcher npm package
like check same name file
and return the file name after download.
 */
const hlsFetcher = require('./util/index');
const mkdirp = require('mkdirp');

const app = express();
const port = process.env.PORT || 3000;

//enable CORS through express middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.use(express.static('downloads'))

app.get('/stream',(req,res)=>{
    const remoteHLS = req.query.hlsurl;
    const output = './downloads'

    mkdirp(output, function (err) {
        if (err) {
            console.error('Error while creating output path:', output);
            console.error(err);
        }
        const options = {
            uri: remoteHLS,
            cwd: output
        };
        hlsFetcher.getIt(options,(err,fileName)=>{
            if(err){
                console.log('here');
                return res.status(400).send(err);
            }
            else{
                var fullUrl = `${req.protocol}://${req.get('host')}/${fileName}`;
                res.send(fullUrl);
            }
        })
    })
})



app.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

module.exports = {app};