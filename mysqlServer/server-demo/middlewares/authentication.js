
const isUser = (req, res, next) => {
    console.log(req.cookies.auth);
    if (req.cookies.auth) {
        const auth = JSON.parse(req.cookies.auth);
        if (auth.role_id === 2) {
            next();
        }
    } else {
        res.status(401).json({error: 'Not Authorized'});
    }
}

module.exports = {
    isUser
};