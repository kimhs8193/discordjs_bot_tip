const request = require('request')
// 웹서버(http) 파싱 모듈 (해당 모듈 개발 중단됬으나 설치는 가능)
const client_id = ""
const client_secret = ""
// 네이버 개발자 센터 본인이 등록한 앱 ID, SECRET (API key)
const papago_api_url = "https://openapi.naver.com/v1/papago/n2mt"
// 파파고 api 서버 URL
const { prefix } = require('../config.json')
// prefix length 값 구할려고 참조
module.exports = {
    name: "번역",
    async execute(message) {
        const query = message.content.slice(prefix.length + this.name.length + 1)
        // 사용자가 명령어를 전송할 때 명령어를 제외한 나머지 문자열 값 구해서 query에 저장
        // slice(start[,end]) 함수는 문자 배열을 추출할려고 써요. 명령어가 2글자면 start 인수에 3을 집어넣으면 2개 + 공백 1개 문자를 제외한 뒷 문자부터 값이 반환된단 의미
        const options = {
            // API에 전송할 데이터 구성
            url: papago_api_url, // 요청할 api 서버 주소
            form: { source: "ko", target: "en", text: query },
            // 파라미터 참고 : https://developers.naver.com/docs/papago/papago-nmt-api-reference.md#%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0
            headers: {
                "X-Naver-Client-Id": client_id,
                "X-Naver-Client-Secret": client_secret,
                // http 요청 헤더에 api key 넣어주셔야 되요.
            },
        }
        request.post(options, function (error, response, body) {
            // POST 방식으로 API 서버에 전송해줍니다.
            // https://mommoo.tistory.com/60
            if (!error && response.statusCode == 200) {
                // error로 반환이 안되면서 응답코드가 200으로 반환이 된 경우 (응답코드 200은 서버 측에서 HTTP 요청이 성공했단 의미)
                // 해당 주소 처럼 서버가 응답해줍니다.=> 응답예시 : https://developers.naver.com/docs/papago/papago-nmt-api-reference.md#%EC%9D%91%EB%8B%B5-%EC%98%88
                let body = JSON.parse(response.body);
                // 그런데 원하는건 번역된 내용이기 때문에 리스폰된 값에서 body를 파싱해줍니다.
                // JSON.parse가 뭔가요? => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
                message.reply(body.message.result.translatedText)
                // 위 응답 예시 링크에 있는 것 중에 translatedText가 번역된 내용이므로 위와 같이 작성 후 사용자에게 답장
            } else {
                message.reply('error = ' + response.statusCode)
                // api 서버 응답 요청 또는 기타 사유로 실패할 경우 에러코드 반환
                // 에러코드 : https://developers.naver.com/docs/papago/papago-nmt-api-reference.md#%EC%98%A4%EB%A5%98-%EC%BD%94%EB%93%9C
            }
        })
    }
}
