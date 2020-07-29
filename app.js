const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const PORT=5000
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var todolist=[]
app.get('/',(req,res)=>{
    res.render('todo',{todolist:todolist})
})
app.post('/',(req,res)=>{
    const todo=req.body.title;
    console.log(todo,'todo')
    if(todo!= ''){
        console.log(todo!==null,'ml')
        todolist.push(todo)
        res.redirect('/')
    }else{
        res.send('Please fill the title');
    }

})
app.get('/delete',(req,res)=>{
    const element=req.query.element
    // console.log(element)
    // console.log(todolist,'todolist')
    // console.log(todolist.indexOf(element),1)
    todolist.splice(todolist.indexOf(element), 1);
    res.redirect('/')
})
app.listen(PORT,()=>{console.log(`server started at ${PORT}`)})