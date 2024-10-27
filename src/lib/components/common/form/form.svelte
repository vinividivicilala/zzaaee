<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { PUBLIC_PUBLIC_KEY, PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID } from '$env/static/public';
	import FormField from './form-field.svelte';
	import FormButton from './form-button.svelte';

	let name: string = '';
	let email: string = '';
	let message: string = '';

	const sendEmail = async (event: Event): Promise<void> => {
		try {
			const response = await emailjs.sendForm(
				PUBLIC_SERVICE_ID,
				PUBLIC_TEMPLATE_ID,
				event.target as HTMLFormElement,
				{
					publicKey: PUBLIC_PUBLIC_KEY
				}
			);
			console.log('Message sent!', response);
			resetForm();
		} catch (error) {
			if (error instanceof Error) {
				console.log('Message not sent!', error.message);
			} else {
				console.log('Message not sent!', error);
			}
		}
	};

	const resetForm = () => {
		name = '';
		email = '';
		message = '';
	};
</script>

<form
	class="flex w-full flex-col items-center space-y-4 text-sm"
	on:submit|preventDefault={sendEmail}
>
	<FormField label="Your name" id="name" type="text" placeholder="Enter name" bind:value={name} />

	<FormField
		label="Your email"
		id="email"
		type="email"
		placeholder="Enter email"
		bind:value={email}
	/>

	<FormField
		label="Your message"
		id="message"
		type="textarea"
		placeholder="Enter message"
		bind:value={message}
	/>

	<div class="w-fit">
		<FormButton text={'Submit'} />
	</div>
</form>
