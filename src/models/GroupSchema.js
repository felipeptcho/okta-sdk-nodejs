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
const GroupSchemaDefinitions = require('./GroupSchemaDefinitions');
const UserSchemaProperties = require('./UserSchemaProperties');

/**
 * @class GroupSchema
 * @extends Resource
 * @property { string } $schema
 * @property { hash } _links
 * @property { string } created
 * @property { GroupSchemaDefinitions } definitions
 * @property { string } description
 * @property { string } id
 * @property { string } lastUpdated
 * @property { string } name
 * @property { UserSchemaProperties } properties
 * @property { string } title
 * @property { string } type
 */
class GroupSchema extends Resource {
  constructor(resourceJson, client) {
    super(resourceJson, client);
    if (resourceJson && resourceJson.definitions) {
      this.definitions = new GroupSchemaDefinitions(resourceJson.definitions);
    }
    if (resourceJson && resourceJson.properties) {
      this.properties = new UserSchemaProperties(resourceJson.properties);
    }
  }

}

module.exports = GroupSchema;
