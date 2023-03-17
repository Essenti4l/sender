# 📨 Sender

Essential-js/sender is a TypeScript package for easily sending emails.

## Installation

To install Essential-js/sender, run the following command:

npm install @essential-js/sender

## Usage

To use Essential-js/sender in your project, first import the `sender` object, login with your credentials using the `login` method and then use the `send` method to send an email. Here's an example:

```typescript
import { sender } from '@essential-js/sender/core';

// More secure authentication methods can be used, this is just an example.
const credentials = { user: 'your_email', pass: 'your_email_password' };
const opts = { service: 'gmail', host: 'your_email_host', port: 123 }
sender.login(credentials, opts);

const response = await sender.send({
  from: 'your_email',
	to: 'example@gmail.com'
	subject: 'your_email_title',
	template: `
		<html>
		<head>
			<style>
				/* Email Styles */
			</style>
		</head>
		<body>
			<h1>Hola {{user}}!</h1>
			    <p>This is a email test.</p>
			    <p>Tu edad es {{age}}.</p>
		</body>
	</html>
	`,
	data: {
        user: 'TEST 123_EXE',
		age: 38,
	},
});
```
