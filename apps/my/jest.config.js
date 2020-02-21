module.exports = {
  name: 'my',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/my',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
