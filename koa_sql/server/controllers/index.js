module.exports = async (ctx) => {
    const title = '首页';
    await ctx.render('index', {
        title
    });
}