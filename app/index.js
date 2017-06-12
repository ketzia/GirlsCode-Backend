const posts = require('./routes/post.route');
const users = require('./routes/user.route');


const apiRoutes = function(app){
    app.use('/api',posts);
    app.use('/api',users);
};

module.exports = apiRoutes;