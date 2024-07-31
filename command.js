const { REST, Routes } = require('discord.js');
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

  const rest = new REST({ version: '10' }).setToken('MTI2ODAxMTY5MDQxNTM1ODA3NA.Gsssji.VpyqWbazAIv6ADJyFSIKJKdOZa0SEpbGCMrr-Q');

  (async () => {
  try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1268011690415358074'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();