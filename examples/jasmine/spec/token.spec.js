let axios = require('axios')
var BuildkiteReporter = require('buildkite-test-collector/jasmine/reporter');
var buildkiteReporter = new BuildkiteReporter(undefined, { token: "abc" });
jasmine.getEnv().addReporter(buildkiteReporter);

it('1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
