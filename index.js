import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';

async function startApp() {
  // Start services
  await UserService.start();
  await EmailService.start();

  try {
    // Simulate user creation
    await UserService.call('user.createUser', {
      name: 'angela',
      email: 'angela@gmail.com',
    });
    const user = await UserService.call('user.createUser', {
      name: 'John Doe',
      email: 'john@gmail.com',
    });
    console.log('Created User:', user);
    const users = await UserService.call('user.getUsers');
    console.log('All Users:', users);

    // Simulate sending email
    await EmailService.call('email.sendEmail', {
      to: user.email,
      subject: `Welcome ${user.name}`,
      content: 'Welcome to our platform!',
    });

    // Simulate auth
  } catch (error) {
    console.error('Error occurred!', error);
  } finally {
    // Stop the services
    await UserService.stop();
    await EmailService.stop();
  }
}

startApp();
