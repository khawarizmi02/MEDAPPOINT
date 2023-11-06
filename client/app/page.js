import { DialogContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillSchedule } from 'react-icons/ai';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<nav className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between p-4">
				<img src="/logo.png" alt="logo" className="w-30 h-10 ml-20" />	
				<div className="flex space-x-12 mr-20 items-center">
				<Link href="/profile">Profile</Link>
				<Link href="/post-report">Post Report</Link>
				<Link href="/history">History</Link>
				<button className='rounded-lg bg-[#df0000] p-1 px-3 text-white'><Link href="/booking">My Booking</Link></button>
				</div>
			</nav>
			<div>
				{/* <img src="/hero.png" alt="hero" className="w-screen h-screen z-[-99]" /> */}
				<div className="bg-[url('../public/hero.png')] w-screen h-screen bg-cover">
					<div className='w-[588px] ml-20 pt-[150px] pl-6'>
						<h1 className='font-bold text-6xl text-[#df0000]'>MedAppoint,</h1>
						<h1 className='font-bold text-6xl text-[#159686] mb-6'>Make Appointment</h1>
						<h3 className='text-justify font-normal mb-8'>Welcome to MedAppoint, where seamless healthcare begins. Revolutionize your patient experience with our intuitive queue management system. Say goodbye to long waiting times and hello to efficiency. Streamline appointments, provide real-time updates, and prioritize patient satisfaction. Experience healthcare the way it should be – fast, easy, and hassle-free.</h3>
						<button className='rounded-lg bg-[#df0000] p-2 px-4 text-black font-bold'><Link href="/booking" className='flex items-center'>Make Appointment <AiFillSchedule className='ml-2' size={20}/></Link></button>
					</div>
					
				</div>
			</div>




			{/* <div className="font-bold text-[50px] py-3 text-center w-full bg-green-100">
				Medappoint
			</div>

			<div className="bg-yellow-50 py-3 my-3 px-3">
				<Link href="/booking"> Booking Page </Link>
			</div>
			<div className="bg-blue-50 py-3 my-3 px-3">
				<Link href="/queue"> Queue Page </Link>
			</div>
			<div className="bg-red-50 py-3 my-3 px-3">
				<Link href="/profile"> Profile Page </Link>
			</div>
			<div className="bg-red-50 py-3 my-3 px-3">
				<Link href="/history"> History Page </Link>
			</div>
			<div className="bg-red-50 py-3 my-3 px-3">
				<Link href="/post-report"> Post Report Page </Link>
			</div> */}
		</div>
	);
}
