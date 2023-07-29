const yargs = require("yargs/yargs");

// 获取命令行参数
const argv = process.argv.slice(2);
// console.log(yargs);
// console.log(process.argv, argv);

const cli = yargs(argv);
// console.log(cli);
// 所有命令的全局选项
const globalOptions = {
    logLevel: {
        type: "string",
        describe: '日志的级别',
        defaultDescription: 'info',
        alias: "L"
    },
};
const globalKeys = Object.keys(globalOptions).concat("help", "version")

cli
    .options(globalOptions)
    .group(globalKeys, "global options:")
    .usage(`Usage:$0 <command> [options]`)
    .demandCommand(1, "至少需要一个命令")
    .strict() // true 严格模式 输入的命令不认识 辉报错 
    .recommendCommands()// 如果你写错了 他会帮你提建议 
    .fail((msg, error) => {
        console.error(error);
        console.error(msg);
    })
    .alias("h", "help")
    .alias("v", "version")

