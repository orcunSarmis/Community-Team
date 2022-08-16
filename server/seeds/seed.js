const db = require('../config/connection');
const { User } = require('../models');
const Community = require('../models/Community');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    await Community.create(communitySeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
