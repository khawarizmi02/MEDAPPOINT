'use client'
import axios from 'axios';

export async function getHealthCenterData() {
	try {
		const response = await axios.get('http://localhost:5000/healthcenter');
		const healthCenters = response.data.healthCenter.map(center => {
			const parts = center.address.split(',');
			const state = parts.length > 1 ? parts[1].trim() : parts[0].trim();
			return {
				_id: center._id,
				name: center.name,
				state,
			};
		});
		return healthCenters;
	} catch (error) {
		console.error('Error fetching health center data', error);
		return null;
	}
}