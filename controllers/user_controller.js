const { user } = require("../config/mongoose");
const User = require('../models/user');
module.exports.profile = (req, res)=>{
    if(req.cookies.user_id){

        User.findById(req.cookies.user_id, (err, user)=>{
            if(user){
                return res.render('user_profile',{
                    title : "User Profile",
                    user : user
                })
            }

            return res.redirect('/user/sign-in');
        });
    }else{
        return res.redirect('/user/sign-in');
    }
}

module.exports.signOut = (req, res)=>{
    res.cookie('user_id', '');
    return res.redirect('back');
}

module.exports.signUp = (req, res)=>{
    res.render('user_sign_up',{
        title: 'Infohere | Sign Up',
    });
}

module.exports.signIn = (req, res)=>{
    res.render('user_sign_in',{
        title: 'Infohere | Sign In',
    });
}

module.exports.create = (req, res)=>{
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('back');
    }

    User.findOne({email : req.body.email}, function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }

        if(!user)
        {
            User.create(req.body, (err, user)=>{
                if(err)
                {
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/user/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}

module.exports.createSession = (req, res)=>{
    User.findOne({email : req.body.email}, (err, user)=>{
            if(err)
            {
                console.log('error in finding the user while sign in');
            }       
            if(user)
            {
                if(user.password != req.body.password)
                {
                    return res.redirect('back');
                }
                res.cookie('user_id', user.id);
                return res.redirect('/user/profile');
            }else{
                    return res.redirect('back');
            }
    })
}