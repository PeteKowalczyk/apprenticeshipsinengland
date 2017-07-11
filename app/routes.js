module.exports = {
 bind: function (app, assetPath) {
   app.get('/', function (req, res) {
      res.render('index')
    })
    app.get('/:p1', function (req, res) {
      res.render(req.params.p1 + '/index')
    })


 }
}