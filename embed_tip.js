const Discord = require('discord.js')

message.channel.send({
    embeds: [ new Discord.MessageEmbed()
        .setColor('BLUE')
        // 색상 : https://discord.js.org/#/docs/discord.js/stable/typedef/ColorResolvable
        // 그 외 색상은 RGB 코드 형태로도 작성 가능
        // 예) 16진수 : `#ffffff`, 소수점 : `(255,255,255)`
        .setAuthor({ 
                name: '지역정보', // 256자 이내 
                iconURL: '이미지링크', 
                url: '링크' 
        })
        .setTitle('대한민국') // 256자 이내
        .setURL('링크')
        .setThumbnail('이미지링크')
        .setDescription('동아시아의 한반도 남부에 자리한 민주공화국이다.') // 4096자 이내
        .addField('국가코드', '410, KOR, KR', true)
        .addFields(
            { name: '인구수', value: '51,638,809명' },
            { name: '국가', value: '애국가', inline: true },
            { name: '국화', value: '무궁화', inline: true },
            { name: '국조', value: '까치', inline: true },
        )
        // 필드를 수평으로 표시하려면 두 개 이상의 연속된 필드를 liline: true로 설정
        // 필드는 최대 25개 생성 제한, 필드 name 256자 이내, value 1024자 이내
        .setImage('이미지링크')
        .setFooter(`현재시간 : `); // 2048자 이내
        .setTimestamp() // 사용자의 기기에 따라 시간대 자동 조정
        ]
})
// 한 임베드의 모든 글자 수는 6000자 제한
// 전송할려는 1개의 메세지에 최대 10개의 임베드까지만 삽입가능
// 임베드 안에 포함된 멘션은 기본적으로 멘션된 사용자한테 알림되지 않음
// https://discord.js.org/#/docs/discord.js/stable/class/MessageEmbed
