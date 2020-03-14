console.log(process.argv)
if (process.argv.length > 2)
{
    let buildIds = process.argv.slice(2);
    buildList = buildIds.toString().split(',');
}