var obj = JSON.parse($response.body);

obj["premium_info"] = {
    "premium_registered_at": "2021-11-30T00:00:00.000+09:00",
    "premium_expires_at": "2999-12-30T23:59:59.999+09:00",
    "premium?": true,
    "stopped_premium?": false,
    "free_trial_expires_at": null,
    "payment_method": "apple",
    "subscription_type": "premium_year",
    "expired_free_trial?": true,
    "free_trial_period_days": -1,
    "free_trial_applied_end_date": "2013/10/31",
    "free_trial_days_for_android": 30,
    "premium_fee_for_android": 500,
    "free_trial_days_for_ios": 30,
    "free_trial_days_text_for_ios": "1ヶ月",
    "first_premium_registered_at": "2021/11/30",
    "latest_free_premium_from": null,
    "latest_free_premium_to": null,
    "has_apple_premium_histories": false,
    "subscription_status": {
      "id": 1,
      "type": "enabled"
    }
  };


$done({body: JSON.stringify(obj)});

/*
^https:\/\/moneyforward\.com\/\/sp2\/premium_statuses
*/
