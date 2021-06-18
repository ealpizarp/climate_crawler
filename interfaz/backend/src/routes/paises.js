const {Router} =require('express');
const router = Router();

const{getEstaciones_max,pais_maximo_prome_gene,pais_minimo_prome_gene,busqueda_pais,getAño_Var_Maximo,getAño_Var_Minimo,getEstaciones_min
} = require('../controllers/paises.controllers');


router.route('/get_paises_promedio_general_max').get(pais_maximo_prome_gene);

router.route('/get_paises_promedio_general_mini').get(pais_minimo_prome_gene);

router.route('/get_busque_pais/:pais').get(busqueda_pais);

router.route('/get_ano_var_max').get(getAño_Var_Maximo);

router.route('/get_ano_var_min').get(getAño_Var_Minimo);

router.route('/get_estacion_max').get(getEstaciones_max);

router.route('/get_estacion_min').get(getEstaciones_min);


module.exports = router;

