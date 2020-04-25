
module.exports = function (app) {
    app.get("/api/user/:id", function (req, res) {
        //get data from databse;
        var result = {
            firstname: "Mai",
            lastName: "Hoa"
        };
        res.json(result);
    })
    app.post("/api/user", function (req, res) {
        //create new and save to the database
    })
    app.put("/api/user", function (req, res) {
        //update user and save to the database
    })
    app.delete("/api/user/:id", function (req, res) {
        //delete from database
    })
}