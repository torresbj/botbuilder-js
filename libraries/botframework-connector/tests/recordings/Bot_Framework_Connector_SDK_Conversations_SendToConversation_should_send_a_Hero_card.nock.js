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
  '|e2928be92ebeb84fa5bb7d6922178875.1e8cf22e_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:37 GMT',
  'Connection',
  'close' ]);
 return result; },
function (nock) { 
var result = 
nock('https://slack.botframework.com:443', {"encodedQueryParams":true})
  .post('/v3/conversations/BKGSYSTFG%3ATKGSUQHQE%3ADKE8NUG92/activities', {"type":"message","from":{"id":"BKGSYSTFG:TKGSUQHQE"},"recipient":{"id":"UK8CH2281:TKGSUQHQE"},"text":"test activity","attachments":[{"contentType":"application/vnd.microsoft.card.hero","content":{"title":"A static image","subtitle":"JPEG image","images":[{"url":"https://docs.microsoft.com/en-us/bot-framework/media/designing-bots/core/dialogs-screens.png"}]}}]})
  .reply(200, {"id":"1560554378.003400"}, [ 'Cache-Control',
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
  '|75ab473c2521d54bb736800d735cde1b.3d8f46a5_3d8f46a6_',
  'Strict-Transport-Security',
  'max-age=31536000',
  'Date',
  'Fri, 14 Jun 2019 23:19:38 GMT',
  'Connection',
  'close' ]);
 return result; }]];