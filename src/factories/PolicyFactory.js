/*!
 * Copyright (c) 2017-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */


/* THIS FILE IS AUTO-GENERATED - SEE CONTRIBUTOR DOCUMENTATION */

const ModelResolutionFactory = require('../resolution-factory');
/*eslint-disable no-unused-vars*/
const factories = require('./');
const models = require('../models');

class PolicyFactory extends ModelResolutionFactory {
  getMapping() {
    return {
      'ACCESS_POLICY': models.AccessPolicy,
      'IDP_DISCOVERY': models.IdentityProviderPolicy,
      'OAUTH_AUTHORIZATION_POLICY': models.OAuthAuthorizationPolicy,
      'OKTA_SIGN_ON': models.OktaSignOnPolicy,
      'PASSWORD': models.PasswordPolicy,
      'PROFILE_ENROLLMENT': models.ProfileEnrollmentPolicy,
    };
  }

  getResolutionProperty() {
    return 'type';
  }

  getParentModel() {
    return models.Policy;
  }
}

module.exports = PolicyFactory;
