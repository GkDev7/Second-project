const http=require("http")
const app=require("./src/app")

const server=http.createServer(app)
const port=1000
server.listen(port)
console.log("server is listening on:"+port)





