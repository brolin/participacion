var Cuestionario = require('../models/cuestionario'),
    Quienresponde = require('../models/cuestionario/quienresponde'),
    Cargo = require('../models/cuestionario/cargo'),
    Preguntas = require('../data/Preguntas'),
    OpcionesRespuesta = require('../data/OpcionesRespuesta'),
    mapper = require('../lib/model-mapper');

module.exports = function(app) {

    app.param('cuestionarioId', function(req, res, next, id) {
        Cuestionario.findById(id, function(err, cuestionario) {
            if (err) {
                next(err);
            } else {
                res.locals.cuestionario = cuestionario;
                next();
            }
        });
    });

    app.get('/cuestionarios', function(req, res) {
         Cuestionario.find({}, function(err, cuestionarios) {
            res.render('cuestionario/index', {
              cuestionarios : cuestionarios,
              preguntas : Preguntas,
              opcionesRespuesta : OpcionesRespuesta
            });
        });
    });

    app.get('/cuestionarios/create', function(req, res) {
        res.render('cuestionario/create', {
          cuestionario : new Cuestionario() ,
          preguntas : Preguntas,
          opcionesRespuesta : OpcionesRespuesta
         });
    });

    app.post('/cuestionarios/create', function(req, res) {
      var cuestionario = new Cuestionario(req.body);

      cuestionario.save(function(err) {
        if (err) {
          res.render('cuestionario/create', {
            cuestionario : cuestionario,
            preguntas : Preguntas,
            opcionesRespuesta : OpcionesRespuesta
          });
        } else {
          res.redirect('/cuestionarios');
        }
      });
    });

    app.get('/cuestionarios/:cuestionarioId/edit', function(req, res) {
        res.render('cuestionario/edit', {
          preguntas : Preguntas,
          opcionesRespuesta :OpcionesRespuesta
          });
    });

    app.post('/cuestionarios/:cuestionarioId/edit', function(req, res) {
        mapper.map(req.body).to(res.locals.cuestionario);

        res.locals.cuestionario.save(function(err) {
            if (err) {
                res.render('cuestionario/edit', {
                  preguntas : Preguntas,
                  opcionesRespuesta :OpcionesRespuesta
                });
            } else {
                res.redirect('/cuestionarios');
            }
        });
    });

    app.get('/cuestionarios/:cuestionarioId/detail', function(req, res) {
        res.render('cuestionario/detail', { preguntas : Preguntas });
    });

    app.get('/cuestionarios/:cuestionarioId/delete', function(req, res) {
        res.render('cuestionario/delete', { preguntas : Preguntas });
    });

    app.post('/cuestionarios/:cuestionarioId/delete', function(req, res) {
        Cuestionario.remove({ _id : req.params.cuestionarioId }, function(err) {
            res.redirect('/cuestionarios');
        });
    });

  // ACA RUTAS PARA SUB-DOCUMENTOS
  // CARGOS ESTRUCTURA
  app.post('/cuestionarios/:cuestionarioId/cargos/create', function(req, res) {
      var cargo = new Cargo(req.body);

      cargo.save(function(err) {
        if (err) {
          res.render('cuestionario/create', {
            cuestionario : cuestionario,
            preguntas : Preguntas,
            opcionesRespuesta : OpcionesRespuesta
          });
        } else {
          res.redirect('/cuestionarios');
        }
      });
    });

    app.get('/cuestionarios/:cuestionarioId/cargos/create', function(req, res) {
    console.log(req.params.cuestionarioId);
        res.render('cuestionario/cargo/create', {
          cargo : new Cargo({cuestionario_id : req.params.cuestionarioId}) ,
          preguntas : Preguntas,
          opcionesRespuesta : OpcionesRespuesta
         });
    });

  // QUIENES RESPONDEN
    app.post('/cuestionarios/:cuestionarioId/quienrespondes/create', function(req, res) {
      var quienresponde = new Quienresponde(req.body);

      quienresponde.save(function(err) {
        if (err) {
          res.render('cuestionario/create', {
            cuestionario : cuestionario,
            preguntas : Preguntas,
            opcionesRespuesta : OpcionesRespuesta
          });
        } else {
          res.redirect('/cuestionario/quienrespondes');
        }
      });
    });

    app.get('/cuestionarios/:cuestionarioId/quienrespondes/create', function(req, res) {
    console.log(req.params.cuestionarioId);
        res.render('cuestionario/quienresponde/create', {
          quienresponde : new Quienresponde({cuestionario_id : req.params.cuestionarioId}) ,
          preguntas : Preguntas,
          opcionesRespuesta : OpcionesRespuesta
         });
    });
};

// Used to build the index page. Can be safely removed!
module.exports.meta = {
    name : 'Cuestionario',
    route : '/cuestionarios'
};
