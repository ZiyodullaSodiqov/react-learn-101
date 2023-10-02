const { Telegraf } = require('telegraf')

const Token = "6471232845:AAG6wG1GXIX9kepJtm3YCPf5RgFe90Yjvzo";

const bot = new Telegraf(Token);

const mylink = "https://www.youtube.com/";

bot.start((ctx)=>{
    ctx.reply("Dlya Aqlbek",{
        reply_markup:{
            keyboard:[[{text:"Bir nimada", web_app:{url:mylink}}]]
        },
    })
});

bot.launch();