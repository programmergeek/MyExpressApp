exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
  }

  //These allow us to separate the routes and the logic from each other