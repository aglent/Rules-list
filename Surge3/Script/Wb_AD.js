/*
 * @repo: https://github.com/yichahucha/surge
 * @script: https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
 * @doc: https://raw.githubusercontent.com/yichahucha/surge/master/README.md
 * @regular: ^https?:\/\/api\.weibo\.cn\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline)
 */
/*
[Script]
# In-app advertising
http-response ^https?:\/\/api\.weibo\.cn\/2(\/groups\/timeline|\/statuses\/unread|\/statuses\/extend|\/comments\/build_comments|\/photo\/recommend_list|\/stories\/video_stream|\/statuses\/positives\/get|\/stories\/home_list|\/profile\/statuses|\/statuses\/friends\/timeline) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
# Launch advertising
http-response ^https?:\/\/(sdk|wb)app\.uve\.weibo\.com(\/interface\/sdk\/sdkad.php|\/wbapplua\/wbpullad.lua) script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
[MITM]
hostname = api.weibo.cn, *.uve.weibo.com
*/

const path1 = "/groups/timeline";
const path2 = "/statuses/unread";
const path3 = "/statuses/extend";
const path4 = "/comments/build_comments";
const path5 = "/photo/recommend_list";
const path6 = "/stories/video_stream";
const path7 = "/statuses/positives/get";
const path8 = "/stories/home_list";
const path9 = "/profile/statuses";
const path10 = "/statuses/friends/timeline";

var result = body;
function is_likerecommend(title) {
    if (title && title.type && title.type == "likerecommend") {
        return true;
    } else {
        return false;
    }
}

function filter_timeline() {
    let obj = JSON.parse(body);
    let statuses = obj.statuses;
    if (statuses && statuses.length > 0) {
        let ad = obj.ad;
        if (ad && ad.length > 0) {
            for (let i = 0; i < ad.length; i++) {
                const element = ad[i];
                let ad_id = element.id;
                for (let j = 0; j < statuses.length; j++) {
                    const element = statuses[j];
                    let statuses_id = element.id;
                    if (statuses_id == parseInt(ad_id)) {
                        statuses.splice(j, 1);
                        break;
                    }
                }
            }
        }

        let i = statuses.length;
        while (i--) {
            let element = statuses[i];
            if (is_likerecommend(element.title)) {
                statuses.splice(i, 1);
            }
            if (element.pic_bg_new) {
                delete element.pic_bg_new;
                delete element.pic_bg_type;
            }
        }

        if (obj.num) {
            obj.num = obj.statuses.length + ad.length;
            obj.original_num = obj.statuses.length;
        }
    }

    if (obj.trends) {
        obj.trends = [];
    }
    result = JSON.stringify(obj);
}

if (url.indexOf(path1) != -1) {
    filter_timeline();
}

if (url.indexOf(path2) != -1) {
    filter_timeline();
}

if (url.indexOf(path10) != -1) {
    filter_timeline();
}

if (url.indexOf(path3) != -1) {
    let obj = JSON.parse(body);
    delete obj.trend;
    result = JSON.stringify(obj);
}

if (url.indexOf(path4) != -1) {
    let obj = JSON.parse(body);
    let datas = obj.datas;
    if (datas && datas.length > 0) {
        let i = datas.length;
        while (i--) {
            const element = datas[i];
            let type = element.type;
            if (type == 5 || type == 1 || type == 6) {
                datas.splice(i, 1);
            }
        }
    }
    result = JSON.stringify(obj);
}

if (url.indexOf(path5) != -1) {
    let obj = JSON.parse(body);
    obj.data = {};
    result = JSON.stringify(obj);
}

if (url.indexOf(path6) != -1) {
    let obj = JSON.parse(body);
    let segments = obj.segments;
    if (segments && segments.length > 0) {
        let i = segments.length;
        while (i--) {
            const element = segments[i];
            let is_ad = element.is_ad;
            if (typeof is_ad != "undefined" && is_ad == true) {
                segments.splice(i, 1);
            }
        }
    }
    result = JSON.stringify(obj);
}

if (url.indexOf(path7) != -1) {
    let obj = JSON.parse(body);
    obj.datas = [];
    result = JSON.stringify(obj);
}

if (url.indexOf(path8) != -1) {
    let obj = JSON.parse(body);
    obj.story_list = [];
    result = JSON.stringify(obj);
}

if (url.indexOf(path9) != -1) {
    let obj = JSON.parse(body);
    let cards = obj.cards;
    if (cards && cards.length > 0) {
        let i = cards.length;
        while (i--) {
            let element = cards[i];
            let card_group = element.card_group;
            if (card_group && card_group.length > 0) {
                cards.splice(i, 1);
            }
        }
    }
    result = JSON.stringify(obj);
}
result;
    }
    json_body.statuses = new_statuses;
    result = JSON.stringify(json_body);
}
if (url.indexOf(path1) != -1) {
    filter_timeline();
}
if (url.indexOf(path2) != -1) {
    filter_timeline();
}
if (url.indexOf(path3) != -1) { 
    var json_body = JSON.parse(body);
    delete json_body.trend
    result = JSON.stringify(json_body);
}
if (url.indexOf(path4) != -1) { 
    var json_body = JSON.parse(body);
    var datas = json_body.datas;
    var new_datas = []
    for (let j = 0; j < datas.length; j++) {
        const element = datas[j];
        let type = element.type;
        if (type!=5 && type!=1 && type!=6) {
            new_datas.push(element);
        }
    }
    json_body.datas = new_datas;
    result = JSON.stringify(json_body);
}
if (url.indexOf(path5) != -1) { 
    var json_body = JSON.parse(body);
    json_body.data = {};
    result = JSON.stringify(json_body);
}
if (url.indexOf(path6) != -1) { 
    var json_body = JSON.parse(body);
    var segments = json_body.segments;
    var new_segments = [];
    for (let j = 0; j < segments.length; j++) {
        const element = segments[j];
        let is_ad = element.is_ad;
        if (typeof(is_ad) == "undefined" || is_ad == false) {
            new_segments.push(element);
        }
    }
    json_body.segments = new_segments;
    result = JSON.stringify(json_body);
}
if (url.indexOf(path7) != -1) {
    var json_body = JSON.parse(body);
    json_body.datas = [];
    result = JSON.stringify(json_body);
}
result;
