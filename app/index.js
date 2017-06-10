const posts = require('./routes/post.route');


const apiRoutes = function(app){
    app.use('/api',posts);


};

module.exports = apiRoutes;