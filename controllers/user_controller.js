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

module.exports.create = (req, res)=>{

}

module.exports.createSession = (req, res)=>{

}