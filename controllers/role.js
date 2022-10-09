const { response, request } = require('express');

const Role = require('../models/role');



const rolesGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;

    const [ total, roles ] = await Promise.all([
        Role.countDocuments(),
        Role.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        roles
    });
}

const rolesPost = async(req, res = response) => {
    
    const { rol } = req.body;
    const role = new Role({ rol });
    // Guardar en BD
    await role.save();

    res.json({
        role
    });
}

const rolesPut = async(req, res = response) => {

    try {
        const { id } = req.params;

        console.log(id)

        const { _id, rol, ...resto } = req.body;

        const role = await Role.findByIdAndUpdate( id, resto );

        res.json(role);
    } catch (error) {
        console.log(error)
    }
    
}

const rolesPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - rolesPatch'
    });
}




module.exports = {
    rolesGet,
    rolesPost,
    rolesPut,
    rolesPatch
}