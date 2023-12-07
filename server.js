const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
const http = require('http')

server = http.createServer((req, resp) => {

})

const PORT = 5000

server.listen((PORT, () => console.log(`Successfully started the server on port ${PORT}`)))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
