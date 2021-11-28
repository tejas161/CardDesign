const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");


require('../db/conn');

const User = require("../model/userSchema");




 
//using promises
// router.post('/register',(req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "plz fill all the details" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email already exist" });
//             }
//             const user = new User({name, email, phone, work, password, cpassword});

//             user.save().then(() => {
//                 res.status(201).json({message:"user registered successfully"});
//             }).catch((err) => res.status(500).json({error:"Failed to registered"}));

//         }).catch(err => {console.log('err');})


// });

//using async
router.post('/register',async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill all the details" });
    }


    try{
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "email already exist" });
        }

        if(password!=cpassword)
        {
            return res.status(422).json({error:"Password does not matches confirm password"});
        }

        const user = new User({name, email, phone, work, password, cpassword});

    


        await user.save();

         res.status(201).json({message:"user registered successfully"});

    }catch(err){
        console.log(err);

    }

});


//login route

router.post('/signin',async (req,res) => {
   
    
    try{
        const{email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({error:"plz fill all data in login"});
        }

        const userLogin = await User.findOne({email:email});
        // console.log(userLogin);
        if(userLogin)
        {
            const isMatch = await bcrypt.compare(password,userLogin.password);

            const token = await userLogin.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true

            });
          

            if(!isMatch)
            {
                res.status(400).json({error:"Invalid credentials"});
    
            }else{
            res.json({message:"user signin successfuly"});
            }
        }
            else{
                res.status(400).json({error:"Invalid credentials"});
            }
         

        

      

    }catch(err){
        console.log(err);
    }

});


router.get('/logout',(req,res) => {
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logout');
})


router.post('/contact',async (req,res) => {
    try{
       
        const {name,email,phone,message} = req.body;
        if(!name || !email || !phone || !message){
            console.log('error in contact form');
            return res.status(404).json({error:'plzz fill the contact form'});
        }
        const userContact = await User.findOne({email:email});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);

            await userContact.save();

            res.status(201).json({message:"user Contact successfully"});

        }
        else{
            return res.status(404).json({error:'plzz fill the contact form'});

        }
       


    }
    catch(err)
    {
        console.log(err);
    }

});


module.exports = router;