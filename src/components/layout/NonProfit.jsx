import React from 'react'
import { AWS_EVENT_CONFIG } from '@/lib/eventConstants'
import Image from 'next/image'

export default function NonProfit() {
    return (
        <section className="w-full p-8 md:p-24 relative overflow-hidden bg-white">
            <div className="container px-4 md:px-6 m-auto h-full relative">
                <div className='flex gap-4 items-center py-10 px-20'>
                    <div className='min-w-28 w-40 md:w-28'>
                        <Image
                            src='./CPCA.png'
                            width={100}
                            height={100}
                            alt='Canadian Public Cloud Association section icon'
                        />
                    </div>
                    <p>{AWS_EVENT_CONFIG.cpca.about}</p>
                </div>
            </div>
        </section>
    )
}
