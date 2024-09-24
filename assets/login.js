function isAuthenticated(req) {
    return req.session && req.session.userId;
}

function requireAuth(req, res, next) {
    if (!isAuthenticated(req)) {
        return res.redirect('/login');
    }
    next();
}

module.exports = {
    isAuthenticated,
    requireAuth,
};