import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

export default NextAuth({
	providers: [
		Providers.Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: "Username", type: "email" },
				idNum: { label: "Password", type: "password" }
			},
			authorize: async (credentials) => {

				let user = null;

				try {
					const response = await axios.post('http://localhost:8000/api/login', {
						email: credentials.email,
						idNum: credentials.idNum,
					});

					user = response.data.user;
				} catch (err) {
					console.log("Error in authorize function ", err)
				}

				if (user) {
					return Promise.resolve(user)
				} else {
					return Promise.resolve(null)
				}
			}
		})
	],
	session: {
		jwt: true,
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60,
	},
	callbacks: {
		async jwt(token, user) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session(session, token) {
			session.userId = token.id;
			return session;
		},
	},
})