import Image from 'next/image'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

export default function About() {
    return (
        <div className="sm:mr-24 sm:ml-12 sm:min-w-[1100px] flex flex-col sm:flex-row sm:text-left text-center">
            <div className="w-full sm:w-3/4 flex flex-col justify-center space-y-4 sm:py-20 sm:px-32 pb-20 px-8 sm:min-w-[500px] min-w-[100px]">
                <h1 className={`sm:text-6xl text-4xl text-apex-green`}>Meet Your Virtual Bookkeeper</h1>
                <div className="flex flex-col sm:flex-row">
                    <h2 className={`sm:text-4xl text-2xl text-gray-800`}>Desmond Ortega</h2>
                    <div className="sm:hidden sm:w-1/4 sm:min-w-[300px] min-w-[100px] m-12">
                        <Image src="/About-Me.webp" alt="Home page image" width={723} height={1424} className='shadow-2xl rounded-xl'/>
                    </div>
                </div>   
                <p className={`sm:text-lg text-sm text-gray-600`}>Based in Los Angeles, CA and currently serving as the Finance Manager for a fast-growing wound care company. In my role, I help manage all financial and accounting related tasks, including bookkeeping for the company. I received my B.S. in Business Administration in 2018, and I am expected to receive my MBA in Accounting in August of 2023. Now I&apos;m ready to use my skills to aid small business owners, like you, have peace of mind when it comes to your business&apos;s finances.</p>
                <p className={`pt-12 sm:text-lg text-gray-600`}><u>Why outsource your bookkeeping services?</u></p>
                <ul className='pl-6 list-disc text-left'>
                    <li className={`sm:text-lg text-sm text-gray-600 items-center`}>
                        Your books are always current and accurate
                    </li>
                    <li className={`sm:text-lg text-sm text-gray-600 items-center`}>
                        No time or money spent training employees on bookkeeping
                    </li>
                    <li className={`sm:text-lg text-sm text-gray-600 items-center`}>
                        Your books are always current and accurate
                    </li>
                    <li className={`sm:text-lg text-sm text-gray-600 items-center`}>
                        More time available for you to <strong className='text-apex-green'><u>focus on your business</u></strong>
                    </li>
                </ul>
                <div className='pt-8 flex justify-center items-center'>
                    <Link href="/service" className={`text-center sm:text-lg text-sm text-gray-100 bg-apex-green py-3 px-5 rounded`}>View Services</Link>
                </div>
                
            </div>
            <div className="sm:block hidden sm:w-1/4 sm:min-w-[300px] min-w-[100px] m-12">
                <Image src="/About-Me.webp" alt="Home page image" width={723} height={1424} className='shadow-2xl rounded-xl'/>
            </div>
            
        </div>
    )
}