const User = require("../models/user.js")

module.exports.signupForm = (req,res) => {
    res.render("./users/signup.ejs");
}

module.exports.signupUser = async (req,res) => {
    try {
        let { email, username, password } = req.body;
        let newUser = new User({email,username});
        const regUser = await User.register(newUser, password);
        // console.log(regUser);
        req.login(regUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to Rentify");
            res.redirect("/listings");
        });
    } catch (error) {
        req.flash("error", "A user with the given username is already registered")
        res.redirect("/signup");
    }
}

module.exports.loginForm = (req, res) =>{
    res.render("./users/login.ejs")
}

module.exports.loginUser = async(req, res) => {
        req.flash("success", "Welcome Back to Rentify!")
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
}

module.exports.logoutUser = async (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "Logged Out Successfully.")
        res.redirect("/listings");
    });
}