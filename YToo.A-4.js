/*
╔══╗  　　　  ╔══╗     ╔══╗ ╔╗  　　　
║╔═╝ ╔═╗ ╔═╗ ║ ═║ ╔═╗ ║  ║ ╠╣ ╔═╗
║╚═╗ ║╩╣ ║║║ ║ ═║ ║║║ ║║║║ ║║ ║║║
╚══╝ ╚═╝ ╚╩╝ ╚══╝ ╚═╝ ╚╩╩╝ ╚╝ ╚╩╝
============================================
说明详情请见：https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/readme.js
============================================
*/
const jsname = '📚书旗小说'
const $ = Env(jsname)
//0为关闭日志，1为开启,默认为0
const logs = 0;
//0为关闭通知，1为所有通知,默认为0
const notifyInterval = 1;
//通知风格
let tz = '';
//var i = 0;
//let version = $.getval('version') || "1.5.1";

////////////////////////// 【CenBoMin-Time】///////////////////////////////////////
//hour&min
var hour = '';
var minute = '';
if ($.isNode()) {
  hour = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getHours();
  minute = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).getMinutes();
} else {
  hour = (new Date()).getHours();
  minute = (new Date()).getMinutes();
}
//现在毫秒格式(13位数)
let todaytimems = Math.round(Date.now())
//现在秒格式(10位数)
let todaytimes = Math.round(Date.now() / 1000)
//今天20200101格式
let today1 = formatDateTime(new Date());
//今天2021.01.30 17:32:01格式
let today2 = formatDateTime(todaytimes);

////////////////////////// 【CenBoMin-Cookie】///////////////////////////////////////

const loadresourcebodyArr = [];
let loadresourcebodyVal = "params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1615627139&sign=2f56a60adc50dea6cd67444366ea2125&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const loadresourcekeyArr = [];
let loadresourcekeyVal = "{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}";

const sploadresourcebodyArr = [];
let sploadresourcebodyVal = "params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1616420321&sign=c7cbf3290f086c0bb482ea771541cd8c&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const sploadresourcekeyArr = [];
let sploadresourcekeyVal = "{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}";

const withdrawbodyArr = [];
let withdrawbodyVal = "userId=1277802019&position=1&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const bubblebodyArr = [];
let bubblebodyVal = "platform=1&requestSrc=h5&timestamp=1615627139&userId=1277802019&sqSv=1.0&sign=d3509bb15427dd5dc918477bb23c02c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const receivebodyArr = [];
let receivebodyVal = "platform=1&src=&timestamp=1615626976&userId=1277802019&sqSv=1.0&appVer=4.3.6.0&placeId=&sign=c64d03b5dd4b29eb217157ca95517ac3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const signinactionbodyArr = [];
let signinactionbodyVal = "clientTimestamp=1615626989&position=501&userId=1277802019&signInType=1&wua=HIVW_v07VSlzXvJIZwedjcjceD7XeyXtmk43LYYslwfiWEv%2FSaVpoN%2BkQU%2FqS19LPaLr0m3SQfCl32Sw%2F4xUiuLtn74TPa6baDQq4QCzg6vqCg6jprjnOSv9eRxxu%2BBmI8UjAIBdDlc%2FaD7bIEM0XRLLO8IvuAJDWyMH3D5E0vVQMsv5jP4PWxeI5KwAtDCVkl%2BdwrPaZMFeWjkqsRXaU3ps7vDZ49MVOb5WYw9Albu16vz8%3D&ua=&miniWua=HHnB_WI5PrZy4NkGQ8Lu1K2rNuvHShBcBqyQE5Zk5SiDFnJk%3D&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0921973c01be220dc6750c01321debab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const readlotterybodyArr = [];
let readlotterybodyVal = "_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTI1MiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjg1Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.IlQWfZA5Mnj2p9mTi4LmJkNzaj_rJtsMD9SMywmgzzrXvv_rj3FreC7Y1M_iIcUg83yoXABJeABWQ2j5B2coiA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_B/ZNrTw9gYsFsHWrznRiBbuYNcYr1fux4%2By3Nzo99xA%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=415393B24F4DAEB8614EE9638231F0A7&timestamp=1615626963&userId=1277802019&wua=HIVW_7K05Qvtg/ftDEtbMsTWv96qR41dd2x61U3iwUWfrS4DN6/nOvG7qoKV//8IUzNP2dJ13F%2BOTMNvn1ZvUbou%2BBHzo14QGmB%2BoJYsz2Y1KSVLXlvfkH969DEsTzo66K8YCpuDMm1aaKGRG6ArqP0P8G/N2Gt/EETq0PwyG/5BIqJ3RJuX22rX/Ip/oLZLQdONtVA4yb3jSeiSIJuhz0j3WARr64zBmChEGoN5fA14gtus%3D";

const videolotterybodyArr = [];
let videolotterybodyVal = "_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTI1MiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjg1Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.IlQWfZA5Mnj2p9mTi4LmJkNzaj_rJtsMD9SMywmgzzrXvv_rj3FreC7Y1M_iIcUg83yoXABJeABWQ2j5B2coiA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_iF12H8yZ%2BPsHa%2Bh%2Bm4E9WDJJNIEB7iKcr6xIx21eQ1o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B2C11FBEF0C02E01BF5E686C2AD1FE65&timestamp=1615627023&userId=1277802019&user_id=1277802019&wua=HIVW_a4QXxIUNU%2BdoBW8GklPCk0RQDe5DRz8e2aGrCAxIDCIUk7BTZU7ppFp68ZJ1QkDyOJuffiCWU7g4OdnEzPjLPGcHFoT5CDXIA%2B%2BHxt8QDBL9uOxfH9N2n/UEBj55gTCjuDk48v4yIsnbXV1StBTHMQ9Co1/w2fftdXVO1BCXMftmPQWjvC4JXmqMxuoJlGlA29eyUzKfzl7doSQsljyWUAMQ7iMvqy1EMGYTvM61H5w%3D";

const luckylotterybodyArr = [];
let luckylotterybodyVal = "_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_7fuXU9N/NflnUcz3z/mf387D/YXsvbFhnO/IrZ1xIT0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2A8F70DFAC198372B4550060908C8210&timestamp=1616463134&userId=1277802019&user_id=1277802019&wua=HIVW_x3NYgfAoagd%2Bd2o7PXDTG6ePfgpAT5GxFdK4CV7l4wQ3EJdZvrG1VcqvO7HaO24pe1YSO8pzJMSr/YQkQI4L32cLrwJWMBix0R65p%2BVMzAYWcMOigb4SHfasXMMgFZuTuiQ6ejFCdwVRBQ80Iurl6TedvKcVOnKU5wFpkmIk5ybDyM%2BwbdNahAbxuwB%2BWKkFoJyDm7UMFQ6anT4jkFCj1i0xKqGLGl7N0%2Bh/ENg2cdQ%3D";

const luckyredurlArr = [];
let luckyredurlVal = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";

const luckyredbodyArr = [];
let luckyredbodyVal = "wua=HIVW_BTw5SJYnfbssUi%2FpFvYKXCyhIUQ%2BZJbTxWNwKcmUqn%2B9pNCZzdCJ6kbKM53G0cYx1F4hN5xLJdjtHIg8dkGknHosp8FHmzozPja6j4b0vzSwmb7GcF%2Flb2JEWmdFagNkuRh2d2bC21NJvA9UhnJomJEGdhgsPcVV37S9h1EX7MO5WW54FQDIFvwvexRQ61ztJqq%2F6WMpJgUukR6s3fwmPKZzF6UjEGr4fd1mUpruWTE%3D&ua=&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1616463142&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=25662709a5e3bd70c966183e1c1a904d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const sharebodyArr = [];
let sharebodyVal = "actTaskId=304&wua=HIVW_v07VSlzXvJIZwedjcjceDyYqUKlp0089xzhEZc7JQeMWv21pd977c%2BuiznVH1ngmDWqD6o3D2ouSeC1ql3nOmUkyu0wjVwi8W3%2F%2Bbh4ANFXdYgvuf2Cc0gRrDPauqbbBbCLipkBEaKcHK3ylhzGkq%2F8fVHlPRUoEjouY5faqkTQrrLNHW9l6WR9ooFk93jREE4B2P8Gw5I3VBMzR59IICk7arw4NZo%2Frfv2BtmRzZI0%3D&ua=&miniWua=HHnB_GkiNIOhAYzK%2Bo93ZpdS%2B5hAIRxq80eycjmvJ41OwjvE%3D&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1615627062&sqSv=1.0&sign=3817d7313f7204f95b4c724117437770&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const booktaskurlArr = [];
let booktaskurlVal = "https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=12.0&ustatus=1&umidtoken=dC9LHcZLOu3iATV4KrBQmynJ7XBPuy%2Fe&net_env=3g&placeid=111111&user_id=1935246463&sn=216A56BC2CB0CEA5523F24076F69A999F64240A9&msv=10.0.0&brand=Apple&imei=AC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YEc7hnnS364DAKtwEA%2FOF8b%2F&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const booktaskbodyArr = [];
let booktaskbodyVal = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=1935246463";

const spsigninactionbodyArr = [];
let spsigninactionbodyVal = "clientTimestamp=1616419279&position=601&userId=1935246463&signInType=1&wua=ktgi_tyooeIXwDFCj5zf%2Fsdau%2Fm%2BwnhHBQHRzOouU3wxWJMLQJw6ZahqMezCJUNyC4LCtJGcxkzPtuwzC7cUgreJ%2Bhd0ssQzLWJXYZQiInr%2Bd4DvSwyYN2ysRPYfjLtW61um85uHSLuQ%2Fh%2Fy4Y%2FQw3fdzl3rv%2BjzfNyA3Y0GpBnx2ITiYFKjShood1OYxdzt5fZqQVpV%2BnqrYGDBiY9cWBswOTOO7X3yQaHjL%2FHgbGb3LalBukv5slX9%2BIPR57tNJxDgdRX%2B8fhu8WJAz61ftQMHbPyCELHHLqn1xu95GbprPHaruiOmTfizPJCQq1mL8EyyqeJXQV1fC0Q2JrGB%2FIbZtqO4q22k8p3ueovojmwOx83RaNFpq5sY1pTYq%2BPfj3N%2F9&ua=&miniWua=HHnB_D4nG%2F0Ufay06%2FFtoY5O0%2FDAwEmHtgKLS7b5t2Eno36d3%2FdTFKgt86Fhkb2I0raw7AgZAKQ41F4naE1v89JusRpEOgEXMmaShJAYBxG%2FQSHJd4vh6Y3gAmnK0HnRGfV6U&umidtoken=ULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3b5bf12ac29de886dbf47607325f8561&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D12.0%26ustatus%3D1%26umidtoken%3DULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z%26net_env%3D4g%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA%252FOF8b%252F%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const spreadcoinurlArr = [];
let spreadcoinurlVal = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=12.0&ustatus=1&umidtoken=ULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z&net_env=4g&placeid=111111&user_id=1935246463&sn=216A56BC2CB0CEA5523F24076F69A999F64240A9&msv=10.0.0&brand=Apple&imei=AC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YEc7hnnS364DAKtwEA%2FOF8b%2F&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const spreadcoinbodyArr = [];
let spreadcoinbodyVal = "actId=355&miniWua=HHnB_Cm5J7BLIWITQwxEGI0Ojc2ZgtLrs/2TXOPbCNoKDObz9iW5lHRl/eBGNFE%2BvvLRsdfQh0B1ThkbPblAcSdD16O0pH2QtZBgSBgQ5S4v7WTC80T3tSdATheaQcli9FyIT&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1616419469&userId=1935246463&wua=ktgi_E0ccEJ5nuRppzb9hParT5HtZVYTy1JMhA7di7vDTw81%2B5mT/9%2BDMLOynRibrWAhJqF6%2BYuKX%2BcxRIfaoCj8m22E7h5KrxkcZbHXI2857SuKXDtYGj9DjCmQ0vdZwjHky5ubXLf99w10G76MiUdMlbmYh8nPz9oCP%2BGtPwPkF%2BsaAi41vEmFLOLgxeDmwlMP3OhLBJ90sd7Abi4j4qk3ITMsXHCqSiEQTVI9Yt2Tt7nt4PE7M/rsc7Z9p5FjaKmYX%2Bm3TUJHK41FGcxXvXPQX98VM83z8c/EeCi6Dq8UQFQR5jnAjf01EBwv2csqY17TW9rHMBn1q0zKzo3G1Z/22AykW0WKJBRIe7CCOde0%2BP11DdqFmvnCFzd57MCpdin1a";

const sp1videocoinbodyArr = [];
let sp1videocoinbodyVal = "_public=idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DGKVLvIJLOhqwfzV4Ob3Dh2uohegPLywC%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA/OF8b/%26sdk%3D12.0&deliveryId=897&key=sq_app_ad&miniWua=HHnB_8aanJrlCtAetP5wQDhxtIwInkW8oQ5/fKyZ42cyY5BW7oCgstw0gzrzG/sRbIvO9ZcWQ1xAclOZIEWe0d27bdr6vAqLblpDlvejz1sf8XqWe7vJ%2BWCv0%2BGaZ3dGy9wNS&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=0E1FCEC668DECDB4D71CB863AEC2DAAF&timestamp=1615887789&userId=1935246463&user_id=1935246463&wua=ktgi_xork2qcEYbExdzF7/QJSD5HBSQrFVC05KWW77JffvIKDmBfOjrABsxi/nmX2tBR5m1foLDo6wCeUb0ANxmLqRkk0tdTXEG2MGZqm3YAO1zlIZICNvZImJLqOwloMefnRVtC53bWmgQ5RDP9huP2Z8GAZ7KUnEBbwPurfTNTWuOy6Yywrqk6s%2B/TOJ%2BwWEz3%2BxI3%2BqOzwNeojLbN7fu2Ee5BnfKRgGUXGJFsgDqhZSCZz4PP4QsB4KuUXKlp7UgTviVbnfMBOpYCRokurWju1PynPdCkQYfx9Yi6WmksMCToSqz8bn9Exe/1dgoSn5GKUQCJocb6sY0mHZjJmsVjsnlhysgZmdpoNBXT9yLXem/5cS3oOiYaMCc4gvcz3ke8k";

const sp2videocoinbodyArr = [];
let sp2videocoinbodyVal = "_public=idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DGKVLvIJLOhqwfzV4Ob3Dh2uohegPLywC%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA/OF8b/%26sdk%3D12.0&deliveryId=894&key=sq_app_ad&miniWua=HHnB_6NPFyg5RJv16AZxmUAUHFun%2BgxcXtBSZA095DvGEBhOCLUM5AcmvFdPtCnFFjDBv7F7dQjN5hVZzcCg57tdFQQ2hkMqK7CA4OTIEJDvIS8d5cQ2REb87HWu/k%2Bz1g1oB&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=038552E1F5F64AA134DDB78C557F7269&timestamp=1615887895&userId=1935246463&user_id=1935246463&wua=ktgi_sOhARym2c5wxrYgfV1tTzK5S6cvxFRNlW05pSnaA0y%2BLb5WQetN3l1lUdn/eyUwmMOda%2BW4PINO5H/DfI3f7xXqaOF%2B518mvv8syfICB0f9w0okGe4swevfnITl%2B8yAUXFL90%2BadWn2P5VoZgCIHIqVqT%2B5Ric0WLA7/C/tgMoIWoOlqn3WZZXTvZY%2Bi0IVEA%2BanRvSIUs3fIA8euIcIsjXfOKVo%2Bqj4KsPtFKsWVJqMbRCTU9dsgOspkxMMZzXJ042Rc/JxsNHEvuT6sZ0A3en0rbX0N4%2BQUaRcrtLi8SiUo2Ht/4VQ85aWYRq22ksXgLsTaiE31CPREGhtsxDX5YgW3Rc2/7rDkUUj5E7or/83n/JzotNmiWUjT3l/iZHu";

const spsharebodyArr = [];
let spsharebodyVal = "actTaskId=304&wua=HIVW_v07VSlzXvJIZwedjcjceDwLimFZQCAk76FavDTR%2Fu1JcuGL9O%2BSqKcO36LlVUUbsna%2BDs8WlPM%2F%2FplSHwuBFiYTTb%2BoMoeuCsEnvXC8PC4P0JbBq6yWBuC24WbwuI7GCCjPhYctZXNQaVb%2Bv%2F89j%2B2tUju6zw8ETXPR150Kpadpku%2B8rJxYW72khpSdNN5gMoNPRdx1kOMP8iHB5xAyaM6YuRZJzR2OURIoXoCL3ygQ%3D&ua=&miniWua=HHnB_%2FD95VYNQVDyoFh5nrwANIvvwWktvNkbOWRZLZk63xVY%3D&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1616420315&sqSv=1.0&sign=e3e2e1db90ccef996c5e18a15eadf562&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const lotteryinfourlArr = [];
let lotteryinfourlVal = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1616463152&userId=1277802019&activityId=311&sqSv=1.0&sign=29f764446021473641fc3a46af88769c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const videoinfourlArr = [];
let videoinfourlVal = "https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1615627139&user_id=1277802019&sqSv=1.0&sign=5d61ec5d6eaf039b74b00f2c4ec0b976&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";

const spvideoinfourlArr = [];
let spvideoinfourlVal = "https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=615&timestamp=1616420298&user_id=1277802019&sqSv=1.0&sign=eac987907335a3ed0d2af87a3e372968&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22";


if ($.isNode()) {
  Object.keys(loadresourcebodyVal).forEach((params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1615627139&sign=2f56a60adc50dea6cd67444366ea2125&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22) => {
    if (loadresourcebodyVal[params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1615627139&sign=2f56a60adc50dea6cd67444366ea2125&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22]) {
      loadresourcebodyArr.push(loadresourcebodyVal[params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1615627139&sign=2f56a60adc50dea6cd67444366ea2125&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22])
    }
  });

  Object.keys(loadresourcekeyVal).forEach(({\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}) => {
    if (loadresourcekeyVal[{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}]) {
      loadresourcekeyArr.push(loadresourcekeyVal[{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}])
    }
  });

  Object.keys(sploadresourcebodyVal).forEach((params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1616420321&sign=c7cbf3290f086c0bb482ea771541cd8c&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22) => {
    if (sploadresourcebodyVal[params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1616420321&sign=c7cbf3290f086c0bb482ea771541cd8c&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22]) {
      sploadresourcebodyArr.push(sploadresourcebodyVal[params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1616420321&sign=c7cbf3290f086c0bb482ea771541cd8c&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22])
    }
  });

  Object.keys(sploadresourcekeyVal).forEach(({\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}) => {
    if (sploadresourcekeyVal[{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}]) {
      sploadresourcekeyArr.push(sploadresourcekeyVal[{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}])
    }
  });


  Object.keys(withdrawbodyVal).forEach((userId=1277802019&position=1&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22) => {
    if (withdrawbodyVal[userId=1277802019&position=1&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22]) {
      withdrawbodyArr.push(withdrawbodyVal[userId=1277802019&position=1&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22])
    }
  });

  Object.keys(bubblebodyVal).forEach((item) => {
    if (bubblebodyVal[item]) {
      bubblebodyArr.push(bubblebodyVal[item])
    }
  });

  Object.keys(receivebodyVal).forEach((item) => {
    if (receivebodyVal[item]) {
      receivebodyArr.push(receivebodyVal[item])
    }
  });

  Object.keys(signinactionbodyVal).forEach((item) => {
    if (signinactionbodyVal[item]) {
      signinactionbodyArr.push(signinactionbodyVal[item])
    }
  });

  Object.keys(readlotterybodyVal).forEach((item) => {
    if (readlotterybodyVal[item]) {
      readlotterybodyArr.push(readlotterybodyVal[item])
    }
  });

  Object.keys(videolotterybodyVal).forEach((item) => {
    if (videolotterybodyVal[item]) {
      videolotterybodyArr.push(videolotterybodyVal[item])
    }
  });

  Object.keys(luckylotterybodyVal).forEach((item) => {
    if (luckylotterybodyVal[item]) {
      luckylotterybodyArr.push(luckylotterybodyVal[item])
    }
  });

  Object.keys(luckyredurlVal).forEach((item) => {
    if (luckyredurlVal[item]) {
      luckyredurlArr.push(luckyredurlVal[item])
    }
  });

  Object.keys(luckyredbodyVal).forEach((item) => {
    if (luckyredbodyVal[item]) {
      luckyredbodyArr.push(luckyredbodyVal[item])
    }
  });

  Object.keys(sharebodyVal).forEach((item) => {
    if (sharebodyVal[item]) {
      sharebodyArr.push(sharebodyVal[item])
    }
  });


  Object.keys(booktaskurlVal).forEach((item) => {
    if (booktaskurlVal[item]) {
      booktaskurlArr.push(booktaskurlVal[item])
    }
  });

  Object.keys(booktaskbodyVal).forEach((item) => {
    if (booktaskbodyVal[item]) {
      booktaskbodyArr.push(booktaskbodyVal[item])
    }
  });

  Object.keys(spsigninactionbodyVal).forEach((item) => {
    if (spsigninactionbodyVal[item]) {
      spsigninactionbodyArr.push(spsigninactionbodyVal[item])
    }
  });

  Object.keys(spreadcoinurlVal).forEach((item) => {
    if (spreadcoinurlVal[item]) {
      spreadcoinurlArr.push(spreadcoinurlVal[item])
    }
  });

  Object.keys(spreadcoinbodyVal).forEach((item) => {
    if (spreadcoinbodyVal[item]) {
      spreadcoinbodyArr.push(spreadcoinbodyVal[item])
    }
  });

  Object.keys(sp1videocoinbodyVal).forEach((item) => {
    if (sp1videocoinbodyVal[item]) {
      sp1videocoinbodyArr.push(sp1videocoinbodyVal[item])
    }
  });

  Object.keys(sp2videocoinbodyVal).forEach((item) => {
    if (sp2videocoinbodyVal[item]) {
      sp2videocoinbodyArr.push(sp2videocoinbodyVal[item])
    }
  });

  Object.keys(spsharebodyVal).forEach((item) => {
    if (spsharebodyVal[item]) {
      spsharebodyArr.push(spsharebodyVal[item])
    }
  });

  Object.keys(lotteryinfourlVal).forEach((item) => {
    if (lotteryinfourlVal[item]) {
      lotteryinfourlArr.push(lotteryinfourlVal[item])
    }
  });

  Object.keys(videoinfourlVal).forEach((item) => {
    if (videoinfourlVal[item]) {
      videoinfourlArr.push(videoinfourlVal[item])
    }
  });

  Object.keys(spvideoinfourlVal).forEach((item) => {
    if (spvideoinfourlVal[item]) {
      spvideoinfourlArr.push(spvideoinfourlVal[item])
    }
  });

} else {
  loadresourcebodyArr.push($.getdata('params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1615627139&sign=2f56a60adc50dea6cd67444366ea2125&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  loadresourcekeyArr.push($.getdata('{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=3g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}'));
  sploadresourcebodyArr.push($.getdata('params=%7B%22resources%22%3A%7B%22ShuqiBsDailyTask%22%3A%7B%7D%7D%7D&userId=1277802019&timeStamp=1616420321&sign=c7cbf3290f086c0bb482ea771541cd8c&serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=1&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  sploadresourcekeyArr.push($.getdata('{\"Origin\":\"https://render-web.shuqireader.com\",\"Accept-Encoding\":\"br, gzip, deflate\",\"Connection\":\"keep-alive\",\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, text/plain, */*\",\"Host\":\"render.shuqireader.com\",\"User-Agent\":\"Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A366 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone11,6__shuqi__v4.3.6.0) 1242x2688 Winding(WV_2) WK\",\"Referer\":\"https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&upf=20559&from=ShuqiTab&sdk=12.0&utdid=XJ4Exd1pTNkDAP82remyb0wL&ustatus=1&first_placeid=111111&net_env=4g&placeid=111111&user_id=1277802019&sn=0869E4D1A1D65BA7ECA579925248538E78FB016E&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&msv=8.0.0&brand=Apple&imei=8344DC9C1BBED930B8F2C3948334628C381A372B&skinVersionPrefix=1&appVer=4.3.6.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw&skinColor=23B383&platform=iOS&ver=210301&mod=iPhoneXMAX&statusBarHeight=44.000000&skinVersion=1&wh=1242x2688&soft_id=21&utype=vip&skinId=999&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22\",\"Content-Length\":\"1126\",\"Accept-Language\":\"zh-cn\}'));
  withdrawbodyArr.push($.getdata('userId=1277802019&position=1&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  bubblebodyArr.push($.getdata('platform=1&requestSrc=h5&timestamp=1615627139&userId=1277802019&sqSv=1.0&sign=d3509bb15427dd5dc918477bb23c02c7&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  receivebodyArr.push($.getdata('platform=1&src=&timestamp=1615626976&userId=1277802019&sqSv=1.0&appVer=4.3.6.0&placeId=&sign=c64d03b5dd4b29eb217157ca95517ac3&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  signinactionbodyArr.push($.getdata('clientTimestamp=1615626989&position=501&userId=1277802019&signInType=1&wua=HIVW_v07VSlzXvJIZwedjcjceD7XeyXtmk43LYYslwfiWEv%2FSaVpoN%2BkQU%2FqS19LPaLr0m3SQfCl32Sw%2F4xUiuLtn74TPa6baDQq4QCzg6vqCg6jprjnOSv9eRxxu%2BBmI8UjAIBdDlc%2FaD7bIEM0XRLLO8IvuAJDWyMH3D5E0vVQMsv5jP4PWxeI5KwAtDCVkl%2BdwrPaZMFeWjkqsRXaU3ps7vDZ49MVOb5WYw9Albu16vz8%3D&ua=&miniWua=HHnB_WI5PrZy4NkGQ8Lu1K2rNuvHShBcBqyQE5Zk5SiDFnJk%3D&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=0921973c01be220dc6750c01321debab&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  readlotterybodyArr.push($.getdata('_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTI1MiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjg1Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.IlQWfZA5Mnj2p9mTi4LmJkNzaj_rJtsMD9SMywmgzzrXvv_rj3FreC7Y1M_iIcUg83yoXABJeABWQ2j5B2coiA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=707&key=sq_app_ad&miniWua=HHnB_B/ZNrTw9gYsFsHWrznRiBbuYNcYr1fux4%2By3Nzo99xA%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=415393B24F4DAEB8614EE9638231F0A7&timestamp=1615626963&userId=1277802019&wua=HIVW_7K05Qvtg/ftDEtbMsTWv96qR41dd2x61U3iwUWfrS4DN6/nOvG7qoKV//8IUzNP2dJ13F%2BOTMNvn1ZvUbou%2BBHzo14QGmB%2BoJYsz2Y1KSVLXlvfkH969DEsTzo66K8YCpuDMm1aaKGRG6ArqP0P8G/N2Gt/EETq0PwyG/5BIqJ3RJuX22rX/Ip/oLZLQdONtVA4yb3jSeiSIJuhz0j3WARr64zBmChEGoN5fA14gtus%3D'));
  videolotterybodyArr.push($.getdata('_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTI1MiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjg1Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.IlQWfZA5Mnj2p9mTi4LmJkNzaj_rJtsMD9SMywmgzzrXvv_rj3FreC7Y1M_iIcUg83yoXABJeABWQ2j5B2coiA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=525&key=sq_app_ad&miniWua=HHnB_iF12H8yZ%2BPsHa%2Bh%2Bm4E9WDJJNIEB7iKcr6xIx21eQ1o%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=626&sign=B2C11FBEF0C02E01BF5E686C2AD1FE65&timestamp=1615627023&userId=1277802019&user_id=1277802019&wua=HIVW_a4QXxIUNU%2BdoBW8GklPCk0RQDe5DRz8e2aGrCAxIDCIUk7BTZU7ppFp68ZJ1QkDyOJuffiCWU7g4OdnEzPjLPGcHFoT5CDXIA%2B%2BHxt8QDBL9uOxfH9N2n/UEBj55gTCjuDk48v4yIsnbXV1StBTHMQ9Co1/w2fftdXVO1BCXMftmPQWjvC4JXmqMxuoJlGlA29eyUzKfzl7doSQsljyWUAMQ7iMvqy1EMGYTvM61H5w%3D'));
  luckylotterybodyArr.push($.getdata('_public=skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26utype%3Dvip%26sdk%3D12.0&deliveryId=711&key=sq_app_ad&miniWua=HHnB_7fuXU9N/NflnUcz3z/mf387D/YXsvbFhnO/IrZ1xIT0%3D&platform=iOS&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=703&sign=2A8F70DFAC198372B4550060908C8210&timestamp=1616463134&userId=1277802019&user_id=1277802019&wua=HIVW_x3NYgfAoagd%2Bd2o7PXDTG6ePfgpAT5GxFdK4CV7l4wQ3EJdZvrG1VcqvO7HaO24pe1YSO8pzJMSr/YQkQI4L32cLrwJWMBix0R65p%2BVMzAYWcMOigb4SHfasXMMgFZuTuiQ6ejFCdwVRBQ80Iurl6TedvKcVOnKU5wFpkmIk5ybDyM%2BwbdNahAbxuwB%2BWKkFoJyDm7UMFQ6anT4jkFCj1i0xKqGLGl7N0%2Bh/ENg2cdQ%3D'));
  luckyredurlArr.push($.getdata('https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR'));
  luckyredbodyArr.push($.getdata('wua=HIVW_BTw5SJYnfbssUi%2FpFvYKXCyhIUQ%2BZJbTxWNwKcmUqn%2B9pNCZzdCJ6kbKM53G0cYx1F4hN5xLJdjtHIg8dkGknHosp8FHmzozPja6j4b0vzSwmb7GcF%2Flb2JEWmdFagNkuRh2d2bC21NJvA9UhnJomJEGdhgsPcVV37S9h1EX7MO5WW54FQDIFvwvexRQ61ztJqq%2F6WMpJgUukR6s3fwmPKZzF6UjEGr4fd1mUpruWTE%3D&ua=&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&asac=2A20C07RJ9F51AOEFSNHDR&timestamp=1616463142&activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&sqSv=1.0&sign=25662709a5e3bd70c966183e1c1a904d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  sharebodyArr.push($.getdata('actTaskId=304&wua=HIVW_v07VSlzXvJIZwedjcjceDyYqUKlp0089xzhEZc7JQeMWv21pd977c%2BuiznVH1ngmDWqD6o3D2ouSeC1ql3nOmUkyu0wjVwi8W3%2F%2Bbh4ANFXdYgvuf2Cc0gRrDPauqbbBbCLipkBEaKcHK3ylhzGkq%2F8fVHlPRUoEjouY5faqkTQrrLNHW9l6WR9ooFk93jREE4B2P8Gw5I3VBMzR59IICk7arw4NZo%2Frfv2BtmRzZI0%3D&ua=&miniWua=HHnB_GkiNIOhAYzK%2Bo93ZpdS%2B5hAIRxq80eycjmvJ41OwjvE%3D&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1615627062&sqSv=1.0&sign=3817d7313f7204f95b4c724117437770&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  booktaskurlArr.push($.getdata('https://ocean.shuqireader.com/api/activity/v1/task/reward?sdk=12.0&ustatus=1&umidtoken=dC9LHcZLOu3iATV4KrBQmynJ7XBPuy%2Fe&net_env=3g&placeid=111111&user_id=1935246463&sn=216A56BC2CB0CEA5523F24076F69A999F64240A9&msv=10.0.0&brand=Apple&imei=AC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YEc7hnnS364DAKtwEA%2FOF8b%2F&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  booktaskbodyArr.push($.getdata('actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=1935246463'));
  spsigninactionbodyArr.push($.getdata('clientTimestamp=1616419279&position=601&userId=1935246463&signInType=1&wua=ktgi_tyooeIXwDFCj5zf%2Fsdau%2Fm%2BwnhHBQHRzOouU3wxWJMLQJw6ZahqMezCJUNyC4LCtJGcxkzPtuwzC7cUgreJ%2Bhd0ssQzLWJXYZQiInr%2Bd4DvSwyYN2ysRPYfjLtW61um85uHSLuQ%2Fh%2Fy4Y%2FQw3fdzl3rv%2BjzfNyA3Y0GpBnx2ITiYFKjShood1OYxdzt5fZqQVpV%2BnqrYGDBiY9cWBswOTOO7X3yQaHjL%2FHgbGb3LalBukv5slX9%2BIPR57tNJxDgdRX%2B8fhu8WJAz61ftQMHbPyCELHHLqn1xu95GbprPHaruiOmTfizPJCQq1mL8EyyqeJXQV1fC0Q2JrGB%2FIbZtqO4q22k8p3ueovojmwOx83RaNFpq5sY1pTYq%2BPfj3N%2F9&ua=&miniWua=HHnB_D4nG%2F0Ufay06%2FFtoY5O0%2FDAwEmHtgKLS7b5t2Eno36d3%2FdTFKgt86Fhkb2I0raw7AgZAKQ41F4naE1v89JusRpEOgEXMmaShJAYBxG%2FQSHJd4vh6Y3gAmnK0HnRGfV6U&umidtoken=ULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&sign=3b5bf12ac29de886dbf47607325f8561&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D12.0%26ustatus%3D1%26umidtoken%3DULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z%26net_env%3D4g%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA%252FOF8b%252F%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  spreadcoinurlArr.push($.getdata('https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=12.0&ustatus=1&umidtoken=ULRLWZNLOhI2HDV4WQjAosQ7wdribh6Z&net_env=4g&placeid=111111&user_id=1935246463&sn=216A56BC2CB0CEA5523F24076F69A999F64240A9&msv=10.0.0&brand=Apple&imei=AC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA&appVer=1.0.3.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow&statusBarHeight=44.000000&platform=116&ver=210223&mod=iPhoneXMAX&wh=1242x2688&utype=vip&utdid=YEc7hnnS364DAKtwEA%2FOF8b%2F&idfa=7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  spreadcoinbodyArr.push($.getdata('actId=355&miniWua=HHnB_Cm5J7BLIWITQwxEGI0Ojc2ZgtLrs/2TXOPbCNoKDObz9iW5lHRl/eBGNFE%2BvvLRsdfQh0B1ThkbPblAcSdD16O0pH2QtZBgSBgQ5S4v7WTC80T3tSdATheaQcli9FyIT&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1616419469&userId=1935246463&wua=ktgi_E0ccEJ5nuRppzb9hParT5HtZVYTy1JMhA7di7vDTw81%2B5mT/9%2BDMLOynRibrWAhJqF6%2BYuKX%2BcxRIfaoCj8m22E7h5KrxkcZbHXI2857SuKXDtYGj9DjCmQ0vdZwjHky5ubXLf99w10G76MiUdMlbmYh8nPz9oCP%2BGtPwPkF%2BsaAi41vEmFLOLgxeDmwlMP3OhLBJ90sd7Abi4j4qk3ITMsXHCqSiEQTVI9Yt2Tt7nt4PE7M/rsc7Z9p5FjaKmYX%2Bm3TUJHK41FGcxXvXPQX98VM83z8c/EeCi6Dq8UQFQR5jnAjf01EBwv2csqY17TW9rHMBn1q0zKzo3G1Z/22AykW0WKJBRIe7CCOde0%2BP11DdqFmvnCFzd57MCpdin1a'));
  sp1videocoinbodyArr.push($.getdata('_public=idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DGKVLvIJLOhqwfzV4Ob3Dh2uohegPLywC%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA/OF8b/%26sdk%3D12.0&deliveryId=897&key=sq_app_ad&miniWua=HHnB_8aanJrlCtAetP5wQDhxtIwInkW8oQ5/fKyZ42cyY5BW7oCgstw0gzrzG/sRbIvO9ZcWQ1xAclOZIEWe0d27bdr6vAqLblpDlvejz1sf8XqWe7vJ%2BWCv0%2BGaZ3dGy9wNS&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=0E1FCEC668DECDB4D71CB863AEC2DAAF&timestamp=1615887789&userId=1935246463&user_id=1935246463&wua=ktgi_xork2qcEYbExdzF7/QJSD5HBSQrFVC05KWW77JffvIKDmBfOjrABsxi/nmX2tBR5m1foLDo6wCeUb0ANxmLqRkk0tdTXEG2MGZqm3YAO1zlIZICNvZImJLqOwloMefnRVtC53bWmgQ5RDP9huP2Z8GAZ7KUnEBbwPurfTNTWuOy6Yywrqk6s%2B/TOJ%2BwWEz3%2BxI3%2BqOzwNeojLbN7fu2Ee5BnfKRgGUXGJFsgDqhZSCZz4PP4QsB4KuUXKlp7UgTviVbnfMBOpYCRokurWju1PynPdCkQYfx9Yi6WmksMCToSqz8bn9Exe/1dgoSn5GKUQCJocb6sY0mHZjJmsVjsnlhysgZmdpoNBXT9yLXem/5cS3oOiYaMCc4gvcz3ke8k'));
  sp2videocoinbodyArr.push($.getdata('_public=idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22%26ustatus%3D1%26net_env%3D4g%26umidtoken%3DGKVLvIJLOhqwfzV4Ob3Dh2uohegPLywC%26placeid%3D111111%26user_id%3D1935246463%26sn%3D216A56BC2CB0CEA5523F24076F69A999F64240A9%26msv%3D10.0.0%26brand%3DApple%26imei%3DAC4B0CE478620113F81F9C9FDAD6ED95E3E48DBA%26appVer%3D1.0.3.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxOTM1MjQ2NDYzIiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9BQzRCMENFNDc4NjIwMTEzRjgxRjlDOUZEQUQ2RUQ5NUUzRTQ4REJBIiwic24iOiJmYXN0XzIxNkE1NkJDMkNCMENFQTU1MjNGMjQwNzZGNjlBOTk5RjY0MjQwQTkiLCJleHAiOjE2MTYxNDY3ODcsInVzZXJJZCI6IjE5MzUyNDY0NjMiLCJpYXQiOjE2MTU2MjgzODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.3YnO1Ca7KDKcqD42SpzU-sAMxaIBhB-4sykAOhthzk5V3vDrHN3nDS_2AGnYkMZmYsELHL8-YFQ-qcpmSBTaow%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210223%26mod%3DiPhoneXMAX%26wh%3D1242x2688%26utype%3Dvip%26utdid%3DYEc7hnnS364DAKtwEA/OF8b/%26sdk%3D12.0&deliveryId=894&key=sq_app_ad&miniWua=HHnB_6NPFyg5RJv16AZxmUAUHFun%2BgxcXtBSZA095DvGEBhOCLUM5AcmvFdPtCnFFjDBv7F7dQjN5hVZzcCg57tdFQQ2hkMqK7CA4OTIEJDvIS8d5cQ2REb87HWu/k%2Bz1g1oB&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=038552E1F5F64AA134DDB78C557F7269&timestamp=1615887895&userId=1935246463&user_id=1935246463&wua=ktgi_sOhARym2c5wxrYgfV1tTzK5S6cvxFRNlW05pSnaA0y%2BLb5WQetN3l1lUdn/eyUwmMOda%2BW4PINO5H/DfI3f7xXqaOF%2B518mvv8syfICB0f9w0okGe4swevfnITl%2B8yAUXFL90%2BadWn2P5VoZgCIHIqVqT%2B5Ric0WLA7/C/tgMoIWoOlqn3WZZXTvZY%2Bi0IVEA%2BanRvSIUs3fIA8euIcIsjXfOKVo%2Bqj4KsPtFKsWVJqMbRCTU9dsgOspkxMMZzXJ042Rc/JxsNHEvuT6sZ0A3en0rbX0N4%2BQUaRcrtLi8SiUo2Ht/4VQ85aWYRq22ksXgLsTaiE31CPREGhtsxDX5YgW3Rc2/7rDkUUj5E7or/83n/JzotNmiWUjT3l/iZHu'));
  spsharebodyArr.push($.getdata('actTaskId=304&wua=HIVW_v07VSlzXvJIZwedjcjceDwLimFZQCAk76FavDTR%2Fu1JcuGL9O%2BSqKcO36LlVUUbsna%2BDs8WlPM%2F%2FplSHwuBFiYTTb%2BoMoeuCsEnvXC8PC4P0JbBq6yWBuC24WbwuI7GCCjPhYctZXNQaVb%2Bv%2F89j%2B2tUju6zw8ETXPR150Kpadpku%2B8rJxYW72khpSdNN5gMoNPRdx1kOMP8iHB5xAyaM6YuRZJzR2OURIoXoCL3ygQ%3D&ua=&miniWua=HHnB_%2FD95VYNQVDyoFh5nrwANIvvwWktvNkbOWRZLZk63xVY%3D&userId=1277802019&umidtoken=XJ4Exd1pTNkDAP82remyb0wL&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.6.0&placeId=111111&timestamp=1616420315&sqSv=1.0&sign=e3e2e1db90ccef996c5e18a15eadf562&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  lotteryinfourlArr.push($.getdata('https://ocean.shuqireader.com/api/activity/activity/v1/lottery/info?timestamp=1616463152&userId=1277802019&activityId=311&sqSv=1.0&sign=29f764446021473641fc3a46af88769c&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjk0NTkxMCwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyNzUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.c9ewMcfO2oHkaPyqEEnIBInJx35Qb-3QjildVCFlBbtFtDO_YgpthQ4gvLMGU4gr9UdoHuw-rVFnLCdmoqa5LA%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  videoinfourlArr.push($.getdata('https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=626&timestamp=1615627139&user_id=1277802019&sqSv=1.0&sign=5d61ec5d6eaf039b74b00f2c4ec0b976&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D3g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjE0NTEyOSwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNTYyNjcyOSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.n_xV_wPRuArcrqjbfKlb-qxNcjoIbLbVVn_VNFG0cgxn-2VhMHHZhxY2SzbHZ3XpAgl1W3w7NzuqE46Ak7HYSw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  spvideoinfourlArr.push($.getdata('https://ocean.shuqireader.com/api/ad/adserver/v1/api/getAdInfo?appVer=4.3.6.0&placeId=111111&platform=iOS&requestSrc=h5&resourceId=615&timestamp=1616420298&user_id=1277802019&sqSv=1.0&sign=eac987907335a3ed0d2af87a3e372968&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26upf%3D20559%26from%3DShuqiTab%26sdk%3D12.0%26utdid%3DXJ4Exd1pTNkDAP82remyb0wL%26ustatus%3D1%26first_placeid%3D111111%26net_env%3D4g%26placeid%3D111111%26user_id%3D1277802019%26sn%3D0869E4D1A1D65BA7ECA579925248538E78FB016E%26umidtoken%3DXJ4Exd1pTNkDAP82remyb0wL%26msv%3D8.0.0%26brand%3DApple%26imei%3D8344DC9C1BBED930B8F2C3948334628C381A372B%26skinVersionPrefix%3D1%26appVer%3D4.3.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjc3ODAyMDE5IiwidXRkaWQiOiIiLCJpbWVpIjoiODM0NERDOUMxQkJFRDkzMEI4RjJDMzk0ODMzNDYyOEMzODFBMzcyQiIsInNuIjoiMDg2OUU0RDFBMUQ2NUJBN0VDQTU3OTkyNTI0ODUzOEU3OEZCMDE2RSIsImV4cCI6MTYxNjkzODY0NiwidXNlcklkIjoiMTI3NzgwMjAxOSIsImlhdCI6MTYxNjQyMDI0Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.nUfiJeI-HKzg_z_Ehqf7EwrNxNxJ7rNqDcnuHO2_-duW-oAp0W4mvk7fJVpGCoywWZAdY2FZmcTTaveW31x2pw%26skinColor%3D23B383%26platform%3D1%26ver%3D210301%26mod%3DiPhoneXMAX%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1242x2688%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D7BA016D0-83C1-4B9E-ADB9-3D6961256C22'));
  // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
  let Count = ($.getval('shuqiappCount') || '1') - 0;
  for (let i = 2; i <= Count; i++) {
    if ($.getdata(`loadresourcebody${i}`)) {
      loadresourcebodyArr.push($.getdata(`loadresourcebody${i}`));
      loadresourcekeyArr.push($.getdata(`loadresourcekey${i}`));
      sploadresourcebodyArr.push($.getdata(`sploadresourcebody${i}`));
      sploadresourcekeyArr.push($.getdata(`sploadresourcekey${i}`));
      withdrawbodyArr.push($.getdata(`withdrawbody${i}`));
      bubblebodyArr.push($.getdata(`bubblebody${i}`));
      receivebodyArr.push($.getdata(`receivebody${i}`));
      signinactionbodyArr.push($.getdata(`signinactionbody${i}`));
      readlotterybodyArr.push($.getdata(`readlotterybody${i}`));
      videolotterybodyArr.push($.getdata(`videolotterybody${i}`));
      luckylotterybodyArr.push($.getdata(`luckylotterybody${i}`));
      luckyredurlArr.push($.getdata(`luckyredurl${i}`));
      luckyredbodyArr.push($.getdata(`luckyredbody${i}`));
      sharebodyArr.push($.getdata(`sharebody${i}`));
      booktaskurlArr.push($.getdata(`booktaskurl${i}`));
      booktaskbodyArr.push($.getdata(`booktaskbody${i}`));
      spsigninactionbodyArr.push($.getdata(`spsigninactionbody${i}`));
      spreadcoinurlArr.push($.getdata(`spreadcoinurl${i}`));
      spreadcoinbodyArr.push($.getdata(`spreadcoinbody${i}`));
      sp1videocoinbodyArr.push($.getdata(`sp1videocoinbody${i}`));
      sp2videocoinbodyArr.push($.getdata(`sp2videocoinbody${i}`));
      spsharebodyArr.push($.getdata(`spsharebody${i}`));
      lotteryinfourlArr.push($.getdata(`lotteryinfourl${i}`));
      videoinfourlArr.push($.getdata(`videoinfourl${i}`));
      spvideoinfourlArr.push($.getdata(`spvideoinfourl${i}`));
    }
  }
}

////////////////////////// 【CenBoMin-Accounts & Control】///////////////////////

!(async () => {
  cc = (`${jsname}任务执行通知🔔`);
  if (typeof $.getdata('loadresourcebody') === "undefined") {
    console.log($.name, '【提示】请先前往获取cookie📲')
    return;
  }
  console.log(`\n✅ 检查共有多少个账号。。。`)
  await $.wait(1000)
  console.log(`👥 本次执行共${loadresourcebodyArr.length}个账号`)
  for (var i = 0; i < loadresourcebodyArr.length; i++) {
    loadresourcebodyVal = loadresourcebodyArr[i];
    loadresourcekeyVal = loadresourcekeyArr[i];
    sploadresourcebodyVal = sploadresourcebodyArr[i];
    sploadresourcekeyVal = sploadresourcekeyArr[i];
    withdrawbodyVal = withdrawbodyArr[i];
    bubblebodyVal = bubblebodyArr[i];
    receivebodyVal = receivebodyArr[i];
    signinactionbodyVal = signinactionbodyArr[i];
    readlotterybodyVal = readlotterybodyArr[i];
    videolotterybodyVal = videolotterybodyArr[i];
    luckylotterybodyVal = luckylotterybodyArr[i];
    luckyredurlVal = luckyredurlArr[i];
    luckyredbodyVal = luckyredbodyArr[i];
    sharebodyVal = sharebodyArr[i];
    booktaskurlVal = booktaskurlArr[i];
    booktaskbodyVal = booktaskbodyArr[i];
    spsigninactionbodyVal = spsigninactionbodyArr[i];
    spreadcoinurlVal = spreadcoinurlArr[i];
    spreadcoinbodyVal = spreadcoinbodyArr[i];
    sp1videocoinbodyVal = sp1videocoinbodyArr[i];
    sp2videocoinbodyVal = sp2videocoinbodyArr[i];
    spsharebodyVal = spsharebodyArr[i];
    lotteryinfourlVal = lotteryinfourlArr[i];
    videoinfourlVal = videoinfourlArr[i];
    spvideoinfourlVal = spvideoinfourlArr[i];
    console.log(`\n💗💕 开始${$.name}账号【${(i+1)}】 💕💗\n`)
    await shuqiapp();
    //await showmsg1();
    await showmsg2();
  }
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

////////////////////////// 【CenBoMin-Notify】///////////////////////////////////////
//通知1
function showmsg1() {
  if (notifyInterval != 1) {
    console.log(cc + '\n' + tz);
  }

  if (notifyInterval == 1) {
    $.msg(cc, '\n', tz);
  }
}
//通知2
async function showmsg2() {
  if (notifyInterval == 1) {
    if ($.isNode()) {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        await notify.sendNotify($.name, tz)
      }
    } else {
      if ((hour == 0 && minute <= 5) || (hour == 8 && minute <= 5) || (hour == 12 && minute <= 5) || (hour == 23 && minute <= 5)) {
        $.msg(cc, '', tz);
      }
    }
  } else if (notifyInterval == 0) {
    console.log(cc + '' + tz);
  }
}
////////////////////////// 【CenBoMin-Task order】///////////////////////////////////////
async function shuqiapp() {
  console.log("✔️检查loadresourcebody/loadresourcekey");
  await $.wait(1000)
  await loadresource1();
  console.log("\n✔️检查lotteryinfourl");
  await $.wait(1000)
  await lotteryinfo();
  console.log("\n✔️检查videoinfourl");
  await $.wait(1000)
  await videoinfo();
  console.log("\n✔️检查sploadresourcebody/sploadresourcekey");
  await $.wait(1000)
  await loadresource2();
  console.log("\n✔️检查spvideoinfourl");
  await $.wait(1000)
  await spvideoinfo();
  await $.wait(1000)
  console.log(`\n👤 开始➰查询用户资讯➰`)
  await withdrawinfo();
  await $.wait(1000)
  console.log(`\n1️⃣ 开始➰每日签到🤟➰任务`)
  $.log(`\n⏳查询[每日签到]状态...\n`);
  await task1();
  await $.wait(1000)
  console.log(`\n2️⃣ 开始➰30秒计时阅读⏱➰任务`)
  $.log(`\n⏳查询[30秒计时阅读]状态...\n`);
  await task21();
  await $.wait(1000)
  await task22();
  await $.wait(1000)
  console.log(`\n3️⃣ 开始➰看视频🎞➰任务`)
  $.log(`\n⏳查询[看视频]状态...\n`);
  await task31();
  await $.wait(1000)
  await task32();
  await $.wait(1000)
  console.log(`\n4️⃣ 开始➰福利转转转🎡➰任务`)
  $.log(`\n⏳查询[福利转转转]状态...\n`);
  await task4();
  await $.wait(1000)
  console.log(`\n5️⃣ 开始➰邀请书友👭➰任务`)
  $.log(`\n⏳查询[邀请书友]状态...\n`);
  await task51();
  await $.wait(1000)
  await task52();
  await $.wait(1000)
  console.log(`\n6️⃣ 开始➰浏览书城👁➰任务`)
  $.log(`\n⏳查询[浏览书城]状态...\n`);
  await task6();
  await $.wait(1000)
  console.log(`\n7️⃣ 开始➰每日阅读📚➰任务\n`)
  $.log(`👧请使用【专门刷时长】版本来执行任务...`);
  await $.wait(1000)
  console.log(`\n8️⃣ 开始➰一键收取📥➰任务`)
  $.log(`\n⏳检查未收取气泡...\n`);
  await task8();
}
///////////////////////////【CenBoMin-Network request order】//////////////////////////////////
//1.签到
async function task1() {
  if (task2status === 0) {
    $.log(`【普通版-每日签到】:未完成,准备执行任务...`);
    if (!signinactionbodyVal) {
      $.log(`❌signinactionbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await signinaction1();
    }
  } else {
    $.log(`【普通版-每日签到】:已完成🎉`);
    tz += `【普通版-每日签到】:已完成🎉\n`
  }

  if (sptask2status === 0) {
    $.log(`【极速版-每日签到】:未完成,准备执行任务...`);
    if (!spsigninactionbodyVal) {
      $.log(`❌spsigninactionbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await signinaction2();
    }
  } else {
    $.log(`【极速版-每日签到】:已完成🎉`);
    tz += `【极速版-每日签到】:已完成🎉\n`
  }

}
//2.30秒计时阅读
async function task21() {
  if (task1status === 0) {
    $.log(`\n【普通版-30秒计时奖励】:未完成,开始执行任务...`);
    if (!readlotterybodyVal) {
      $.log(`❌目前账号readlotterybody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await readlottery1();
    }

  } else {
    $.log(`【普通版-30秒计时奖励】:已完成🎉`);
    tz += `【普通版-30秒计时奖励】:已完成🎉\n`
  }
}
async function task22() {
  if (sptask1status === 0) {
    $.log(`\n【极速版-30秒计时奖励】:未完成,开始执行任务...`);
    await readlottery2();
    tz += `【极速版-30秒计时奖励】:剩余${mycnt}次\n`
  } else {
    $.log(`【极速版-30秒计时奖励】:已完成🎉`);
    tz += `【极速版-30秒计时奖励】:已完成🎉\n`
  }
}
//3.看视频
async function task31() {
  if (videostate === 10) {
    $.log(`【普通版-看视频】:已完成🎉`);
    tz += `【普通版-看视频】:已完成🎉\n`
  } else {
    $.log(`【普通版-看视频】:未完成,准备执行任务...`);
    await prizelottery1();
    tz += `【普通版-看视频】:获得250金币💰\n`
  }

}
async function task32() {
  if (spvideostate === 10) {
    $.log(`【极速版-看视频】:已完成🎉`);
    tz += `【极速版-看视频】:已完成🎉\n`
  } else {
    $.log(`【极速版-看视频】:未完成,准备执行任务...`);
    if (!sp1videocoinbodyVal) {
      $.log(`❌目前账号sp1videocoinbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await prizelottery2();
    }
    if (!sp2videocoinbodyVal) {
      $.log(`❌目前账号sp2videocoinbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await prizelottery3();
    }
  }

}
//4.福利转转转
async function task4() {
  if (lotterynow !== 10) {
    $.log(`【福利转转转】:未完成,准备执行任务...`);
    if (!luckylotterybodyArr[0]) {
      console.log('💡如果此版本有视频抽奖,请先前往获取cookie📲')
    } else {
      await prizelottery();
    }
    await prizered();
    await $.wait(5000)
    tz += `【福利转转转】:获得${lotteryred}💰\n`
  } else {
    $.log(`【福利转转转】:已完成🎉`);
    tz += `【福利转转转】:已完成🎉\n`
  }
}
//5.邀请书友
async function task51() {
  if (task3status === 0) {
    $.log(`【普通版-邀请书友】:未完成,开始执行任务...`);
    if (!sharebodyVal) {
      $.log(`❌目前账号sharebody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await sharetask1();;
    }
  } else {
    $.log(`【普通版-邀请书友】:已完成🎉`);
    tz += `【普通版-邀请书友】:已完成🎉\n`
  }
}

async function task52() {
  if (sptask4status === 0) {
    $.log(`【极速版-邀请书友】:未完成,开始执行任务...`);
    await sharetask2();
  } else {
    $.log(`【极速版-邀请书友】:已完成🎉`);
    tz += `【极速版-邀请书友】:已完成🎉\n`
  }
}

//6.浏览书城
async function task6() {
  if (sptask4status === 0) {
    $.log(`【极速版-浏览书城】:未完成,开始执行任务...`);
    if (!booktaskurlVal || !booktaskbodyVal) {
      $.log(`❌目前账号booktaskurl未获取,请参照说明对照表获取cookie。\n`);
      $.log(`❌目前账号booktaskbody未获取,请参照说明对照表获取cookie。\n`);
    } else {
      await booktask();
    }
  } else {
    $.log(`【极速版-浏览书城】:已完成🎉`);
    tz += `【极速版-浏览书城】:已完成🎉\n`
  }
}
//8.收取气泡
async function task8() {
  await bubbleinfo();
  if (checkbubble === 0) {
    console.log(`👧自动一键收取:没有任何气泡奖励,你获得空气！💭`)
  } else {
    await receive();
  }
}

///////////////////////////【CenBoMin-Network request】//////////////////////////////////
//lotteryinfo
async function lotteryinfo() {
  return new Promise((resolve) => {
    let url = {
      url: lotteryinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_3) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            lotterynow = data.data.actInfo.currentSessionJoinTimes
            console.log("🔑 加载普通版📱-书旗小说转盘Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//videoinfo
async function videoinfo() {
  return new Promise((resolve) => {
    let url = {
      url: videoinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.6.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.6.0) 750x1334 Winding(WV_3) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            videostate = data.data.extInfo.chanceCurrentCnt
            console.log("🔑 加载普通版📱-书旗小说看视频Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//spvideoinfo
async function spvideoinfo() {
  return new Promise((resolve) => {
    let url = {
      url: spvideoinfourlVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.3.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.3.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            spvideostate = data.data.extInfo.chanceCurrentCnt
            console.log("🔑 加载极速版🚀-书旗小说看视频Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//任务列表
async function loadresource1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://render.shuqireader.com/load/resource`,
      body: loadresourcebodyVal,
      headers: JSON.parse(loadresourcekeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            //30秒计时奖励
            task1status = data.data.ShuqiBsDailyTask.list[0].status
            //每日签到
            task2status = data.data.ShuqiBsDailyTask.list[1].status
            //邀请书友
            task3status = data.data.ShuqiBsDailyTask.list[2].status
            console.log("🔑 加载普通版📱-书旗小说Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function loadresource2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://render.shuqireader.com/load/resource`,
      body: sploadresourcebodyVal,
      headers: JSON.parse(sploadresourcekeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            //30秒计时奖励
            sptask1status = data.data.ShuqiBsDailyTask.list[0].status
            //每日签到
            sptask2status = data.data.ShuqiBsDailyTask.list[1].status
            //浏览书城
            sptask3status = data.data.ShuqiBsDailyTask.list[2].status
            //邀请书友
            sptask4status = data.data.ShuqiBsDailyTask.list[3].status
            console.log("🔑 加载极速版🚀-书旗小说Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
async function boxTask() {
  return new Promise((resolve) => {
    let url = {
      url: boxtaskbodyVal,
      headers: JSON.parse(boxtaskkeyVal),
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            readtime = data.data.readTime
            totaltime = data.data.total
            await $.wait(1000)
            console.log("🔑 加载极速版🚀-阅读时长Key....ok👌");
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//钱包
async function withdrawinfo() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/gold/withdraw/info`,
      body: withdrawbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            myphone = data.data.phone
            mygold = data.data.gold
            mycash = Math.round(data.data.withdrawableCash * 100) / 100
            $.log(`\n🔸用户信息`);
            $.log(`【账号】:${myphone}`);
            tz += `\n🔸账号${myphone}🔸\n`
            $.log(`【余额】:¥${mycash}`);
            tz += `【余额】:¥${mycash}\n`
            $.log(`\n💰提现任务`);
            for (cashtask of data.data.taskInfo.tasks) {
              title = cashtask.taskTitle
              process = cashtask.process
              $.log(`【${title}】:进度${process}💡`);
              tz += `【${title}】:进度${process}💡\n`
            }

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//气泡check
async function bubbleinfo() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/bubble/info`,
      body: bubblebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            checkbubble = data.data.totalGold
            for (bblist of data.data.goldDetail) {
              bbtitle = bblist.srcDesc
              bbcoin = bblist.amount
              $.log(`💧${bbtitle}:${bbcoin}金币🏅\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一键收取
async function receive() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive`,
      body: receivebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            console.log(`👧自动一键收取:${data.message}🎉`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般签到
async function signinaction1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
      body: signinactionbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            coinmsg = data.data.copyWriting
            todaycoin = data.data.todayPrizeInfo.prizeName
            $.log(`【普通版-每日签到】:获得${todaycoin}💰`);
            tz += `【普通版-每日签到】:获得${todaycoin}💰\n`
            $.log(`【普通版-签到总计】:${coinmsg}💰`);
            tz += `【普通版-签到总计】:${coinmsg}💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速签到
async function signinaction2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction`,
      body: spsigninactionbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.2.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.2.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },

    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            coinmsg = data.data.copyWriting
            todaycoin = data.data.todayPrizeInfo.prizeName
            $.log(`【极速版-每日签到】:获得${todaycoin}💰`);
            tz += `【极速版-每日签到】:获得${todaycoin}💰\n`
            $.log(`【极速版-签到总计】:${coinmsg}💰`);
            tz += `【极速版-签到总计】:${coinmsg}💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般阅读金币
async function readlottery1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery`,
      body: readlotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },

    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            maxcnt = data.data.chanceMaxCnt
            nowcnt = data.data.chanceCurrentCnt
            mycnt = maxcnt - nowcnt
            if (maxcnt != nowcnt) {
              $.log(`🙇‍♂️第${nowcnt}次阅读:获得${data.data.prizeResult.prizeDesc},还有${mycnt}次\n`);
              tz += `【普通版-30秒计时奖励】:‍剩余${mycnt}次\n`
            } else {
              $.log(`⛔️本次阅读奖励已达上限\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速阅读金币
async function readlottery2() {
  return new Promise((resolve) => {
    let url = {
      url: spreadcoinurlVal,
      body: spreadcoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            maxcnt = data.data.chanceMaxCnt
            nowcnt = data.data.chanceCurrentCnt
            mycnt = maxcnt - nowcnt
            if (maxcnt != nowcnt) {
              $.log(`🙇‍♂️第${nowcnt}次阅读:获得${data.data.prizeInfo.prizeDesc},还有${mycnt}次\n`);
            } else {
              $.log(`⛔️本次阅读奖励已达上限\n`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般看视频
async function prizelottery1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: videolotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧${redmsg}🎉`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速看视频1
async function prizelottery2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: sp1videocoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqireader/4.3.4 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧一般视频页面:${redmsg}🎉`);
            tz += `【极速版-一般视频】:获得100金币💰\n`

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速看视频2
async function prizelottery3() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: sp2videocoinbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`👧签到视频页面:${redmsg}🎉`);
            tz += `【极速版-签到视频】:获得100金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//获取转盘抽奖机会
async function prizelottery() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery`,
      body: luckylotterybodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            redmsg = data.data.awardMessage
            $.log(`🎡${redmsg}🎉\n`);
            console.log("开始抽奖...");
            await $.wait(1000)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//开始转盘抽奖
async function prizered() {
  return new Promise((resolve) => {
    let url = {
      url: luckyredurlVal,
      body: luckyredbodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_5) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            data = JSON.parse(data);
            lotteryred = data.data.prizeList[0].prizeName
            $.log(`👧恭喜抽到${lotteryred}🎉\n`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//一般分享
async function sharetask1() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/v1/task/reward`,
      body: sharebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.2.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,1__shuqi__v1.0.2.0) 750x1334 Winding(WV_2) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            //data = JSON.parse(data);
            $.log(`👧普通版邀请书友:获取200金币🏅`);
            tz += `【普通版-邀请书友】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速分享
async function sharetask2() {
  return new Promise((resolve) => {
    let url = {
      url: `https://ocean.shuqireader.com/api/activity/v1/task/reward`,
      body: spsharebodyVal,
      headers: {
        'Origin': `https://render-web.shuqireader.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept': `application/json, text/plain, */*`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.3.4.0) WindVane/8.6.1 Shuqi (iPhone8,1__shuqi__v4.3.4.0) 750x1334 Winding(WV_5) WK`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            //data = JSON.parse(data);
            $.log(`👧极速版邀请书友:获取200金币🏅`);
            tz += `【极速版-邀请书友】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//极速浏览书城
async function booktask() {
  return new Promise((resolve) => {
    let url = {
      url: booktaskurlVal,
      body: booktaskbodyVal,
      headers: {
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `ocean.shuqireader.com`,
        'User-Agent': `shuqifast/1.0.2 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            //$.log(data)
            $.log(`👧浏览书城15秒:获取200金币🏅`);
            tz += `【极速版-浏览书城】:获得200金币💰\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

///////////////////////////【CenBoMin-Customize】//////////////////////////////////
//invite
function invite() {
  return new Promise((resolve, reject) => {
    let inviteurl = {
      url: ``,
      headers: JSON.parse(runstepkeyVal),
    }
    $.get(inviteurl, (error, resp, data) => {
      if (error) {
        //$.log("响应错误")
      }
      resolve()
    })
  })
}

//解码URIcode
function URIcodetranslate(code) {
  return decodeURIComponent(code);
}
//毫秒时间戳改日期 2021.01.08 05:30:13
function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}
//安全获取
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`⛔️服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}
//毫秒时间戳转时间 20200108
function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
