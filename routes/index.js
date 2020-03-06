const express = require('express');
const router = express.Router();
const contacts = require('./../inc/contact')
const conn = require('./../inc/db')


/* GET home page. */
router.get('/', function (req, res, next) {
  conn.query(`
      SELECT * FROM tb_convenios LIMIT 10
  `, (err, results) => {
      res.render('index', {
        title: 'Docs Saúde - Sua clínica de saúde',
        body: req.body,
        convenios: results
      });
    })
});


router.get('/convenios', function (req, res, next) {
  conn.query(`
      SELECT * FROM tb_convenios
  `, (err, results) => {
      res.render('convenio', {
        title: 'Docs Saúde - Sua clínica de saúde',
        body: req.body,
        convenios: results
      });
    })
});


router.get('/consultas/especialidades-medicas', function (req, res, next) {
  res.render('consultas/especialidades-medicas', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/consultas/estetica', function (req, res, next) {
  res.render('consultas/estetica', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/contato', function (req, res, next) {
  res.render('contact', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/consultas/procedimentos', function (req, res, next) {
  res.render('consultas/procedimento', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/consultas/terapias', function (req, res, next) {
  res.render('consultas/terapias', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/alergologia', function (req, res, next) {
  res.render('especialidades/alergologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/angiologia', function (req, res, next) {
  res.render('especialidades/angiologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/cardiologia', function (req, res, next) {
  res.render('especialidades/cardiologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/clinicamedica', function (req, res, next) {
  res.render('especialidades/clinicamedica', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/dermatologia', function (req, res, next) {
  res.render('especialidades/dermatologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/endocrinologia', function (req, res, next) {
  res.render('especialidades/endocrinologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/gastroenterologia', function (req, res, next) {
  res.render('especialidades/gastroenterologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/ginecologia', function (req, res, next) {
  res.render('especialidades/ginecologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/neurologia', function (req, res, next) {
  res.render('especialidades/neurologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/nutricao', function (req, res, next) {
  res.render('especialidades/nutricao', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/ortopedia', function (req, res, next) {
  res.render('especialidades/ortopedia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/otorrino', function (req, res, next) {
  res.render('especialidades/otorrino', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/pediatria', function (req, res, next) {
  res.render('especialidades/pediatria', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

// router.get('/especialidade/proctologia', function (req, res, next) {
//   res.render('especialidades/proctologia', {
//     title: 'Docs Saúde - Sua clínica de saúde',
//     body: req.body
//   });
// });

router.get('/especialidade/psicologia', function (req, res, next) {
  res.render('especialidades/psicologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/psiquiatria', function (req, res, next) {
  res.render('especialidades/psiquiatria', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/especialidade/reumatologia', function (req, res, next) {
  res.render('especialidades/reumatologia', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/video', function (req, res, next) {
  res.render('videos/video', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/video2', function (req, res, next) {
  res.render('videos/video2', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/video3', function (req, res, next) {
  res.render('videos/video3', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/estetica', function (req, res, next) {
  res.render('videos/estetica', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/dicas', function (req, res, next) {
  res.render('videos/dicas', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/doencas', function (req, res, next) {
  res.render('videos/doencas', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/informacao', function (req, res, next) {
  res.render('videos/informacao', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/videos/engracados', function (req, res, next) {
  res.render('videos/engracados', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});

router.get('/sobre-nos', function (req, res, next) {
  res.render('about', {
    title: 'Docs Saúde - Sua clínica de saúde',
    body: req.body
  });
});


router.post('/contacts', function (req, res, next) {
  contacts.save(req.body).then(results => {
    contacts.render(req, res, null, 'Contato enviado com sucesso!')
  }).catch(err => {
    contacts.render(req, res, err.message)
  })
})

module.exports = router;
