
Feature('Users endpoint')

Scenario('check the first character',({ I }) => {
    var body = {
        "email": "cobatestanu@yopmail.com"
      };
      var reqHead = {
        'accept': '*/*' ,
        'platform': 'web' ,
        'prefix': 'portal' ,
        'Content-Type': 'application/json' 
      };
      I.haveRequestHeaders(reqHead);
      I.sendPatchRequest('https://gatekeeper-stg.berasumkm.id/forgot-password', JSON.stringify(body));  
      I.seeResponseContainsJson()
  });

    // I.sendPostRequest('https://gatekeeper-stg.berasumkm.id/register', {
    //     "name": "testing auto",
    //     "email": "testingautonew@yopmail.com",
    //     "phone_number": "087888888888",
    //     "referal": "string",
    //     "auth_provider": "string",
    //     "isReferalBuyer": true
    //   });
