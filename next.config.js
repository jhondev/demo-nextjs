// module.exports = {
//   webpack: {},
// };

// const { PHASE_PRODUCTION_BUILD } = require("next/constants");
// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_PRODUCTION_BUILD) {
//     // change default config for prod build
//   }
// };

const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const withNextEnv = nextEnv();
module.exports = withNextEnv();
