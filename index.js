//impotr json server

const jsonServer = require('json-server')

//create server for MP

const MPServer = jsonServer.create()

//create middleware

const middleware = jsonServer.defaults()

//set route for json file
const route = jsonServer.router('db.json')

//PORT

const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server started at PORT Number ${PORT} and waiting for client request`);
})

