const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client({
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})



client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
})


client.slashCommands = new Discord.Collection()

require('./handler/indexs')(client)

client.login(config.token)

// parte do antilink

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  let confirm = await db.get(`antilink_${message.guild.id}`);
  if (confirm === false || confirm === null) {
    return;
  } else if (confirm === true) {
    if (message.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) return; // Caso o usuário tenha permissão de ADM, o bot vai permitir que o mesmo envie links
    if (message.content.toLocaleLowerCase().includes("http" + "www")) {
      message.delete()
      message.channel.send(`${message.author} Não envie links no servidor!`)
    }

  }
})

// parte da call automatica

// parte do ticket

client.on("interactionCreate", (interaction) => {
  if (interaction.isSelectMenu()) {
    if (interaction.customId === "painel_ticket") {
      let opc = interaction.values[0]
      if (opc === "opc1") {

        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // Coloque o ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 1.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      } else if (opc === "opc2") {

        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 2.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      } else if (opc === "opc3") {

        // Nova opção

        let nome = `📨-${interaction.user.id}`;
        let categoria = "" // ID da categoria

        if (!interaction.guild.channels.cache.get(categoria)) categoria = null;

        if (interaction.guild.channels.cache.find(c => c.name === nome)) {
          interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
        } else {
          interaction.guild.channels.create({
          name: nome,
          type: Discord.ChannelType.GuildText,
          parent: categoria,
          permissionOverwrites: [
            {
              id: interaction.guild.id,
              deny: [
                Discord.PermissionFlagsBits.ViewChannel
              ]
            },
            {
              id: interaction.user.id,
              allow: [
                Discord.PermissionFlagsBits.ViewChannel,
                Discord.PermissionFlagsBits.SendMessages,
                Discord.PermissionFlagsBits.AttachFiles,
                Discord.PermissionFlagsBits.EmbedLinks,
                Discord.PermissionFlagsBits.AddReactions
              ]
            }
          ]
        }).then( (ch) => {
          interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
          let embed = new Discord.EmbedBuilder()
          .setColor("Random")
          .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 3.`);
          let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
          .setCustomId("fechar_ticket")
          .setEmoji("🔒")
          .setStyle(Discord.ButtonStyle.Danger)
          );

          ch.send({ embeds: [embed], components: [botao] }).then( m => { 
            m.pin()
           })
        })
        }
        
      }
    }
  } else if (interaction.isButton()) {
    if (interaction.customId === "fechar_ticket") {
      interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos...`)
      setTimeout ( () => {
        try { 
          interaction.channel.delete()
        } catch (e) {
          return;
        }
      }, 5000)
    }
  }
})