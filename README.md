# Discord Time Tag Bot

Generating Discord Time Tags made easy!

You may invite the bot via this [link](https://discord.com/api/oauth2/authorize?client_id=890243200579694672&permissions=274878188544&scope=bot%20applications.commands)

Join my server - <https://discord.gg/MPtE9zsBs5>

Bot Permissions -

![Bot permissions for Time Tag Bot](https://i.imgur.com/V3UVDuT.png)

## Hosting

You have 2 ways to host it.
For more info click [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) & [here](https://discordjs.guide/creating-your-bot/)

### Common Steps

- Clone this repo.
- Create a copy of the file `.env.sample` and rename it to `.env`.
- Put relevant data in the `.env` file -

```env
DISCORD_CLIENT_ID = insert client ID
DISCORD_TOKEN = insert bot token
DISCORD_GUILD_ID = insert test server ID
```

### Non-Docker method

- Install dependencies by using `npm install`.
- Use `npm run dev:start` to run the bot code.

### Dodker method

Use the following command:

```bash
docker compose up -d
```

## How to update self-hosted version?/How to reset the Bot code?

Use the following command:

```bash
git pull
```

## License

[MIT](./LICENSE)

Feel free to make your own improved version of the bot!
