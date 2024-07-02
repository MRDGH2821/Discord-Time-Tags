// if (process.env.DISCORD_CLIENT_ID === undefined) {
//   throw new Error('Client ID not defined');
// }

// if (process.env.DISCORD_GUILD_ID === undefined) {
//   throw new Error('Guild ID not defined');
// }

if (process.env.DISCORD_TOKEN === undefined) {
  throw new Error('Token not defined');
}

const EnvConfig = {
  // clientId: process.env.DISCORD_CLIENT_ID,
  // guildId: process.env.DISCORD_GUILD_ID,
  token: process.env.DISCORD_TOKEN,
};

export default EnvConfig;
