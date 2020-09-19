/**
 * Copyright 2020-Present Han Lee <hanlee.dev@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import HWPVersion from './version'

/**
 * @see https://github.com/hahnlee/hwp.js/blob/master/docs/hwp/5.0/FileHeader.md
 */
class HWPHeader {
  version: HWPVersion

  signature: string

  constructor(version: HWPVersion, signature: string) {
    this.version = version
    this.signature = signature
  }
}

export default HWPHeader
