const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json())


//Get command starts
app.get("/complete",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read); 
    res.send(convert);
})

app.get("/",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated = [];
    for (var i =0;i<convert.length;i++){
        updated.push({"id":convert[i].id,"name":convert[i].name,"description":convert[i].description});
    }
    res.send(updated);

})

app.get("/courses",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }
    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push({"id":newUpdated[k].id,"courseid":newUpdated[k].courseid,"name":newUpdated[k].name,"description":newUpdated[k].description})
    }  
    res.send(latest)
})


app.get("/comments",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }
    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push(newUpdated[k].usersummision);
    }
    const newLatest = [];
    for (var w=0;w<latest.length;w++){
        for (var q=0;q<latest[w].length;q++)
            newLatest.push(latest[w][q])
    }
    res.send(newLatest)
})
 
app.get("/comments/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }
    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push(newUpdated[k].usersummision);
    }
    const newLatest = [];
    for (var w=0;w<latest.length;w++){
        for (var q=0;q<latest[w].length;q++)
            newLatest.push(latest[w][q])
    }
    var coIds=[];
    for (var ids=0;ids<newLatest.length;ids++){
        if (req.params.id==newLatest[ids].id){
            coIds.push(newLatest[ids])
        }
    }
    res.send(coIds)
})

app.get("/comments/:id/:courseid",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }
    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push(newUpdated[k].usersummision);
    }
    const newLatest = [];
    for (var w=0;w<latest.length;w++){
        for (var q=0;q<latest[w].length;q++)
            newLatest.push(latest[w][q])
    }
    var coIds=[];
    for (var ids=0;ids<newLatest.length;ids++){
        if (req.params.id==newLatest[ids].id){
            coIds.push(newLatest[ids])
        }
    }
    var courseids=[];
    for (var course=0;course<coIds.length;course++){
        if(req.params.courseid==coIds[course].courseid){
            courseids.push(coIds[course])
        }
    } 
    res.send(courseids)
})

app.get("/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated = [];
    for (var i =0;i<convert.length;i++){
        updated.push({"id":convert[i].id,"name":convert[i].name,"description":convert[i].description});
    }
    for (var j=0;j<updated.length;j++){
        if (req.params.id==updated[j].id){
            res.send(updated[j])
        }
    }
})


app.get("/courses/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }
    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push({"id":newUpdated[k].id,"courseid":newUpdated[k].courseid,"name":newUpdated[k].name,"description":newUpdated[k].description})
    }  
    const everyId = []
    for (var ids = 0;ids<latest.length;ids++ ){
        if (latest[ids].id==req.params.id){
            everyId.push(latest[ids]);
        }
    }
    res.send(everyId)
})


app.get("/courses/:id/:courseid",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    const updated=[];
    const newUpdated =[];
    for (var i =0 ;i <convert.length;i++){
        if (convert[i].hasOwnProperty("submission")){
            updated.push(convert[i].submission);
            for (var j=0;j<convert[i].submission.length;j++){
                newUpdated.push(convert[i].submission[j])
            }
        }    
    }

    const latest = [];
    for (var k = 0; k<newUpdated.length;k++){
        latest.push({"id":newUpdated[k].id,"courseid":newUpdated[k].courseid,"name":newUpdated[k].name,"description":newUpdated[k].description})
    }  

    const everyId = []
    for (var ids = 0;ids<latest.length;ids++ ){
        if (latest[ids].id==req.params.id){
            everyId.push(latest[ids]);
        }
    }

    const deepId =[];
    for (var cIds=0 ; cIds<everyId.length;cIds++){
        if (everyId[cIds].courseid==req.params.courseid){
            deepId.push(everyId[cIds])
        }
    }
    res.send(deepId)
})

//Get command ends

//Post command starts
app.post("/",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    convert.push(req.body);
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4))
    res.send(convert)
})

app.post("/:courses",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    for (var i =0;i<convert.length;i++){
        if (req.params.courses==convert[i].id){
            convert[i].submission.push(req.body)
        }
    }
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4));
    res.send(convert);
})

app.post("/:courses/:comments",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    for (var i= 0;i<convert.length;i++){
        for (var j=0;j<convert[i].submission.length;j++){
            if (req.params.courses==convert[i].submission[j].id){
                if (req.params.comments==convert[i].submission[j].courseid){
                    convert[i].submission[j].usersummision.push(req.body);
                }
            }
        }
    }
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4));
    res.send(convert);
})

//Post command ends

//Put command starts
app.put("/:id",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    console.log(req.params.id)
    for (var i =0;i<convert.length;i++){
        if (req.params.id==convert[i].id){
            convert[i]=req.body
        }
    }
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4));
    res.send(convert);
})

app.put("/:id/:courseid",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    for (var i =0;i<convert.length;i++){
        for (var j=0;j<convert[i].submission.length;j++){
            if (convert[i].submission[j].id == req.params.id){
                if(convert[i].submission[j].courseid==req.params.courseid){
                    convert[i].submission[j]=req.body;
                }
            }
        }
    }
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4));
    res.send(convert);
})

app.put("/:id/:courseid/:username",(req,res)=>{
    const read = fs.readFileSync("availableCourses.json");
    const convert = JSON.parse(read);
    for (var i =0;i<convert.length;i++){
        for (var j=0;j<convert[i].submission.length;j++){
            for (var k =0;k<convert[i].submission[j].usersummision.length;k++){
                if (convert[i].submission[j].id == req.params.id){
                    if(convert[i].submission[j].usersummision[k].courseid==req.params.courseid){
                        if (convert[i].submission[j].usersummision[k].username==req.params.username){
                            convert[i].submission[j].usersummision[k]=req.body;
                        }
                    }
                }    
            }
        }
    }
    const write = fs.writeFileSync("availableCourses.json",JSON.stringify(convert,null,4));
    res.send(convert);
})

//Put command ends

//Localhost 
const listener = app.listen(process.env.PORT, ()=>{
  console.log("Your app is listening on the port"+listener.address().port);
})