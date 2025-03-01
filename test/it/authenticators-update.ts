import * as okta from '@okta/okta-sdk-nodejs';
import { AllowedForEnum } from '@okta/okta-sdk-nodejs';
import { expect } from 'chai';
import utils = require('../utils');
let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/authenticators-update`;
}

const client = new okta.Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Authenticators API tests', () => {
  // do not run these tests in a non-OIE context
  beforeEach(async function () {
    const isOIEOrg = await utils.verifyOrgIsOIE(client);
    if (!isOIEOrg) {
      this.skip();
    }
  });

  it('should update Authenticator', async () => {
    const { value: authenticator} = await client.listAuthenticators().next();

    let updatedAuthenticator = await client.updateAuthenticator(authenticator.id, {
      name: authenticator.name,
      settings: {
        allowedFor: AllowedForEnum.ANY
      }
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal(AllowedForEnum.ANY);
    updatedAuthenticator = await client.updateAuthenticator(authenticator.id, {
      name: authenticator.name,
      settings: {
        allowedFor: AllowedForEnum.RECOVERY
      }
    });
    expect(updatedAuthenticator.settings.allowedFor).to.equal(AllowedForEnum.RECOVERY);
  });
});
