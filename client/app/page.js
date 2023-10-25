import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-yellow-50">
        <Link href="/book"> Booking Page </Link>
      </div>
      <div className="bg-blue-50">
        <Link href="/queue"> Queue Page </Link>
      </div>
      <div className="bg-red-50">
        <Link href="/profile"> Profile Page </Link>
      </div>
    </div>
  );
}
