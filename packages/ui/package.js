Package.describe({
  summary: "Meteor UI Components framework"
});

Package.on_use(function (api) {
  api.export(['AttributeHandler', 'UI', 'FadeyIf', 'Checkbox']);
  api.use('deps');
  api.use('random');
  api.use('ejson');
  api.use('underscore'); // very slight
  api.use('ordered-dict');
  api.use('minimongo');  // for idStringify

  api.add_files(['base.js',
                 'attrs.js',
                 'render.js',
                 'fields.js',
                 'template.js',
                 'components.js',
                 'each.js']);
});

Package.on_test(function (api) {
  api.use('tinytest');
  api.use('ui');
  api.use(['test-helpers', 'underscore'], 'client');

  api.add_files([
    'base_tests.js',
    'render_tests.js'
  ], 'client');
});
