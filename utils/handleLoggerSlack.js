const {IncomingWebhook} = require('@slack/webhook');

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK);

const loggerstream = {
    write: message => {
      webHook.send({
        text: message.slice(0, -1)
      });
      //console.log('Captura del Log:', message.slice(0, -1));
    },
  };

module.exports = loggerstream;