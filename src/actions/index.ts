import { ActionError, defineAction } from 'astro:actions'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const server = {
	send: defineAction({
		accept: 'form',
		handler: async (form) => {
			const nombre = form.get('nombre')
			const email = form.get('email')
			const mensaje = form.get('mensaje')

			const { data, error } = await resend.emails.send({
				from: 'Catalina Terapeuta <onboarding@resend.dev>',
				to: ['catalina.herrera.to@gmail.com'],
				subject: `Tienes un nuevo mensaje de ${nombre}`,
				html: `<p>De: ${nombre} (${email})</p>
        <p><strong>${mensaje}</p></strong>`,
			})

			if (error) {
				throw new ActionError({
					code: 'BAD_REQUEST',
					message: error.message,
				})
			}

			return data
		},
	}),
}
