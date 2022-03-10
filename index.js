//Setup 
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(''); 
bot.on("ready", ()=> {
    console.log("yeah")
})
bot.on('message', message => {
    if ((message.author.id == "insert admin id" || message.author.id == "insert other admin id") && (message.content == "-" || message.content == "Initiate the raid")) { //////////////////////
        message.channel.send("Initiating the raid").then((msg) => {
            let LoadEffect = (message, loop, time, content, next = () => {return}) => {
                console.log(time)
                if (time <= 0) return next();
                if (loop == 0) message.edit(content + ".");
                if (loop == 1) message.edit(content + "..");
                if (loop == 2) message.edit(content + "...");
                if (loop == 3) message.edit(content);
                loop += 1;
                if (loop > 3) loop = 0;
                time -= 0.5;
                setTimeout(LoadEffect, 500, message, loop, time, content, next);
            }
            LoadEffect(msg, 0, 5, msg.content, () => {
                msg.edit("Raid initiated");
                message.channel.send("Raid launch in 3").then(m => {
                    setTimeout(() => {
                        m.edit("Raid launch in 2");
                        setTimeout(()=>{
                            m.edit("Raid launch in 1");
                            setTimeout(()=> {
                                m.edit("Launching the raid")
                                let Raid = (guild) => {
                                    const MoonaId = "insert birthday user id" 
                                    guild.channels.cache.forEach(c => {
                                        let embed = new Discord.MessageEmbed()
                                        .setTitle("TODAY IS PARTY DAY :tada: :tada:")
                                        .setColor(0xFF69B4) 
                                        .addField(`HAPPY BIRTHDAY <@${MoonaId}>`,'To the best sister ever')
                                        .addField(`JOYEUX ANIVERSAIRE <@${MoonaId}>`,'A la meilleure des gatchatubeuse')
                                        .addField(`FELIZ COMPLEANOS <@${MoonaId}>`,'Para ti (no hablo espanol)')
                                        .setDescription("Don't forget to follow her on instagram (@insert insta) and on youtube (insert youtube). N'oubliez pas d'aller la suivre sur instagram (@insert insta) et sur youtube (insert youtube)")
                                        .setFooter(":tada: :tada: :tada: :tada: :tada:")
                                        //.setImage(message.guild.members.fetch().then((list) => list.find(tmember => tmember.id == "695972299152556063")).user.avatarURL());
                                        console.log(c)
                                        try {c.send(embed)} catch (e) {console.log(e)}
                                    })
                                }
                                Raid(message.guild)
                            }, 1500)
                        }, 1500)
                    }, 1500)
                })
            })
        })
    } else if (message.mentions.has(bot.user)) {
        message.channel.send("TODAY IS <@insert birthday user id>'S BIRTHDAY\nGO FOLLOW HER ON YOUTUBE WITH [insert name] OR ON INSTAGRAM WITH @insert insta")
    } else if (message.mentions.has(message.guild.members.fetch().then((list) => list.find(tmember => tmember.id == "insert id")))) {
        message.channel.send("```DID YOU KNOW TODAY IS HER BIRTHDAY?\nGO FOLLOW HER ON YOUTUBE WITH [insert name] OR ON INSTAGRAM WITH @insert insta```")
    } else if (message.author == message.guild.members.fetch().then((list) => list.find(tmember => tmember.id == "insert id"))) {
        message.channel.send("```HAPPY BIRTHDAYYYYYYY```")
    }
})