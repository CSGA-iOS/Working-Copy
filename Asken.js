var obj = JSON.parse($response.body);

obj["user"]["premium_status"
]= "3";
obj["user"]["premium_enable_giabsubs"]= "1";
obj["user"]["premium_enable_iiapsubs"]= "1";
obj["user"]["enable_premium_advice"]= "1";
obj["user"]["ad_status"]= "0";

$done({body: JSON.stringify(obj)});

/*
^https:\/\/www\.asken\.jp\/is\/auth\/sauth_login\/2
asken
*/
