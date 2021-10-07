const exp = require("express");
const app = exp();
const fs = require("fs")
const { exit } = require("process");

let csvToJson = require('convert-csv-to-json');
const { once } = require("events");

    let rawdata = fs.readFileSync('config.json');
    let config = JSON.parse(rawdata);


if (!fs.existsSync('./whitelisted.csv')) {
    console.log("ERROR: No whitelisted.csv file has been found")
    exit(1)
}
if(!fs.existsSync('./whitelisted.json')){
    csvToJson.fieldDelimiter(',')
    csvToJson.generateJsonFileFromCsv("whitelisted.csv", "whitelisted.json")
    config.loaded = true;
    console.log("No whitelisted.json detected, converting csv to json")
}
if(!config.load_csv_onetime){
    csvToJson.fieldDelimiter(',')
    csvToJson.generateJsonFileFromCsv("whitelisted.csv", "whitelisted.json")
    console.log("Json reloaded: config is set csv_run_onetime = false")
}
else{
    console.log("Skipping csv reload, config is set csv_run_onetime = true")
}



app.get('/whitelisted', (req, res)=>{
    let rawdata = fs.readFileSync('whitelisted.json');
    let members = JSON.parse(rawdata);
    res.send(members)
})

app.get('/whitelisted/member/:address', (req, res, value) => {
    let sent = false;
    let rawdata = fs.readFileSync('whitelisted.json');
    let members = JSON.parse(rawdata);
    members.forEach(user => {
        if(user.member == req.params.address) {
            if(!sent){
                res.send([user]);
                sent = true
            }
        }
    });
    if(!sent){
        res.send({"member": undefined, "reserve": undefined})
    }
})

app.put('/whitelisted/update/:address/:reserves_left', (req, res) => {
    let sent = false;
    let rawdata = fs.readFileSync('whitelisted.json');
    let members = JSON.parse(rawdata);
    members.forEach(user => {
        if(user.member == req.params.address) {
            if(!sent){
                user.reserve = req.params.reserves_left;
                res.send([user]);
                sent = true
            }
        }
    });
    if(!sent){
        res.send({"member": undefined, "reserve": undefined})
    }
})
const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`listening on port ${port}`));