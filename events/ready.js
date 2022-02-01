const client = require(`../index.js`).client

client.on('ready', () => {
    const arrayOfStatus = [
        `for God's Kingdom`,
        `for His Majesty`,
        `for His Eternity`,
        `over our wretched lives`
    ];
    
    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0; 
        const status =  arrayOfStatus[index];
        client.user.setActivity(status, { type: "WATCHING" });
        index++;
    }, 5000)
    console.log('The bot is ready!')
});