var Quienresponde = require('../../models/cuestionario/quienresponde'),
    mapper = require('../../lib/model-mapper');

module.exports = function(app) {

    app.param('quienrespondeId', function(req, res, next, id) {
        Quienresponde.findById(id, function(err, quienresponde) {
            if (err) {
                next(err);
            } else {
                res.locals.quienresponde = quienresponde;
                next();
            }
        });
    });

    app.get('/cuestionario/quienrespondes', function(req, res) {
        Quienresponde.find({}, function(err, quienrespondes) {
            res.render('cuestionario/quienresponde/index', { quienrespondes : quienrespondes });
        });
    });

    app.get('/cuestionario/quienrespondes/create', function(req, res) {
        res.render('cuestionario/quienresponde/create', { quienresponde : new Quienresponde() });
    });

    app.post('/cuestionario/quienrespondes/create', function(req, res) {
        var quienresponde = new Quienresponde(req.body);

        quienresponde.save(function(err) {
            if (err) {
                res.render('cuestionario/quienrespondes/create', {
                    quienresponde : quienresponde
                });
            } else {
                res.redirect('/cuestionario/'+ quienresponde.cuestionario_id + '/quienrespondes');
            }
        });
    });


  function getQuienesResponden(req, res, next) {
    Quienresponde.find({ cuestionario_id : req.params.cuestionario_id }, function(err, quienesrespondes) {
      req.params.quienresponde = quienesrespondes;
      next();
      });
    }

  app.get('/cuestionario/:cuestionario_id/quienrespondes', getQuienesResponden, function(req, res) {
    console.log(req.params.cargos);
    res.render('cuestionario/quienresponde/index', { quienrespondes : req.params.quienresponde });
  });

  app.get('/cuestionario/quienrespondes/:quienrespondeId/edit', function(req, res) {
        res.render('cuestionario/quienresponde/edit');
    });

    app.post('/cuestionario/quienrespondes/:quienrespondeId/edit', function(req, res) {
        mapper.map(req.body).to(res.locals.quienresponde);

        res.locals.quienresponde.save(function(err) {
            if (err) {
                res.render('cuestionario/quienresponde/edit');
            } else {
                res.redirect('/cuestionario/quienrespondes');
            }
        });
    });

    app.get('/cuestionario/quienrespondes/:quienrespondeId/detail', function(req, res) {
        res.render('cuestionario/quienresponde/detail');
    });

    app.get('/cuestionario/quienrespondes/:quienrespondeId/delete', function(req, res) {
        res.render('cuestionario/quienresponde/delete');
    });

    app.post('/cuestionario/quienrespondes/:quienrespondeId/delete', function(req, res) {
        Quienresponde.remove({ _id : req.params.quienrespondeId }, function(err) {
            res.redirect('/cuestionario/quienrespondes');
        });
    });
}

// Used to build the index page. Can be safely removed!
module.exports.meta = {
    name : 'Quienresponde',
    route : '/cuestionario/quienrespondes'
}
