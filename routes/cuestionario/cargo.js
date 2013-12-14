var Cargo = require('../../models/cuestionario/cargo'),
    Preguntas = require('../../data/Preguntas'),
    OpcionesRespuesta = require('../../data/OpcionesRespuesta'),
    mapper = require('../../lib/model-mapper');

module.exports = function(app) {

    app.param('cargoId', function(req, res, next, id) {
        Cargo.findById(id, function(err, cargo) {
            if (err) {
                next(err);
            } else {
                res.locals.cargo = cargo;
                next();
            }
        });
    });

    app.get('/cuestionario/cargos', function(req, res) {
        Cargo.find({}, function(err, cargos) {
            res.render('cuestionario/cargo/index', { cargos : cargos });
        });
    });

    app.get('/cuestionario/cargos/create', function(req, res) {
        res.render('cuestionario/cargo/create', { cargo : new Cargo() });
    });

    app.post('/cuestionario/cargos/create', function(req, res) {
        var cargo = new Cargo(req.body);

        cargo.save(function(err) {
            if (err) {
                res.render('cuestionario/cargo/create', {
                    cargo : cargo
                });
            } else {
                res.redirect('/cuestionario/'+ cargo.cuestionario_id + '/cargos');
            }
        });
    });

  function getCargos(req, res, next) {
    Cargo.find({ cuestionario_id : req.params.cuestionario_id }, function(err, cargos) {
      req.params.cargos = cargos;
      next();
      });

    }

  app.get('/cuestionario/:cuestionario_id/cargos', getCargos, function(req, res) {
    //console.log(req.params.cargos);
    res.render('cuestionario/cargo/index', { cargos : req.params.cargos });
  });


    app.get('/cuestionario/cargos/:cargoId/edit', function(req, res) {
        res.render('cuestionario/cargo/edit',{
          preguntas: Preguntas,
          opcionesRespuesta: OpcionesRespuesta
        });
    });

    app.post('/cuestionario/cargos/:cargoId/edit', function(req, res) {
        mapper.map(req.body).to(res.locals.cargo);

        res.locals.cargo.save(function(err) {
            if (err) {
                res.render('cuestionario/cargo/edit');
            } else {
                res.redirect('/cuestionario/cargos');
            }
        });
    });

    app.get('/cuestionario/cargos/:cargoId/detail', function(req, res) {
        res.render('cuestionario/cargo/detail');
    });

    app.get('/cuestionario/cargos/:cargoId/delete', function(req, res) {
        res.render('cuestionario/cargo/delete');
    });

    app.post('/cuestionario/cargos/:cargoId/delete', function(req, res) {
        Cargo.remove({ _id : req.params.cargoId }, function(err) {
            res.redirect('/cuestionario/cargos');
        });
    });
}

// Used to build the index page. Can be safely removed!
module.exports.meta = {
    name : 'Cargo',
    route : '/cuestionario/cargos'
}
