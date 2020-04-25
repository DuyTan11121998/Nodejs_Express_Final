var bodyParser = require("body-parser");
//khai báo để đọc nội dung body phục vụ cho xử lý dữ liệu POST(key:value)
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Để đọc được các thông tin người dùng gửi lên dưới dạng JSON
var jsonParser = bodyParser.json()
module.exports = function (app) {

    //render trả về một index.ejs
    app.get("/", function (req, res) {
        res.render("index.ejs");
    })


    //user/123
    //render tra ve cho client

    app.post("/login", urlencodedParser, function (req, res) {
        res.send("Wellcome, " + req.body.username);
        console.log(req.body.username);
        console.log(req.body.password);
    })

    app.post("/loginJson", jsonParser, function (req, res) {
        res.send("OKE");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    })

}