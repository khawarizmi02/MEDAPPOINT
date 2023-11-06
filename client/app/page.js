import Link from 'next/link';
import React from 'react';
// import { useSession } from 'next-auth/react';

export default function Home() {

	// const { data: session, status } = useSession();
	// const loading = status === 'loading';

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="font-bold text-[50px] py-3 text-center w-full bg-green-100">
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
			</div>

			{/* <div className="bg-red-50 py-3 my-3 px-3">
				{loading ? null :
					session
						? <div>Signed in as {session.user.email}</div>
						: <div>Not signed in</div>}
			</div> */}
		</div>
	);
}
