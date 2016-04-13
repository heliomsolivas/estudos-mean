module.exports = function(app) {

    var api = app.api.foto;

    app.get('/v1/fotos', api.lista);


    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);

    // apenas uma URL, dois verbos distintos
    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);

};