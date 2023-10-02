const { Telegraf } = require('telegraf')

const Token = "Your token";

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
