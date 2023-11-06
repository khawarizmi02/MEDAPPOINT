import axios from 'axios';

export async function getQueList() {
	try {
		const response = await axios.get('http://localhost:5000/que/65406bc368cc89992fdb4dbf');
		return response.data.queNum;
	}
	catch (error) {
		console.error('Error fetching queue list', error);
		return null;
	}
}