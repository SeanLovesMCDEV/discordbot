const Discord = require('discord.js');
const Embed = new Discord.MessageEmbed()
const client = new Discord.Client
const cooldowns = new Discord.Collection();






const prefix = 'mr';

client.once('ready', () => {
    console.log('working')
    client.user.setActivity('for mrhelp', { type: 'LISTENING' });
    const channel = client.channels.cache.get('761348067810213908');
    channel.send('I am online! 🟢')

    
   

    
   
    
    
}) 



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.substring(prefix.length).split(/ +/);

    switch(args[0]){


        case "help":
            const help = new Discord.MessageEmbed()
            .setTitle(`Hey, ${message.author.username} We are here to help`)
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setColor('7982DA')
            .setDescription('Hi, Thanks for being intrested in Mr.Wiggles. **ALL** commands start with: mr\n\n\n✅  Useful\n`avatar`\n\n❌ Not useful\n`owo`\n\n⚙️ Server admins\n`None Here yet`\n\n🚿 Form The creators\n`technews` `contribute`\n\nFor more help click [here](https://docs.mrwiggles.cf/)\n\n\n\n[Click Here to invite!](https://discord.com/api/oauth2/authorize?client_id=758424457781313540&permissions=1812462673&scope=bot)\n\nEVENT-TIME-O: Find the command that gets you a chat it starts with `mr` and ends with a seasonal emoji ')
            .setFooter(`Reqested by: ${message.author.username}`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!args[1]){
                message.channel.send(help).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command Help!`)
                    message.channel.send('The event has exspired 🟥')
                })
                break;
            }
            
            


        break;




        case "avatar":
            const av = new Discord.MessageEmbed()
            .setTitle('Your avatar:')
            .setImage(message.author.displayAvatarURL())
            .setFooter(`Reqested by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor('7982DA')
            if(!args[1]){
                message.channel.send(av).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command avatar!`)
                })
                break;
            }



        case "owo":
            message.channel.send('Sorry OWO PUPPY is dead. I was the imposter').then(sentMessage =>{
                const channel = client.channels.cache.get('761348067810213908')
                channel.send(`${message.author.tag} Ran the command owo!`)
            })
            break;




        
        




             








        case "contribute":
            const contribute = new Discord.MessageEmbed()
            .setTitle('Do you want to contribue to Mr.Wiggles?')
            .setDescription('How To is on our docs [here](https://docs.mrwiggles.cf/contriblue/what-its-about)')
            .setColor('7982DA')
            .setFooter(`Reqested by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!args[1]){
                message.channel.send(contribute).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command contribute!`)
                })
                break;

            }


        case "technews":
            const news = new Discord.MessageEmbed()
            .setTitle('Form the creators: Techyy News')
            .setDescription('Techyy News is the **BEST** Place to find news scams, About discord, And more\n\n\n[Click here to visit the website!](https://www.techyynews.cf/home/)')
            .setColor('7982DA')
            .setFooter(`Reqested by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setTimestamp()
            if(!args[1]){
                message.channel.send(news).then(sentMessage =>{
                const channel = client.channels.cache.get('761348067810213908')
                channel.send(`${message.author.tag} Ran the command news! (teccynews)`)
                })
                break;
            }


        
        case "info":
            const info = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
            .setFooter(`Reqested by: ${message.author.username}`, message.author.displayAvatarURL())
            .setColor('7982DA')
            .setDescription('Mr.Wiggles Made by:\n\nIdeas:\n`appmonster` `Pyczowskyy` `Trent`\nDevs:\n`Seenloveswumpus` `RandomKittens`')
            if(!args[1]){
                message.channel.send(info).then(sentMessage =>{
                    const channel = client.channels.cache.get('761348067810213908')
                    channel.send(`${message.author.tag} Ran the command info!`)
                })
            }



        case "prefix":
            if (command === 'prefix') {
                // if there's at least one argument, set the prefix
                if (args.length) {
                    await prefixes.set(message.guild.id, args[0]);
                    return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
                }
            
                return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || globalPrefix}\``);
            }



        




        
               
            
    


    }


            
            
                

    

    
    

    



    
    
});



client.login(process.env.TOKEN);
