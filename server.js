// connection DB
const 
    // options = require('./knexfile'),
    // webpack = require('webpack'),
    // webpackDevMiddleware = require('webpack-dev-middleware'),
    // webpackConfig = require('./webpack.config.js'),
    // knex = require('knex')(options.development),
    Koa = require('koa'),
    router = require('koa-router')(),
    app = new Koa(),
    serve = require('koa-static');

router.get('/api', async (ctx, next) => {
    ctx.body = 123;
});

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});
app.use(serve(__dirname + '/dist/angular-ssr-node'))
    .use(router.routes())
    // .use(
    //     webpackDevMiddleware(webpack(webpackConfig), {
    //         noInfo: true,
    //         publicPath: webpackConfig.output.publicPath
    //     })
    // )
    // .use(require('webpack-hot-middleware')(webpack(webpackConfig)))
 
app.listen(8080);
console.log ('Listening at port ' + 8080 + ' ...');