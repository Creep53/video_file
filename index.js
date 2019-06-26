const Discord = require('discord.js');
//const ytdl = require('./node_modules/ytdl-coreytdl-core');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("Cp ");

bot.on('ready', function () {
    console.log("Oui jvais bossé patron xD")
    bot.user.setActivity('Cp help').catch(console.error)
});

bot.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);

	if (message.content.startsWith(prefix+"play")) {
		execute(message, serverQueue);
		return;
	} else if (message.content.startsWith(prefix+"skip")) {
		skip(message, serverQueue);
		return;
	} else if (message.content.startsWith(prefix+"stop")) {
		stop(message, serverQueue);
		return;
	} else {
		message.channel.send('You need to enter a valid command!')
	}
    //discution avec le bot 	
	if (message.content === "Bonjour"){
        message.reply("Heureux de te revoir parmis nous.")
    }	
	if (message.content === "Comment vas tu ?"){
        message.reply("Bien et toi comment tu vas ?")
    }
	if (message.content === "Que fais tu ?"){
        message.reply("je suis entrain de suivre mon programme")
    }
	
	if (message.content === "Génial nan ?"){
        message.reply("(￣▽￣)ノ")
    }
	if (message.content === "Creepy Bot ?"){
        message.reply("Oui c'est moi ? Si tu veux plus d'aide je t'invite à faire la commande Cp help")
    }
	if (message.content === "je t'aime"){
        message.reply("je comprends pas le concept de l'amour mon créateur m'a rien dit sur ce sujet")
    }
	if (message.content === "Je t'aime"){
	message.reply("Je doit aimer que PN car je suis sage")
   }	
   	if (message.content === prefix + "avatar") {
       		const avatar = (message.author.avatarURL);
	message.author.createDM().then(channel => {
	channel.send(avatar)
	console.log(`${message.author},`,avatar)
	});
	/*if (message.content === "test" + member.guild.channels.find('cяεερ_1 ☠')) {
	message.author.createDM().then(channel => {
	channel.send(":heart:")
	console.log('message envoyé')
		});*/
  }
	//message pour 
	if(message.content === prefix + "Quizz") {
	   message.channel.send(`pas encore codé ${message.author}`);
    }

	//Help de kubdom
if(message.content === prefix + "Info") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Informations sur le serveur Kub-Dom`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField("Cp Ip" ,"Pas encore disponible")
      .addField("Cp Web" ,"lien du site OFFICIEL du serveur <3 ")
      .addField("Cp Serveur" ,"Etat du serveur")
      .setFooter("Menu Info bot - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
}
	if(message.content.startsWith(prefix + "Ip")){
	message.channel.send(`On a dit quoi c'est n'est pas encore disponible`);
	}
	
	if(message.content.startsWith(prefix + "Web")){
	message.channel.send(`le lien -> https://kubdom.000webhostapp.com`);
	}
	
	if(message.content.startsWith(prefix + "Serveur")){
	message.channel.send(`Le Serveur est fermé pour le moment désolé on finit bientôt :kissing_heart: `);
	}
	//message pour afficher le menu discusion 
	if(message.content === prefix + "discu") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Comment communiquer avec moi !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField("Bonjour" ,"Je réponds à ça")
      .addField("Comment vas tu ?" ,"Je réponds à ça")
      .addField("Que fais tu ?" ,"Je réponds à ça")
      .addField("Génial nan ?" ,"Je réponds à ça")
      .addField("Creepy Bot ?" ,"Je réponds à ça")//erreur corrigé
      .addField("je t'aime" ,"Je réponds à ça")//rajouter dans le menu 07/11/2018
      .setFooter("Menu discusion bot - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
    }
    //message pour afficher le help   
    if(message.content === prefix + "help") {
      var aide_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:robot: Voici mes catégories d'aide !`)
      .setDescription(`Voici mes commandes disponible :`)
      .setThumbnail(message.author.avatarURL)
      .addField(":tools: Modération", "Fais `Cp mod` pour voir mes commandes de modération !")
      .addField(":tada: Fun", "Fais `Cp fun` pour voir mes commandes d'animation !")
      .addField(":writing_hand: Discusion bot","Fais `Cp discu` pour voir comment discuter avec moi !")
      .addField(":writing_hand: Afficher les Informations de KUB-DOM","Fais `Cp Info` pour plus d'informations!")
      .setFooter("Menu d'aide - By Creep_1")
      .setTimestamp()
      message.channel.send(aide_embed);
    }
//message pour afficher le fun
    if(message.content === prefix + "fun") {
      var fun_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes amusantes !`)
      .setThumbnail(message.author.avatarURL)
	  .addField("Cp cat", "Affiche des gifs de chat")
	  .addField("Cp narnia", "Affiche des gifs de narnia")
	  .addField("Cp wtf", "Affiche des gifs wtf")
	  .addField("Cp Yuki", "Affiche des images de (attention c'est dure) Yuki")
      	.addField("Cp avatar", "Envoie l'image de votre avatar en mp (utilité je sais pas mais je sais que ça marche :c)")
      .setFooter("Commande Fun - By Creep_1")
      .setTimestamp()
      message.channel.send(fun_embed);
    }
    //message pour afficher les commandes du fun
if(message.content.startsWith(prefix + "cat")){
        var cat = [
			"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
			"https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
			"https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif"
		];
    var gif = cat[Math.floor(Math.random() * cat.length)]; 
	
	var cat_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(cat_embed);
	}
	
	if(message.content.startsWith(prefix + "Yuki")){
        var Yuki = [
			"https://cdn.discordapp.com/attachments/417516189619585024/507993319767408660/Snapchat-66221107.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993515943264286/Snapchat-1883413935.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993646373535746/Snapchat-410157663.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507993757182853130/Snapchat-1423020034.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507994773336883200/IMG_20180107_122344.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507995280990273549/IMG_20180416_194429.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996560240541698/IMG_20180703_101443.jpg",
			"https://cdn.discordapp.com/attachments/417516189619585024/507996898221883404/IMG_20180714_192659_003.jpg"
		

		];
    var gif = Yuki[Math.floor(Math.random() * Yuki.length)]; 
	
	var Yuki_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle(':cat: Chat:')
	 .setImage(gif)
	.setFooter('CHAT CHAT CHAT CHAT')
	message.channel.send(Yuki_embed);
	}
	
	if(message.content.startsWith(prefix + "narnia")){
        var narnia = [
			"https://media.giphy.com/media/ytL3y83qPtic8/giphy.gif",
			"https://media.giphy.com/media/4PuHxplO8XuyA/giphy.gif",
			"https://media.giphy.com/media/mEuI7NjX90BNu/giphy.gif"
			
				];
    var gif = narnia[Math.floor(Math.random() * narnia.length)]; 
	
	var narnia_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('Narnia')
	 .setImage(gif)
	.setFooter("Narnia Narnia Narnia Narnia")
	message.channel.send(narnia_embed);
	}
		if(message.content.startsWith(prefix + "wtf")){
        var aleatoire = [
			"https://media.giphy.com/media/l46Cuu0O6xJ42z66I/giphy.gif",
			"https://media.giphy.com/media/13BwjdpxACoBPO/giphy.gif",
			"https://media.giphy.com/media/ToMjGpPbMMFCWHrqk6Y/giphy.gif",
			"https://media.giphy.com/media/AIgTmKOesNSWA/giphy.gif",
			"https://media.giphy.com/media/QxZQ7dSV4j6GQ/giphy.gif",
			"https://media.giphy.com/media/IYqe9gVpujtWo/giphy.gif",
			"https://media.giphy.com/media/13nhYQqKEPQAyA/giphy.gif",
			"https://media.giphy.com/media/o8GQT5Ipi4spy/giphy.gif"
	
				];
    var gif = aleatoire[Math.floor(Math.random() * aleatoire.length)]; 
	
	var aleatoire_embed = new Discord.RichEmbed()
	 .setColor('RANDOM')
	 .setTitle('WTF')
	 .setImage(gif)
	.setFooter("WTF WTF WTF WTF WTF")
	message.channel.send(aleatoire_embed);
	}
 //message pour afficher le mod
	 if(message.content === prefix + "mod") {
      var mod_embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`:tools: Voici mes commandes modérations !`)
      .setThumbnail(message.author.avatarURL)
      .addField("Cp kick <@user>", "Kick l'utilisateur !")
      .addField("Cp ban <@user>", "Ban l'utilisateur !")
      .addField("Cp mute <@user>", "Mute l'utilisateur mentionné")
      .addField("Cp unmute <@user>", "Unmute l'utilisateur mentionné")
      .setFooter("Commande modération - By Creep_1")
      .setTimestamp()
      message.channel.send(mod_embed);
    }
	//message pour afficher les commandes du mod
	 if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission!");
    
        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez metionner un utilisaeur")
        }
        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe :/")
        }
    
        if(message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour kick");
        }
    
        kick.kick().then(member => {
            message.channel.send(`${member.user.username} est kick pas ${message.author.username}`);
        });
    }

    if(message.content.startsWith(prefix + "ban")) {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la perission");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur");
        }

        var ban = message.guild.member(message.mentions.users.first());
        if(!ban) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe");
        }

        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("Je n'ai pas la permission pour ban");
        }
        ban.ban().then(member => {
            message.channel.send(`${member.user.username} est ban par ${message.author.username} !`)
        });   
    }
	 
    if(message.content.startsWith(prefix + "mute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
            message.channel.send(`${mute.user.username} est mute !`);
        });
    }

    if(message.content.startsWith(prefix + "unmute")) {
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send('Vous devez mentionner un utilisateur !');
        }

        var mute = message.guild.member(message.mentions.users.first());
        if(!mute) {
            return message.channel.send("Je n'ai pas trouvé l'utilisateur ou il l'existe pas !");
        }

        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
        message.channel.overwritePermissions(mute, { SEND_MESSAGES: true}).then(member => {
            message.channel.send(`${mute.user.username} n'est plus mute !`);
		   });
    }
if (message.content.startsWith(prefix + "clear")) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("Pas de assez de permission pour executer la commande")})                        
        }
    }
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('I need the permissions to join and speak in your voice channel!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return message.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

bot.login(token); //a garder en version heroku
