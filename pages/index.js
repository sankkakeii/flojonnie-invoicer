import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/config/firebase';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useRequireAuth } from '../config/useRequireAuth';
import LoadingSpinner from '@/components/Loader';

export default function Home() {
    const loading = useRequireAuth();
    const router = useRouter();

    if (loading) {
        return <LoadingSpinner/>;
    }

    return (
        <>
            <Navbar/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
                <h1 className="text-4xl font-bold mb-8 text-center">FLOJONNIE INVOICE MANAGEMENT SYSTEM</h1>
                <div className="grid grid-cols-2 gap-4">
                    <Link href="/invoice">
                        <button className="w-64 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                            Invoice
                        </button>
                    </Link>
                    <Link href="/proforma">
                        <button className="w-64 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none">
                            Proforma Invoice
                        </button>
                    </Link>
                    <Link href="/letterhead">
                        <button className="w-64 px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none">
                            Letterhead
                        </button>
                    </Link>
                    <Link href="/delivery">
                        <button className="w-64 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none">
                            Delivery
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

