const controller = require('../Controllers/PartnerController');
const router = require('express').Router();

router.post('/partner',controller.createPartner)
router.get('/partner',controller.getAll)


module.exports = router;

// const options = {
//     define: {
//         timestamps: false,
//         freezeTableName: true
//       },


// }