
const { Router } = require('express');
const { check } = require('express-validator');

const { rolesGet,
        rolesPost,
        rolesPut,
        rolesPatch} = require('../controllers/role');

const router = Router();


router.get('/', rolesGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
],rolesPut );

router.post('/', rolesPost );


router.patch('/', rolesPatch );





module.exports = router;