const { SlashCommandBuilder } = require('discord.js');

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

}
