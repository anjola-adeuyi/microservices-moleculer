import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

// Auth service
broker.createService({
  name: 'auth',
  actions: {
    // Define action method
    async authUser(ctx) {
      const { username, password } = ctx.params;
      if (username === 'admin' && password === 'password') {
        return {
          success: true,
          message: 'User authenticated',
        };
      } else {
        return {
          success: false,
          message: 'Invalid credentials',
        };
      }
    },
  },
});

export default broker;
