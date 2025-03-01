/* listFeaturesForApplication(appId: string): Collection<ApplicationFeature>;
getFeatureForApplication(appId: string, name: string): Promise<ApplicationFeature>;
updateFeatureForApplication(appId: string, name: string, capabilitiesObject: CapabilitiesObjectOptions): Promise<ApplicationFeature>;
uploadApplicationLogo(appId: string, file: ReadStream): Promise<Response>;
 */

import { expect } from 'chai';

import { ApplicationFeature, Client, EnabledStatus } from '@okta/okta-sdk-nodejs';
import utils = require('../utils');

let orgUrl = process.env.OKTA_CLIENT_ORGURL;

if (process.env.OKTA_USE_MOCK) {
  orgUrl = `${orgUrl}/application-features`;
}

const client = new Client({
  orgUrl: orgUrl,
  token: process.env.OKTA_CLIENT_TOKEN,
});

describe('Application API: applicaton features', () => {
  let application;
  beforeEach(async () => {
    application = await client.createApplication(utils.getOrg2OrgApplicationOptions());
  });

  afterEach(async () => {
    if (application) {
      await application.deactivate();
      await application.delete();
    }
  });

  // application features tests require provisioning connection to be enabled
  xit('lists application features', async () => {
    const features: ApplicationFeature[] = [];
    for await (const feature of client.listFeaturesForApplication(application.id)) {
      features.push(feature);
    }
    expect(features.length).to.be.greaterThanOrEqual(1);
  });

  xit('gets application feature', async () => {
    const feature = await client.getFeatureForApplication(application.id, 'USER_PROVISIONING');
    expect(feature.name).to.equal('USER_PROVISIONING');
  });

  xit('updates application feature', async () => {
    let feature = await client.updateFeatureForApplication(application.id, 'USER_PROVISIONING', {
      update: {
        lifecycleDeactivate: {
          status: EnabledStatus.DISABLED
        }
      }
    });
    expect(feature.capabilities.update.lifecycleDeactivate.status).to.equal(EnabledStatus.DISABLED);
    feature = await client.updateFeatureForApplication(application.id, 'USER_PROVISIONING', {
      update: {
        lifecycleDeactivate: {
          status: EnabledStatus.ENABLED
        }
      }
    });
    expect(feature.capabilities.update.lifecycleDeactivate.status).to.equal(EnabledStatus.ENABLED);
  });

  it('provides method for uploading application logo', async () => {
    const file = utils.getMockImage('logo.png');
    const response = await client.uploadApplicationLogo(application.id, file);
    expect(response.status).to.equal(201);
  });
});
