const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Joi = require('joi')


// // EJS //
// app.use('/public', express.static(path.join(__dirname, 'static')));
// app.set('view engine', 'ejs');

// app.get('/query/:userQuery', (req, res) => {
//     res.render('index', {
//         data: {
//             userQuery: req.params.userQuery,
//             searchResults: ['book1', 'book3', 'book2'],
//             loggedIn: req.loggedIn,
//             username: "Pintor"
//         }
//     });
// });



// const arrayString = ['banana', 'bacon', 'cheese'];
// const arrayObjects = [{ example: 'example1' }, { example: 'example2' }, { example: 'example3' }];
// const userInput = {
//     personalInfo: {
//         streetAddress: '12312312334',
//         city: 'Recife',
//         state: 'PE'
//     },
//     preferences: arrayObjects
// };

// const personalInfoSchema = Joi.object().keys({
//     streetAddress: Joi.string().trim().required(),
//     city: Joi.string().trim().required(),
//     state: Joi.string().trim().length(2).required()
// });

// const preferencesSchema = Joi.array().items(Joi.object().keys({
//     example: Joi.string().required()
// }));

// const userInputschema = Joi.object().keys({
//     personalInfo: personalInfoSchema,
//     preferences: preferencesSchema
// });

// Joi.validate(userInput, userInputschema, (error, result) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });



app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
}).listen(3000)

app.post('/', (req, res) => {
    console.log(req.body)

    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });

    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err);
            res.send('an error has occured');
        } else {
            res.send('successfully posted data')
        }
        console.log(result);
    });
    // res.json({ success: true })
    res.send('succesfully posted data')
})


// const express = require('express')
// const path = require('path')
// const app = express()
// app.get('/', (req, res)=>{
//     res.send(req.body)
//     console.log('successfully posted data')

// }).listen(3000)

// app.get('/example', (req,res)=>{
//     res.send('hitting example route')
// })

// app.get('/example/:name/:age', (req,res)=>{
//     console.log(req.params)
//     console.log(req.query)
//     res.send(req.params.name +' ' +req.params.age)
// })


// const _ = require('lodash')
// let example = _.fill([1,2,3,4,5], "banana", 1, 4)
// console.log(example)


// const http = require('http')
// const fs=  require('fs')
// const server = http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/example.txt')
//     res.writeHead(200, {'Content-type': 'text/html'})
//     readStream.pipe(res)
// }).listen(3000);

// const http = require('http')
// const server = http.createServer((req,res)=>{
//     if(req.url === '/' ){
//         res.write('Hello world from nodejs');
//         res.end();
//     }
//     else{
//         res.write('using some other domain')
//         res.end();
//     }
// })
// server.listen('3000')



// const fs = require('fs')
// const zlib = require('zlib')
// const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz')
// const writeStream = fs.createWriteStream('uncompressed.txt')
// readStream.pipe(gunzip).pipe(writeStream)

// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk)
// })
// fs.readdir('rand',(err,files)=>{
//     if(err)
//         console.log(err)
//     else{
//         for(let file of files){
//             fs.unlink('./rand/' + file,(err)=>{
//                 if(err)
//                     console.log(err)
//                 else   
//                     console.log('deleted')

//             })
//         }
//     }
// })
// fs.mkdir('tutorial', (err)=>{ or fs.rmdir
//     if(err)
//         console.log(err)
//     else   
//         fs.writeFile('./tutorial/example.txt', '123', (err)=>{
//             if(err)
//                 console.log(err)
//             else   
//                 console.log('success')
//         })
// })
// fs.unlink('example2.txt', (err)=>{
//     if(err)
//         console.log(err)
//     else   
//         console.log('deleted')
// })
// fs.appendFile('example2.txt', 'some data being appended', (err) =>{
//     if (err)
//         console.log(err)
//     else   
//         console.log('successfully appended the file')
// })
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if (err)
//         console.log(err)
//     else   
//         console.log('successfully renamed teh file')
// })
// fs.writeFile('example.txt', 'this is an example', (err)=> {
//     if(err)
//         console.log(err);
//     else
//        console.log('success')
//        fs.readFile('example.txt','utf8', (err, file) =>{
//            if (err)
//                 console.log(err)
//             else
//                 console.log(file) 
//        })
// })



// const readline = require('readline')
// const rl = readline.createInterface({input: process.stdin, output: process.stdout})

// let num1 = Math.floor((Math.random()*10 + 1))
// let num2 = Math.floor((Math.random()*10 + 1))
// let ans = num1 + num2

// rl.question(`what is ${num1} + ${num2} \n`, 
// (userInput)=> {
//     if(userInput.trim() == ans) {
//         rl.close();
//     } else{
//         rl.setPrompt('Incorrect, try again\n');
//         rl.prompt();
//         rl.on('line', (userInput) =>{
//             if(userInput.trim() == ans) {
//                 rl.close();
//             }
//             else{
//                 rl.setPrompt(`${userInput} is wrong \n`)
//                 rl.prompt();
//             }
//         })
//     }
// });
// rl.on('close',()=>{
//     console.log('correct');
// })



// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2)=>{
//     console.log(num1 + num2);
// })

// eventEmitter.emit('tutorial', 1, 2)

// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let pedro = new Person('pedro');
// let chris = new Person('chris')
// pedro.on('name', ()=>{
//     console.log('name is ' + pedro.name);
// })

// chris.on('name', ()=>{
//     console.log('name is ' + chris.name);
// })
// pedro.emit('name')
// chris.emit('name')


// console.log('hello world');
// const tutorial = require('./tutorial');
// console.log(tutorial.sum);
// console.log(new tutorial.SomeMathObject());