import { NavLink } from "react-router"
import logo from '/logo.png'

export default function Header() {
    return (
        <header>
            <div id="sidebar" className="text-black px-[10%] py-6 flex justify-between border-b-[#ccc] border-b-2 items-center gap-2">
                <div className="flex items-center gap-4 ml-10">
                    <img className="w-[64px]" src={logo} />
                    <div className="flex flex-col text-gray-700 text-center">
                        <span className="font-bold">Trường ĐHSPKT Vĩnh Long</span>
                        <span className="font-bold">Phòng Quản trị - Thiết bị</span>
                    </div>
                </div>
                <nav>
                    <ul className="flex flex-row gap-2">
                        {nav.map((item, index: number) => {
                            return (<li key={index}>
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive ? "active" : isPending ? "pending" : ""
                                    }
                                    to={item.url}>{item.title}</NavLink>
                            </li>)
                        })}
                    </ul>
                </nav>
            </div>
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