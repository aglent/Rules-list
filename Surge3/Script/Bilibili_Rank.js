let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    //block title||up
   if(["共青团中央","广东共青团","浙江共青团","徐大sao","翔翔大作战","徐大虾咯","科技美学","敬汉卿","NathanRich火锅大王","千户长生"].includes(element['name'])){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
