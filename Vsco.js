var obj = JSON.parse($response.body);

obj = {
  "request_date": "2021-09-27T08:42:25Z",
  "request_date_ms": 1632732145291,
  "subscriber": {
    "entitlements": {
      "membership": {
        "expires_date": "2999-10-04T08:41:59Z",
        "grace_period_expires_date": null,
        "product_identifier": "VSCOANNUAL",
        "purchase_date": "2021-09-27T08:41:59Z"
      }
    },
    "first_seen": "2021-06-19T15:40:32Z",
    "last_seen": "2021-09-27T08:24:34Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "146276950",
    "original_application_version": "1587",
    "original_purchase_date": "2015-09-20T14:56:06Z",
    "other_purchases": {},
    "subscriptions": {
      "VSCOANNUAL": {
        "billing_issues_detected_at": null,
        "expires_date": "2999-10-04T08:41:59Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-09-27T08:41:59Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-09-27T08:41:59Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}

$done({body: JSON.stringify(obj)});

/*
^https:\/\/api\.revenuecat\.com\/v1\/subscribers\/(146276950|identify)
*/
