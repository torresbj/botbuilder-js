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
  '|c6aabd3948295545ae037d93f66156e3.3d8f46ae_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:43 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92/activities', {"type":"message","from":{"id":"BKGSYSTFG:TKGSUQHQE"},"recipient":{"id":"UK8CH2281:TKGSUQHQE"},"text":"test activity"})
  .reply(200, {"id":"1560554384.003900"}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '33',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|919fb020d70bd44bbac406265981ada4.1e8cf235_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:44 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations/invalid-id/activities/1560554384.003900', {"type":"message","from":{"id":"BKGSYSTFG:TKGSUQHQE"},"recipient":{"id":"UK8CH2281:TKGSUQHQE"},"text":"test activity"})
  .reply(400, {"error":{"code":"ServiceError","message":"Invalid ConversationId: invalid-id"}}, [ 'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '105',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-request-id',
  '|68fe201a0085074980e08ba1a33739e1.3d8f46af_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:44 GMT',
  'Connection',
  'close' ]);
 return result; }]];