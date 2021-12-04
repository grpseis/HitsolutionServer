const Plato = require('../models/Platos');


// nuevo plato
exports.crearPlato = async (req, res)=> {
    try {

        //creamos nuestro plato
        let plato = new Plato(req.body);
        await plato.save();
        res.send(plato);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ha sucedido un error con el nuevo plato');
    }
}


// listar todos los platos
exports.obtenerPlatos = async (req, res) => {
    try {
        const platos = await Plato.find();
        res.json(platos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


// actualizar un plato
exports.actualizarPlato = async (req, res) => {
    try {
        const {name, principal, farinacea, tuberculos,verdura,precio} = req.body;
        let plato = await Plato.findById(req.params.id);
        if (!plato) {
            res.status(404).json({msg: 'No existe el plato'})
        }
        plato.name = name;
        plato.principal = principal;
        plato.farinacea = farinacea;
        plato.tuberculos = tuberculos;
        plato.verdura = verdura;
        plato.precio = precio;

        plato = await Plato.findOneAndUpdate({_id: req.params.id},
            plato, {new: true});
        res.json(plato);


    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error en actualizar');
    }
}


// obtener un plato
exports.obtenerPlato = async (req, res) => {
    try {

        let plato = await Plato.findById(req.params.id);
        if (!plato) {
            res.status(404).json({msg: 'No existe el plato'})
        }

        res.json(plato);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }

}

// eliminar un plato
exports.eliminarPlato = async (req, res) => {
    try {

        let plato = await Plato.findById(req.params.id);
        if (!plato) {
            res.status(404).json({msg: 'No existe el plato'})
        }


        await Plato.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Plato eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error');
    }

}