var curl = require('curlconverter');

//here in the link
//
//
//https://api.thetvdb.com/series/81797/filter?keys=status%2Cgenre%2CairsDayOfWeek%2CimdbId%2CairsTime%2Crating%2CsiteRatingCount%2CfirstAired%2Cnetwork%2Cruntime%2Coverview%2ClastUpdated%2Cadded%2CaddedBy%2Cid%2CseriesName%2Caliases%2CnetworkId%2Cbanner%2CseriesId%2Czap2itId%2CsiteRating
//
//
//only one or more of the filters can be used
//
//eg
//
//
//https://api.thetvdb.com/series/81797/filter?keys=status%2Cgenre
//
//

var curlinput = "curl -X GET --header 'Accept: application/json' --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTk5OTg4MzgsImlkIjoiUm9vdHdvcmxkIiwib3JpZ19pYXQiOjE1MTk5MTI0MzgsInVzZXJpZCI6NDk5NzU2LCJ1c2VybmFtZSI6InBoYW5pcml0aHZpaiJ9.BGuk8oZ-fQEIIvKDNU7-hZp52cBPcpYYQ0P3WyYVNPGgx0DPsP7kfyQRgscYlccklcZPu6ONci0uh5Mkbb_kMlHzLymEWEnwQmKwtHbWdQ0rn_ZkZG9qePI8O0A22q-rtYlbRBAGOToHwi1C0lWXyBGRJo7Ti2HaagauOKc7kJYKH9aEkt_RsDrxNuv7qgQ_9ME0vA03VdMQFGQVTE2bu6KORUZl41UXf0TH1J13uC1peh_g_7jcPbs-CZ48LWTO1_flVaDEtkc1WZtffpavckAD46ppWEzfzGc5A7Jg28HvIgy2kcjPpyxD4J9jqLLALpMqxDRV4GFfGfTXf-wyKg' 'https://api.thetvdb.com/series/81797/filter?keys=status%2Cgenre%2CairsDayOfWeek%2CimdbId%2CairsTime%2Crating%2CsiteRatingCount%2CfirstAired%2Cnetwork%2Cruntime%2Coverview%2ClastUpdated%2Cadded%2CaddedBy%2Cid%2CseriesName%2Caliases%2CnetworkId%2Cbanner%2CseriesId%2Czap2itId%2CsiteRating";

var e = curl.toNode(curlinput);
console.log(e);