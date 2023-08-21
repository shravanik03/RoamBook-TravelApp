const express = require('express');
const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/userController');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req,res,next)=>{
    res.send("Hello user you are logged in");
});

router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
    res.send("Hello user you are verified, you can delete your account");
});

router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("You are logged in as admin");
});

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser ,deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GET ALL
router.get("/",verifyAdmin, getUsers)

module.exports = router;