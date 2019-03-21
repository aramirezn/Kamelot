
'use strict';
const express = require('express');
const router = express.Router();
const noticias_api = require('./noticias.api');

router.route('/registrar_noticias')
    .post(
        function (req, res) {
            noticias_api.registrar_citas(req, res);
        }
    );

router.route('/consultar_noticias')
    .get(
        function (req, res) {
            noticias_api.consultar_noticias(req, res);
        }
    )

module.exports = router;