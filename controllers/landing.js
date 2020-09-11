const models = require('../models')

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
  }

exports.submit_lead = function(req, res, next) {

  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/')
  })
}

  //These allow us to separate the routes and the logic from each other