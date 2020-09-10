exports.index = function(req, res, next) {
    res.render('index', { title: 'Express' });
  }

  //These allow us to separate the routes and the logic from each other