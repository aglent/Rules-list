// https://github.com/ydzydzydz/Rules/blob/master/resources/js/Music.js

var result = body

let path = '/vip/v2/user/vip';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.data.isNewUser = 2;
    jsbody.data.vipLuxuryExpire = 1738717749000;
    jsbody.data.isYearUser = 2;
    jsbody.data.vipmExpire = 1738717749000;
    jsbody.data.vipOverSeasExpire = 1738717749000;
    jsbody.data.vipExpire = 1738717749000;
    jsbody.data.vip3Expire = 1738717749000;
    result = JSON.stringify(jsbody);
}
result;

/* ************************************************************
 * 来源：https://github.com/Choler/Surge/blob/master/Music.js
 * http-response ^http://vip1\.kuwo\.cn/vip/ script-path=https://raw.githubusercontent.com/Choler/Surge/master/Music.js
 *************************************************************/