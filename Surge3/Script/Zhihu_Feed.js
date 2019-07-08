// https://github.com/onewayticket255/Surge-Script/blob/master/surge%20zhihu%20feed.js
// 知乎去广告 （作者：onewayticket255）

// [Script]
// http-response https://api.zhihu.com/topstory/follow requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
// http-response https://api.zhihu.com/topstory/recommend requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
// http-response https://api.zhihu.com/.*/questions requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
// http-response https://api.zhihu.com/market/header requires-body=true,script-path=https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20market.js

// [MITM]
// hostname = api.zhihu.com

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})