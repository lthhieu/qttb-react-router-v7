import { NavLink } from "react-router"

export default function Header() {
    return (
        <header>
            <div id="sidebar" className="text-black px-[10%] py-6 flex justify-center border-b-[#ccc] border-b-2">
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
    { url: '/tin-tuc', title: 'Tin tức' },
    { url: '/chuc-nang-nhiem-vu', title: 'Chức năng - Nhiệm vụ' },
    { url: '/so-do-to-chuc', title: 'Sơ đồ tổ chức' },
]