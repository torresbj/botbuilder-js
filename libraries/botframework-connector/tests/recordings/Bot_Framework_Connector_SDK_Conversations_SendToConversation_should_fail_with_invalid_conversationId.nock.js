// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['USER_ID'] = 'UK8CH2281:TKGSUQHQE';
  process.env['BOT_ID'] = 'BKGSYSTFG:TKGSUQHQE';
  process.env['HOST_URL'] = 'https://slack.botframework.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0389857f-2464-451b-ac83-5f54d565b1a7';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations', {"bot":{"id":"BKGSYSTFG:TKGSUQHQE"},"members":[{"id":"UK8CH2281:TKGSUQHQE"}]})
  .reply(200, {"id":"BKGSYSTFG:TKGSUQHQE:DKE8NUG92"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '45',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|b1946510989e6040b90824b01c344b91.3d8f46a3_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:36 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92M/activities', {"type":"message","from":{"id":"BKGSYSTFG:TKGSUQHQE"},"recipient":{"id":"UK8CH2281:TKGSUQHQE"},"text":"test activity"})
  .reply(400, {"error":{"code":"BadArgument","message":"Slack API error","innerHttpError":{"statusCode":200,"body":{"ok":false,"error":"channel_not_found"}}}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '230',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|17789f3bd774ee47ba57490beb0e3530.1e8cf22d_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:37 GMT',
  'Connection',
  'close' ]);
 return result; }]];