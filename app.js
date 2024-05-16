const http = require("http");

http.createServer(function (req, res) {
res.write("Started my journey to becoming a fullstack engineer in 2024!!");
res.end();

}
).listen(3000);

console.log("Server started on port 3000!!!");
