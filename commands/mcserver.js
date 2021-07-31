const util = require('minecraft-server-util');

module.exports = {
    name: 'mcsv',
    aliases: ['youtube'],
    cooldown: 0,
    description: 'Advanced music bot',
    async execute(message,args, cmd, client, Discord){
        if(cmd === 'mcsv'){
            if(!args[0]) return message.channel.send("Please enter a Minecraft's server ip");
            if(!args[1]) return message.channel.send("Please enter a Minecraft's server port");
     
            util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
                console.log(response);
                const embed = new Discord.MessageEmbed()
                .setColor('#4E5D94')
                .setTitle('Mc server status')
                .addFields(
                    {name: 'Server IP', value: response.host},
                    {name: 'Online Players', value: response.onlinePlayers},
                    {name: 'Max Players', value: response.maxPlayers},
                    {name: 'Version', value: response.version}
                )
                .setFooter("Minecraft's server status by Dek");
     
                message.channel.send(embed);
            })
            .catch ((error) =>{
                message.channel.send('There was an error finding this server');
                throw error;
            });
        }
        else if(cmd === 'youtube'){
            message.channel.send("Here is my creator's Youtube channel: https://www.youtube.com/c/DekuranVN | Go subscribe (☞ﾟヮﾟ)☞")
        }
    }
}