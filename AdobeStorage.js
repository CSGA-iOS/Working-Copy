var obj = JSON.parse($response.body);

obj["storage_quota"]= 100.0;

$done({body: JSON.stringify(obj)});

/*
https://cc-api-storage.adobe.io/profile/quota
cc-api-storage.adobe.io
*/
