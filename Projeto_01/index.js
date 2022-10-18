//npm install express body-parser ejs

const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3', 'Tarefa 4'];

app.post('/', (req, res)=>{
    tarefas.push(req.body.tarefas);

    res.render('index', {
        tarefasList:tarefas
    });
})

app.get('/', (req, res) => {
    res.render('index', {
        tarefasList:tarefas
    });
})

app.get('/deletar/:id', (req, res)=>{

    tarefas = tarefas.filter(function (val, index){
            if(index != req.params.id){
                return val;
            }
    })

    res.redirect('/');
})

app.listen(8080, ()=>{
    console.log('Server rodando na porta: 8080!');
})

