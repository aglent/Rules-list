/*
 * @repo: https://github.com/yichahucha/surge
 * @script: https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
 * @regular: ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua)
 */
/*
[Script]
# In-app advertising
http-response ^https?:\/\/api\.weibo\.cn\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline) script-path=https://raw.githubusercontent.com/aglent/Rules-list/master/Surge3/Script/Wb_AD.js
# Launch advertising
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/aglent/Rules-list/master/Surge3/Script/Wb_Launch.js
[MITM]
hostname = api.weibo.cn, *.uve.weibo.com
*/

const path1 = "/interface/sdk/sdkad.php";
const path2 = "/wbapplua/wbpullad.lua";

var result = body;
if (url.indexOf(path1) != -1) {
    result = result.replace('OK','');
    var obj = JSON.parse(result);
    if (obj.background_delay_display_time) {
        obj.background_delay_display_time = 60*24*365;
    }
    if (obj.show_push_splash_ad) {
        obj.show_push_splash_ad = false;
    }
    if (obj.ads) {
        obj.ads = [];
    }
    result = JSON.stringify(obj) + 'OK';
    console.log(result);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(result);
    if (obj.cached_ad && obj.cached_ad.ads) {
        obj.cached_ad.ads = [];
    }
    result = JSON.stringify(obj);
    console.log(result);
}
result;
