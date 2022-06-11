const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  addUser,
  updateUser,
  getClientList,
} = require("../controllers/user.controller");
const { check, validationResult } = require("express-validator");
const auth = require("../middlewares/auth");
const { adminValidation } = require("../validations/user_validations/admin.validation");
const { loginValidation } = require("../validations/user_validations/login.validation");
const { responsableValidation } = require("../validations/user_validations/responsable.validation");

const router = express.Router();

// register admin
router.post(
  "/",
  adminValidation,
  registerUser
);

// add responsble by admin
router.post(
  "/add",
  [
    auth,
    responsableValidation,
  ],
  addUser
);

// login
router.post(
  "/login",
  loginValidation,
  loginUser
);

router.get("/", auth, getUser);
router.get("/client_list", auth, getClientList)

router.put('/:userId', auth, updateUser)

module.exports = router;
