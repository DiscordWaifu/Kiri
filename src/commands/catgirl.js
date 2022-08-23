const fs = require('fs');
const path = require('path');
const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('catgirl')
		.setDescription('Posts a picture of a random catgirl.'),
	async execute(interaction) {
		if (interaction.client.disabled) return null;
		await interaction.deferReply();
		const res = await findCatGirlResponse();
		return interaction.editReply(res);
	}
};

async function findCatGirlResponse() {
	let image = '';
	try {
		const location = path.join(process.cwd(), 'images', 'neko');
		const files = fs.readdirSync(location);
		const rand = Math.floor(Math.random() * files.length) + 1;
		image = fs.readFileSync(path.join(location, files[rand]));
	} catch (error) {
		console.log(error);
	}

	if (image.length === 0) {
		return 'Oops.';
	} else {
		const attachment = new AttachmentBuilder(image, { name: 'catgirl.png', description: 'I\'ts a catgirl. What else did you expect to be here?' });
		return { attachments: [{ name: 'catgirl', attachment }] };
	}
}

