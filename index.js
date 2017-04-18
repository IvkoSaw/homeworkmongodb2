var MongoClient = require('mongodb').MongoClient;

//#5
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#6
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().limit(5).toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#7
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().skip(5).limit(5).toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#8
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().limit(20).toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#9
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().project({_id:true, name:true, address:true}).toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#10
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").find().sort({bonus:-1}).limit(15).toArray(function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});

//#11
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").insertOne({
        name: 'Eobard Thawne',
        address: '24 Cherry St. Morganton, NC 28655',
        latitude: 43.43071,
        longitude: -58.45061,
        maiden_name: 'Reverse-Flash',
        birth: '1970-06-26',
        phone_h: '516-578-5133x797',
        phone_w: '1-312-143-2765',
        email_u: 'reverse',
        email_d: 'reverse-flash.pp.ua',
        username: 'Flash70',
        password: '!d-]AFYqUXaf8fqG177',
        domain: 'baumbach.com',
        useragent: 'Mozilla\\/5.0 (iPhone; CPU iPhone OS 7_2_1 like Mac OS X; en-US) AppleWebKit\\/535.5.2 (KHTML, like Gecko) Version\\/4.0.5 Mobile\\/8B113 Safari\\/6535.5.2',
        ipv4: '32.43.126.44',
        macaddress: 'FF=>AE=>23=>59=>12=>A9',
        plasticcard: '5481447864634684',
        cardexpir: '07\\/19',
        bonus: 17,
        company: 'Star Laps',
        color: 'yellow',
        uuid: 'b2f88783-5ddf-3284-9bac-75dbd88e63c3',
        height: 180,
        weight: 81,
        blood: 'O+',
        eye: 'Red',
        hair: 'Strands, Auburn',
        pict: '10female',
        url: 'http=>\\/\\/api.namefake.com\\/english-united-states\\/female\\/a655bf952df0a6d7e5393fd5c6061d47',
        sport: 'Run',
        ipv4_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/36.43.226.47',
        email_url: 'http=>\\/\\/email-fake.com\\/stop-my-spam.pp.ua\\/sHilll',
        domain_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/baumbach.com'
    },function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("Success!");
            db.close();
        }
    });
});

//#12
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").insertMany([{
        name: 'Ted Smith',
        address: '54 Oxford St. Morganton, NC 28655',
        latitude: 46.43071,
        longitude: -52.45061,
        maiden_name: 'Agent Smith',
        birth: '1978-09-22',
        phone_h: '516-568-5133x797',
        phone_w: '1-312-173-2765',
        email_u: 'teddy',
        email_d: 'teddy-bear.pp.ua',
        username: 'bearT',
        password: '!d-]AFYqUXaf8fqG177',
        domain: 'baobab.com',
        useragent: 'Mozilla\\/5.0 (iPhone; CPU iPhone OS 7_2_1 like Mac OS X; en-US) AppleWebKit\\/535.5.2 (KHTML, like Gecko) Version\\/4.0.5 Mobile\\/8B113 Safari\\/6535.5.2',
        ipv4: '32.63.136.44',
        macaddress: 'FE=>FE=>63=>59=>12=>A9',
        plasticcard: '5487447864234684',
        cardexpir: '04\\/19',
        bonus: 57,
        color: 'brown',
        uuid: 'b2f88783-5ddf-3284-9bac-75dbd88e63c3',
        height: 178,
        weight: 95,
        blood: 'O+',
        eye: 'brown',
        hair: 'Strands, Auburn',
        pict: '10female',
        url: 'http=>\\/\\/api.namefake.com\\/english-united-states\\/female\\/a655bf952df0a6d7e5393fd5c6061d47',
        sport: 'beer-pong',
        ipv4_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/36.43.226.47',
        email_url: 'http=>\\/\\/email-fake.com\\/stop-my-spam.pp.ua\\/sHilll',
        domain_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/baumbach.com'
    },{
        name: 'Donna Franklin',
        address: '123 6th St. Melbourne, FL 32904',
        latitude: 63.43071,
        longitude: -18.45061,
        maiden_name: 'Big-D',
        birth: '1988-10-02',
        phone_h: '516-509-1133x797',
        phone_w: '1-666-666-2765',
        email_u: 'big-d88',
        email_d: 'big-d88.pp.ua',
        username: 'Flash70',
        password: '!d-]AFYqUXaf8fqG177',
        domain: 'baobab.com',
        useragent: 'Mozilla\\/5.0 (iPhone; CPU iPhone OS 7_2_1 like Mac OS X; en-US) AppleWebKit\\/535.5.2 (KHTML, like Gecko) Version\\/4.0.5 Mobile\\/8B113 Safari\\/6535.5.2',
        ipv4: '32.21.126.01',
        macaddress: 'AA=>AA=>66=>59=>12=>A9',
        plasticcard: '548144766664684',
        cardexpir: '06\\/19',
        bonus: 666,
        company: 'Dunkin Donuts',
        color: 'pink',
        uuid: 'b2f88783-5ddf-3284-9bac-75dbd88e63c3',
        height: 160,
        weight: 120,
        blood: '4+',
        eye: 'Red',
        hair: 'Strands, Auburn',
        pict: '10female',
        url: 'http=>\\/\\/api.namefake.com\\/english-united-states\\/female\\/a655bf952df0a6d7e5393fd5c6061d47',
        sport: 'Eat',
        ipv4_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/36.43.226.47',
        email_url: 'http=>\\/\\/email-fake.com\\/stop-my-spam.pp.ua\\/sHilll',
        domain_url: 'http=>\\/\\/myip-address.com\\/ip-lookup\\/baumbach.com'
    }],function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("Success!");
            db.close();
        }
    });
});

//#13
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").updateMany({sport:"Judo"}, {$set:{company:""}},function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});


// #14
MongoClient.connect("mongodb://localhost:27017/gsclasses",function(err, db) {
    console.log("Connected correctly to server");
    db.collection("students").deleteMany({eye:"Brown"},function (err, docs) {
        if(err){
            console.log(err);
        }else{
            console.log(docs);
            db.close();
        }
    });
});