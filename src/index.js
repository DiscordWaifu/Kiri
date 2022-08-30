require('dotenv').config();

const path = require('path');

const { GatewayIntentBits } = require('discord.js');
const KiriClient = require('./library/KiriClient');

const client = new KiriClient({ intents: [GatewayIntentBits.Guilds] });

client.keys = {
	private: path.join(process.cwd(), 'keys', 'jwt.key'),
	public: path.join(process.cwd(), 'keys', 'jwt.pub')
};

client.login(process.env.DISCORD_TOKEN);
