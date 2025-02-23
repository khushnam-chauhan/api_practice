const express= require("express");
const app = express();
const cors= require('cors');
const todos=require('./data');
app.use(cors({ origin: "*" }));


app.use(express.json());
app.get('/todos',(req,res)=>{
    res.json(todos);
})

app.listen(3000);















// app.post('/',(req,res)=>{
//     const isHealthy=req.body.isHealthy;
//     users[0].kidney.push({
//         healthy:isHealthy
//     })
//     res.json({
//         msg:"done"
//     })
// })

// app.put('/', (req,res)=>{
//     for(let i=0;i<users[0].kidney.length;i++){
//         users[0].kidney[i].healthy=true;
//     }
//     res.json({
//         msg:"update done"
//     })
// })
// app.delete('/',(req,res)=>{
//     const newKidneys=[];
//     for(let i=0;i<users[0].kidney.length;i++){
//         if(users[0].kidney[i].healthy){
//             newKidneys.push({healthy:true});
//         }
//     }
//     users[0].kidney=newKidneys;
//     res.json({
//         msg:" deletion of unhealthy kidney done"
//     })
// })
