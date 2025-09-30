import { NavLink } from "react-router"
import logo from '/logo.png'
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <div id="sidebar" className="text-black px-[10%] py-6 flex justify-between border-b-[#ccc] border-b-2 items-center gap-30">
                <div className="flex items-center gap-4 w-[20%]">
                    <img className="w-[48px] md:w-[64px]" src={logo} />
                    <div className="hidden lg:flex flex-col text-gray-700 text-center max-w-[230px]">
                        <span className="font-bold truncate">Trường ĐHSPKT Vĩnh Long</span>
                        <span className="font-bold truncate">Phòng Quản trị - Thiết bị</span>
                    </div>
                </div>
                {/* desktop nav*/}
                <nav className="hidden lg:block w-[70%]">
                    <ul className="flex flex-row flex-wrap space-x-2 space-y-5">
                        {nav.map((item, index: number) => {
                            return (<li key={index} className="">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive ? "active" : isPending ? "pending" : ""
                                    }
                                    to={item.url}>{item.title}</NavLink>
                            </li>)
                        })}
                    </ul>
                </nav>
                {/* Mobile burger */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Drawer mobile */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t-2 border-[#ccc]">
                    <ul className="flex flex-col text-center py-4 gap-4">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "font-bold text-blue-600" : ""
                                    }
                                    to={item.url}
                                    onClick={() => setIsOpen(false)} // đóng drawer khi chọn link
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </header>
    )
}

const nav: { url: string, title: string }[] = [
    { url: '/', title: 'Giới thiệu' },
    { url: '/chuc-nang-nhiem-vu', title: 'Chức năng - Nhiệm vụ' },
    { url: '/van-ban-quy-dinh', title: 'Văn bản - Quy định' },
    { url: '/bieu-mau', title: 'Biểu mẫu' },
    { url: '/quy-trinh', title: 'Quy trình' },
    { url: '/tin-tuc', title: 'Tin tức' },
]