const express = require('express');
const hlsFetcher = require('hls-fetcher');
const mkdirp = require('mkdirp');

const app = express();
const port = process.env.port || 3000;


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

    // hlsFetcher(options).then(function(){
    //     var timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
    //     console.log('Operation completed successfully in', timeTaken, 'seconds.');
    // })
})



app.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

module.exports = {app};