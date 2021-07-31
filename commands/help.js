module.exports = {
    name: 'help',
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message,args, cmd, client, Discord){
        if(cmd === 'help'){
            const helpList = new Discord.MessageEmbed()
                .setColor('#4E5D94')
                .setTitle('List of commands')
                .addFields(
                    {name: 'Play music / Add music to queue', value: '^play [link or search query]'},
                    {name: 'Skip music', value: '^skip'},
                    {name: 'Stop music', value: '^stop'},
                    {name: "Minecraft's server status", value: "^mcsv [server's ip] [port]"},
                    {name: "Show creator's Youtube channel", value: '^youtube'},
                )
                .setFooter("DekBot - Created by Dek");
     
                message.channel.send(helpList);
        }
    }
}