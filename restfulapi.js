const express = require("express");
const bodyParser = require("body-parser");

// Get    /user       : 검색
// Get    /user/:id   : id 검색
// Post   /user       : 데이터 입력
// Put    /user/:id   : 수정
// Delete /user/:id   : 삭제

const DB = (function(){
    let DB = {};        //객체
    let storage = [];   //데이터
    let cnt = 1;

    DB.getData = function(id){
        if(id){
            id = (typeof id === 'string') ? Number(id) : id;
            for(let i in storage){
                if(storage[i].id === id){
                    return storage[i];
                }
            }
        }else{
            return storage;
        }
    }
    DB.insertData = function(data){
        data.id = cnt++;
        storage.push(data);
        return data;
    }
    DB.deleteData = function(id){
        if(id){
            id = (typeof id === 'string') ? Number(id) : id;
            for(let i in storage){
                if(storage[i].id === id){
                    storage.splice(i, 1);
                    return true;
                }
            }
        }else{
            storage = [];
            return true;
        }
        return false;
    }
    return DB;
})();


const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.get("/user", function(req, res){
    res.send(DB.getData());
});
app.get("/user/:id", function(req, res){
    let {id} = req.params;
    res.send(DB.getData(id));
})

app.post("/user", function(req, res){
    let {name, age} = req.body;

    if(name && age){
        res.send(DB.insertData({
            name : name,
            age : age
        }));
        res.send(DB.getData());
    }
    res.send(DB.getData());
});

app.put("/user/:id", function(req, res){
    let {id} = req.params;
    let {name, age} = req.body;

    if(name && age){
        let item = DB.getData(id);
        item.name = name || item.name;
        item.age = age || item.age;
    }
    res.send(DB.getData());
});

app.delete("/user/:id", function(req, res){
    DB.deleteData(req.params.id);
    res.send(DB.getData());
});
app.delete("/user", function(req, res){
    DB.deleteData();
    res.send(DB.getData());
});

app.listen(8888, () => {
    console.log("run at 8888");
});