import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 1000) + 1;
}

const users = [];

// User service
broker.createService({
  name: 'user',
  actions: {
    // Define action method
    async createUser(ctx) {
      const { name, email } = ctx.params;
      const id = generateId();
      const user = { id, name, email };
      users.push(user);
      return user;
    },
    async getUsers() {
      return users;
    },
  },
});

export default broker;
