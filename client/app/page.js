import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold text-[50px] py-3 text-center w-full bg-green-100">
        Medappoint
      </div>

      <div className="bg-yellow-50 py-3 my-3 px-3">
        <Link href="/book"> Booking Page </Link>
      </div>
      <div className="bg-blue-50 py-3 my-3 px-3">
        <Link href="/queue"> Queue Page </Link>
      </div>
      <div className="bg-red-50 py-3 my-3 px-3">
        <Link href="/profile"> Profile Page </Link>
      </div>
    </div>
  );
}
