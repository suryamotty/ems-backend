const express = require('express');
const server = express();
const cors = require('cors');
const logic = require('./services/logic')



server.use(cors({
    origin:"http://localhost:3000"
}))

server.use(express.json());
server.listen(8000,()=>{
    console.log('server is listening at port no: 8000')
})

//request from front end to this file
//get all contact api
server.get('/get-all-employees',(req,res)=>{
    logic.allEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//add new employee
server.post('/add-employee',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.empName,req.body.empAge,req.body.empDesg,req.body.empSalary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//delete employee api
server.delete('/delete-employee/:id',(req,res)=>{
    logic.removeEmp(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//get a employee api
server.get('/get-an-employee/:id',(req,res)=>{
    logic.getAnEmp(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//update employee api
server.post('/update-employee',(req,res)=>{
    logic.editEmp(req.body.id,req.body.empName,req.body.empAge,req.body.empDesg,req.body.empSalary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
