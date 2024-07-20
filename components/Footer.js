import Link from "next/link"
import Social from "./Social"
import Menu from "./Menu"



export default function Footer() {
    const social = Social
    const menu = Menu

    return (
        <div
            className='relative h-[600px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[600px] w-full'>
                <footer className='h-full bg-[#AAB6B6] text-[#022D42] items-end justify-between'>
                    <div className="flex md:justify-between p-10 flex-col md:flex-row">
                        <div className="w-full flex justify-between md:text-xl text-lg border-b-2 pb-5 md:border-b-0 border-opacity-30 border-[#022D42]">
                            <div className="w-full flex flex-col gap-y-5">
                                {menu.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={el.href}>{el.title}</Link>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="w-full flex flex-col gap-y-5">
                                {social.map((el, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={el.link}>{el.text}</Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-full md:px-8 space-y-5 py-10 md:py-0">
                            <div className="leading-6">
                                <p className="md:text-3xl text-xl">Lets talk about your project needs.</p>
                                <p className="font-light">No spam – Unsubscribe anytime.</p>
                            </div>
                            <form className="space-y-4 w-full">
                                <div className="flex gap-x-4">
                                    <div className="block w-full">
                                        <label htmlFor="username" className="block leading-6 ">User Name</label>
                                        <div className="block ring-1 ring-inset ring-[#022D42] focus-within:ring-2 focus-within:ring-inset">
                                            <input type="text" name="username" id="username" autoComplete="username" className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-2 placeholder:opacity-55 placeholder:text-[#022D42] focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                        </div>
                                    </div>
                                    <div className="block w-full">
                                        <label htmlFor="email" className="block leading-6 ">Email</label>
                                        <div className="flex shadow-sm ring-1 ring-inset ring-[#022D42] focus-within:ring-2 focus-within:ring-inset">
                                            <input type="email" name="email" id="email" autoComplete="mail@mail.com" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 placeholder:opacity-55 placeholder:text-[#022D42] focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block leading-6 ">Message</label>
                                    <div className="mt-2">
                                        <div className="flex shadow-sm ring-1 ring-inset ring-[#022D42] focus-within:ring-2 focus-within:ring-inset">
                                            <textarea type="email" name="email" id="email" autoComplete="mail@mail.com" className="block flex-1 border-0 bg-transparent py-1.5 pl-2 placeholder:opacity-55 placeholder:text-[#022D42] focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="px-8 py-3 bg-[#022D42] text-[#FCFDFD]">Send Mail</button>
                            </form>
                        </div>
                    </div>

                    <div className="fixed -bottom-10 right-0">
                        <p className="font-serif uppercase text-[#022D42] opacity-15 text-9xl font-bold">
                            Meja Kerja
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}