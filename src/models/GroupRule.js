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

var Resource = require('../resource');
const GroupRuleAction = require('./GroupRuleAction');
const GroupRuleConditions = require('./GroupRuleConditions');

/**
 * @class GroupRule
 * @extends Resource
 * @property { GroupRuleAction } actions
 * @property { GroupRuleConditions } conditions
 * @property { dateTime } created
 * @property { string } id
 * @property { dateTime } lastUpdated
 * @property { string } name
 * @property { GroupRuleStatus } status
 * @property { string } type
 */
class GroupRule extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.actions) {
      this.actions = new GroupRuleAction(resourceJson.actions);
    }
    if (resourceJson && resourceJson.conditions) {
      this.conditions = new GroupRuleConditions(resourceJson.conditions);
    }
  }

  /**
   * @returns {Promise<GroupRule>}
   */
  update() {
    return this.httpClient.updateGroupRule(this.id, this);
  }
  /**
   * @param {object} queryParameters
   */
  delete(queryParameters) {
    return this.httpClient.deleteGroupRule(this.id, queryParameters);
  }

  activate() {
    return this.httpClient.activateGroupRule(this.id);
  }

  deactivate() {
    return this.httpClient.deactivateGroupRule(this.id);
  }
}

module.exports = GroupRule;
