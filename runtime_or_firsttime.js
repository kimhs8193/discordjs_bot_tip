// runtime
let totalSeconds = (client.uptime / 1000)
// https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=uptime
// client.uptime 값은 밀리초 단위 이므로 10^-3을 곱해서 초 단위로 변경
let year = Math.floor(totalSeconds / 31536000) // 년 (365 * 24 * 60 * 60)
totalSeconds %= 31536000 // 나머지 값을 구해서 월 구하기에 계산
let month = Math.floor(totalSeconds / 2592000) // 월 (30 * 24 * 60 * 60)
totalSeconds %= 2592000 // 나머지 값을 구해서 일 구하기에 계산
let days = Math.floor(totalSeconds / 86400) // 일 (24 * 60 * 60)
totalSeconds %= 86400 // 나머지 값을 구해서 시 구하기에 계산
let hours = Math.floor(totalSeconds / 3600) // 시 (60 * 60)
totalSeconds %= 3600 // 나머지 값을 구해서 분 구하기에 계산
let minutes = Math.floor(totalSeconds / 60) // 분 (60)
let seconds = Math.floor(totalSeconds % 60) // 초 (60으로 나눠서 나머지를 먹어야 60을 초과한 숫자가 안나오겠죠?)
// Math.floor() 함수가 무엇인가요? => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// %= 가 무엇인가요? => totalSeconds = totalSeconds % 값

// client ready event trigger time
let startYear = new Date().getFullYear() - year // 현재년도 - 가동시간(년)
let startMonth = (new Date().getMonth() + 1) - month // 현재월 - 가동시간(월) 
let startDays = new Date().getDate() - days // 현재일 - 가동시간(일)
let startHours = new Date().getHours() - hours // 현재시 - 가동시간(시) 
let startMinutes = new Date().getMinutes() - minutes // 현재분 - 가동시간(분)
// Date()는 현재 날짜 및 시간을 구하는 함수
// getMonth()는 원래 월의 -1된 값이 반환되므로 +1로 복구

// 요일 구하는 함수 getDay(), 0 ~ 6 값 반환 (일, 월, 화, 수, 목, 금, 토)

/* new Date()는 기본적으로 봇이 구동되고 있는 서버에 설정된 표준 시간대로 표시되며,
heroku 같이 한국 표준시(UTC + 09:00)가 아니라면 봇이 마지막으로 가동된 시간이 해당 서버가 속한 국가의 시간대로 나오는게 정상이므로
한국 외의 호스팅서버면 KST로 바꿔줄 필요가 있어용 (한국 봇만 해당 or 본인 취향) */

const utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60 * 1000) // UTC 시간 계산
// getTime() 는 UTC 1970-1-1 00:00:00 부터 경과시간(ms) 값을 리턴하므로 getTimezoneOffset() 에서 나온 분 단위 시간을 60을 곱해서 초로 바꾸고
// 10^3을 곱해서 s 단위에서 ms 단위로 변경하고 둘이 더해줘서 UTC 시간(ms)을 저장
const kst = new Date(utc + (9 * 60 * 60 * 1000))
// KST가 UTC + 09:00 이므로 utc에 들어있는 ms값에 9시간을 ms 단위로 변경해서 더해주고 저장

//let startYear = new Date().getFullYear() - year
let startYear = kst.getFullYear() - year
