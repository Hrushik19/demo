const express=require('express')
var app=express();

let students = [
    { id:222,name:'hrushik'},
    { id:223,name:'ram'},
    { id:224,name:'raj'},
];
app.listen(2000,()=>{
    console.log('serveris running on port 2000')
})

appget("/students",(req,res)=>{
    if(students){
        res.status(200).json({
            "message":"students found",
            "students":students
        });
    }else{
        res.status(404).json({"message":"no students found"})
    }
})

app.delete("/deletestudent/:id", (req, res) =>{
    let id = parseInt(req.params.id)
    students = students.filter(s=>s.id !== id)

    res.status(200).json({
        "message": "Student deleted successfully",
        "students":students
    })

})

app.use(express.json())

app.post("/addstudent", (req, res) => {
    let student=req.body
    students.push(student)
    return res.status(200).json({
        message: "Student added successfully",
        "students":students
    })
})

app.put("/updatestudent/:id",(req,res)=>{
    let id = parseInt(req.params.id)
    index=students.findIndex(s=>s.id==id)

    if(index!=-1){
        students[index].id=req.body.id
        students[index].name=req.body.name
        res.status(200).json({
           "message": "Student updated",
            "students":students

        })
    }
})
