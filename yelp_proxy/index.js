const app = require('express')();
const needle = require('needle');

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});

app.get('/', (req, res) => res.send(
    `<p style="font-family: sans-serif; font-size: 1.2em; padding: 20px; width: 800px;">You've reached the Yelp proxy! <br/>To send an api call to Yelp through this proxy use the endpoint http://localhost:3000/yelp.
     <br></p>`));
app.get('/yelp', (req, res) => {

    try{
        const params = req.query;
        let url = 'https://api.yelp.com/v3/businesses/search?term=restaurants';

        for (let key in params){
            if(params.hasOwnProperty(key) && key !== 'apikey'){
                url += '&' + key + '=' + params[key];
            }
        }

        let options = {
            headers: {
                'Authorization': 'Bearer ' + req.query.apikey
            }
        };

        needle.get(url, options, (err, resp) => {
            if(err){
                res.json({'errors':[{error:err}],data:{}});
            }else if(typeof resp.body.error !== 'undefined'){
                res.json({'errors':[{error:resp.body.error.description}],data:{}});
            } else {
                res.json(JSON.stringify({'errors':[],data:{businesses:resp.body.businesses}}));
            }
        });

    } catch(err){
        res.json({'errors':[{error:err}],data:{}});
    }
});

app.listen(3000, () => console.log('The Yelp proxy is running on port 3000!'));