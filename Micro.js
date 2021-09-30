var obj = JSON.parse($response.body);

obj = {
  "HttpStatusCode": 200,
  "RetryAfterHeader": null,
  "ageGroup": "Adult",
  "hasHighestPlan": true,
  "oneDriveStatus": {
    "accountEnabled": true,
    "accountOnHold": false,
    "manageStorageLink": "https:\/\/g.live.com\/9ep9gl\/onedrivestorage",
    "referralLink": "https:\/\/onedrive.live.com\/?invref=e5194877ead77e7e"
  },
  "quota": {
    "displayQuotaDeletedUsed": "8.52 MB",
    "displayQuotaExceeded": "0 バイト",
    "displayQuotaRemaining": "1 TB",
    "displayQuotaTotal": "1 TB",
    "displayQuotaUsed": "238 MB",
    "quotaDeletedUsed": 8944034,
    "quotaExceeded": 0,
    "quotaRemaining": 1104630698859,
    "quotaStatus": 0,
    "quotaTotal": 1104880336896,
    "quotaUsed": 249638037
  },
  "quotaFacts": [{
    "EndDate": {
      "DateTime": "2999-09-25T00:00:00Z",
      "OffsetMinutes": 0
    },
    "category": "office.365.personal",
    "displayLink": "表示",
    "displayName": "Microsoft 365 サブスクリプション",
    "displayQuota": "1,024 GB",
    "factId": 10100,
    "linkURL": "https:\/\/g.live.com\/8seskydrive\/officeaccount",
    "multiplier": 0,
    "name": "Office 365 Personal",
    "ownershipType": "OwnedByBeneficiary",
    "quotaBase": 1099511627776,
    "totalBytes": 1099511627776,
    "type": 0
  }, {
    "displayName": "無料",
    "displayQuota": "5 GB",
    "factId": 20010,
    "multiplier": 0,
    "quotaBase": 5368709120,
    "totalBytes": 5368709120,
    "type": 1
  }]
};

$done({body: JSON.stringify(obj)});

/*
^https:\/\/skyapi\.live\.net\/API\/2\/GetStorageInfo*
skyapi.live.net
*/
