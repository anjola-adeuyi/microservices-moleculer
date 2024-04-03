import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

// Email service
broker.createService({
  name: 'email',
  actions: {
    // Define action method
    async sendEmail(ctx) {
      const { to, subject, content } = ctx.params;
      console.log(`Sending email to ${to}: ${subject} - ${content}`);
      return true;
    },
  },
});

export default broker;
