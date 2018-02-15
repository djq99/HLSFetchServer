const express = require('express');
const hlsFetcher = require('hls-fetcher');
const mkdirp = require('mkdirp');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('downloads'))

app.get('/',(req,res) =>{
    res.send('Hello World');
})

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
        hlsFetcher.getIt(options,(err)=>{
            if(err){
                return res.status(400).send(err);
            }
            else{
                res.send('ok');
            }
        })
    })


})



app.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

module.exports = {app};