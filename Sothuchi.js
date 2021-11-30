var obj = JSON.parse($response.body);

obj["IsPremium"] = true;
obj["IsoEndDate"] = "10\/15\/2999 01:08:47 AM";
obj["ProductID"] = "sothuchi.premium.yearly";
obj.userInfoData["IsPremium"] = true;
obj.userInfoData["IsoEndDate"] = "10\/15\/2999 01:08:47 AM";
obj.userInfoData["ProductID"] = "sothuchi.premium.yearly";

$done({body: JSON.stringify(obj)});

/*
api.sothuchi.vn
^https:\/\/api\.sothuchi\.vn\/Services\/FinanceService.svc\/json\/(GetLastestSynchronizeDataWithBlock|GetUserInfoByUserID)
*/
