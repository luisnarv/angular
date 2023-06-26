const Router = require("express");
const { header, body } = require("express-validator");
const VjsonWT = require("../Middlewares/V-Jsonwebtoke");
const Vrequest = require("../Middlewares/V-Request");
const { HandlersCreateUser } = require("../Handlers/Users");

const router = Router();

router.post("/create", [
    body("name", "El nombre es requerido. ").not().isEmpty(),
    body("name", "Nombre debe de ser de 2 a 50 caracteres de largo").isLength({ min: 2, max: 50 }),

    body("lastname", "El apellido es requerido. ").not().isEmpty(),
    body("lastname", "El apellido debe ser de 2 a 50 caracteres de largo").isLength({ min: 2, max: 50 }),

    body("dni", "EL numero de documento es requerido. ").not().isEmpty(),
    body("dni", "EL numero de documento debe de ser de 2 a 50 caracteres. ").isLength({ min: 2, max: 50 }),

    body("email", "El email es requerido. ").not().isEmail(),
    body("email", "El email debe de ser de 2 a 50 caracteres de largo").isLength({ min: 2, max: 50 }),

    body("passwrod", "La contraseña es requerida. ").not().isEmpty(),
    body("passwrod", "La contraseña debe de ser de 2 a 50 caracteres, debe contener por lo menos un numero, una letra minúscula y mayúscula. ").isLength({ min: 2, max: 50 }).matches(/[a-zA-Z]/).matches(/\d/),

    body("direction", "La dirección es requerida. ").not().isEmpty(),

    body("numphone", "El numero de télefono es requerida. ").not().isEmpty(),

    body("tipo_documento", "El Tipo de Documento es requerida. ").not().isEmpty(),

    Vrequest
], HandlersCreateUser);



module.exports = router;