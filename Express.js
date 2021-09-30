var obj = JSON.parse($response.body);

obj = {
  "mobileProfileSpecVersion": "1.0",
  "mobileProfile": {
    "id": "fe4dabbe-0483-41f6-b34a-2141c85d7c36",
    "previousProfileId": "b41c2e3f-e378-422b-bc1a-18a7b49da1a4",
    "serverId": "lcs-mobile-cops",
    "profileStatus": "PROFILE_AVAILABLE",
    "appLicenseMode": "FREEMIUM",
    "legacyProfile": "{\"licenseId\":\"81B743F52365B23DA39A\",\"licenseType\":3,\"licenseVersion\":\"1.0\",\"effectiveEndTimestamp\":1628837999000,\"graceTime\":1382400000,\"licensedFeatures\":[],\"enigmaData\":{\"productId\":204,\"serialKey\":\"994303186838422362858833\",\"clearSerialKey\":\"12044534565132377073\",\"locale\":\"ALL\",\"associatedLocales\":\"ALL\",\"platform\":0,\"isk\":2044017,\"customerId\":0,\"deliveryMethod\":3,\"pc\":true,\"rb\":false}}",
    "relationshipProfile": "[{\"profileGenerationTimestamp\":1628482979810,\"licenseId\":\"81B743F52365B23DA39A\",\"licenseExpiryTimestamp\":4081386904000,\"appEntitlementStatus\":\"SUBSCRIPTION\",\"activationType\":\"NAMED_USER\",\"billingStatus\":\"NORMAL\",\"usedForLegacyProfile\":true,\"licenseExpiryWarningControl\":{\"warningStartTimestamp\":1629615599000,\"warningInterval\":0}}]",
    "userProfile": "{\"userId\":\"85469D955426E79E0A4C98A4@AdobeID\",\"firstName\":\"%C4%90%E1%BA%A1t\",\"lastName\":\"D%C6%B0%C6%A1ng\",\"email\":\"lil.love195@gmail.com\",\"countryCode\":\"VN\",\"displayName\":\"%C4%90%E1%BA%A1t%20D%C6%B0%C6%A1ng\",\"accountType\":\"type1\",\"authId\":\"85469D955426E79E0A4C98A4@AdobeID\"}",
    "additionalLegacyProfiles": "{}",
    "appProfile": "{}",
    "controlProfile": {
      "cacheRefreshControl": {
        "appRefreshInterval": 86040000
      }
    }
  },
  "workflow": null
};

$done({body: JSON.stringify(obj)});

^https:\/\/lcs-mobile-cops\.adobe\.io\/mobile_profile\/nul\/(v2|v1)
lcs-mobile-cops.adobe.io
