let body = $response.body
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
    //block ad||title||up
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!="small_cover_v2"||["华为","小米"].includes(element['title'])||["共青团中央","广东共青团","浙江共青团","徐大sao","翔翔大作战","徐大虾咯","科技美学","敬汉卿","NathanRich火锅大王","千户长生"].includes(element['args']['up_name'])){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})
