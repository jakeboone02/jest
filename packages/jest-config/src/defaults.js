/**
 * Copyright (c) 2014, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

'use strict';

import type {DefaultConfig} from 'types/Config';

const constants = require('./constants');
const os = require('os');
const utils = require('jest-util');

module.exports = ({
  automock: true,
  bail: false,
  browser: false,
  cacheDirectory: os.tmpdir(),
  colors: false,
  coverageCollector: require.resolve('./IstanbulCollector'),
  coveragePathIgnorePatterns: [
    utils.replacePathSepForRegex(constants.NODE_MODULES),
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  globals: {},
  haste: {
    providesModuleNodeModules: [],
  },
  mocksPattern: '__mocks__',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {},
  modulePathIgnorePatterns: [],
  noHighlight: false,
  noStackTrace: false,
  notify: false,
  preset: null,
  testEnvData: {},
  testEnvironment: 'jest-environment-jsdom',
  testPathDirs: ['<rootDir>'],
  testPathIgnorePatterns: [
    utils.replacePathSepForRegex(constants.NODE_MODULES),
  ],
  testRegex: '__tests__/.*\.js$',
  testURL: 'about:blank',
  useStderr: false,
  verbose: false,
}: DefaultConfig);
