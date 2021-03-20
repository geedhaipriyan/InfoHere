const { user } = require("../config/mongoose");
const User = require('../models/user');
module.exports.profile = (req, res)=>{
    res.render('user_profile', {
        title: 'Infohere',
    });
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

module.exports .create = (req, res)=>{
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

}