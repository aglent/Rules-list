var body = $response.body;
var url = $request.url;
const path = "/pay/memberCardSummary";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
        obj["expired"] = 0;
	obj["expiredTime"] = 1591804799;
	obj["remainTime"] = 86313600;
	body = JSON.stringify(obj);
 }
$done({body});
