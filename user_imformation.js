const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "유저정보",
    execute(message) {
        const dddd = new MessageEmbed()
            .setTitle(`${message.member.user.tag}님의 정보`)
            //https://discord.js.org/#/docs/discord.js/stable/class/User?scrollTo=tag
            .setThumbnail(message.member.user.displayAvatarURL())
            //https://discord.js.org/#/docs/discord.js/stable/class/User?scrollTo=displayAvatarURL
            .addField(" 아이디", `${message.member.user.id}`)
            // https://discord.js.org/#/docs/discord.js/stable/class/User?scrollTo=id
            .addField("가입 날짜", `${message.member.user.createdAt.getFullYear()}년 ${message.member.user.createdAt.getMonth() + 1}월 ${message.member.user.createdAt.getDate()}일 ${message.member.user.createdAt.getHours()}시 ${message.member.user.createdAt.getMinutes()}분`)
            //https://discord.js.org/#/docs/discord.js/stable/class/User?scrollTo=createdAt
            .addField(" 서버 가입 날짜", `${new Date(message.member.joinedAt).toLocaleDateString()}`)
            //https://discord.js.org/#/docs/discord.js/stable/class/GuildMember?scrollTo=joinedAt
            .addField("내가 가진 역할 수", `${message.member.roles.cache.size - 1}`)
            // https://discord.js.org/#/docs/discord.js/v13/class/Role
        message.channel.send({ embeds: [dddd] })
    }
}
