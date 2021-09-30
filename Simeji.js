var obj = JSON.parse($response.body);

obj.data.vip= {
      "current_vip_start": 1630997904,
      "current_vip_end": 4090805904,
      "current_ad_vip_start": 0,
      "current_ad_vip_end": 4090805904,
      "current_vip": "ios",
      "current_ad_vip": "",
      "bill_type": "subscibe",
      "ad_bill_type": "",
      "is_expired": 0,
      "is_ad_vip_expired": 1,
      "current_svip_end": 4090805904,
      "is_svip_expired": 0
    };

$done({body: JSON.stringify(obj)});

^https:/\/api\.simeji\.me\/passport\/sectbind
api.simeji.me
