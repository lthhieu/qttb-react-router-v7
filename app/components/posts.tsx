import { Link } from "react-router"
import type { IPosts, Meta } from "~/types/backend"
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

interface IProps {
    posts: IPosts[] | undefined, meta: Meta
}
export function Posts(props: IProps) {
    const { posts, meta: IMeta } = props
    const [titleSearch, setTitleSearch] = useState<string>('')
    const [sort, setSort] = useState<string>("-createdAt");
    const [meta, setMeta] = useState<Meta>({
        current: IMeta.current,
        pageSize: IMeta.pageSize,
        pages: IMeta.pages,
        total: IMeta.total
    })
    let navigate = useNavigate();
    const click = (item: IPosts) => {
        navigate(`/tin-tuc/${item.slug}`);
    }

    const goPage = (value: number) => {
        setMeta(prev => ({ ...prev, current: value, }));
        navigate(`?page=${value}`);
    }

    const handleSearch = () => {
        if (titleSearch == '') {
            navigate(`/tin-tuc?sort=${sort}`);
        }
        else {
            navigate(`?title=${titleSearch}&sort=${sort}`)
        }
    }

    return (
        <>
            <div className="lg:flex lg:items-center space-x-2 space-y-2 justify-between mb-5">
                <div className="relative xl:w-[50%] w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={titleSearch} onChange={(e) => { setTitleSearch(e.target.value) }} type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-0 bg-gray-50 focus:border-blue-500" placeholder="Tìm kiếm theo tiêu đề bài đăng ..." />

                </div>
                <div className="xl:w-[30%] w-[100%] border flex gap-2 p-1 px-6 border-gray-300 bg-gray-50 rounded-lg text-gray-700">
                    <label>Sắp xếp theo:</label>
                    <select onChange={(e) => { setSort(e.target.value) }} value={sort} className="outline-0">
                        <option value="-createdAt">Bài đăng mới nhất</option>
                        <option value="createdAt">Bài đăng cũ nhất</option>
                    </select>
                </div>
                <div className="xl:w-[20%] lg:w-[40%] w-full">
                    <button onClick={() => { handleSearch() }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Tìm kiếm</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                {posts && posts.length > 0 ?
                    <>
                        {posts.map((item, index: number) => {
                            return (
                                <div onClick={() => click(item)} className='border cursor-pointer rounded-lg border-gray-300 p-2 mb-4' key={index}>
                                    <p className="two-lines w-full block font-bold text-gray-600 leading-[32px] text-justify mb-2">{item.title}</p>
                                    <div className="flex gap-2">
                                        <img className='w-[30%] rounded-lg ' src={`data:${item.mimetype};base64,${item.thumbnail}`} />
                                        <p className="three-lines w-full block leading-[32px] text-justify text-sm">{item.title}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </> : <span>Chưa có tin tức nào</span>}
            </div>
            <nav className="w-full flex justify-end">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <span
                            onClick={(e) => {
                                if (IMeta.current <= 1) {
                                    e.preventDefault(); // chặn nhảy link
                                    return;
                                }
                                goPage(IMeta.current - 1);
                            }}
                            className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 
                        ${meta.current <= 1
                                    ? "text-gray-300 bg-gray-100 cursor-not-allowed pointer-events-none"
                                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                                }
                        
                        `}>
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </span>
                    </li>


                    {Array.from({ length: IMeta.pages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <span
                                onClick={() => goPage(page)}
                                className={
                                    meta.current === page || (page === 1 && meta.current === 0)
                                        ? "cursor-pointer z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                        : "cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                }
                            >
                                {page}
                            </span>
                        </li>
                    ))}

                    <li>
                        <span

                            onClick={(e) => {
                                if (IMeta.current == IMeta.pages) {
                                    e.preventDefault(); // chặn nhảy link
                                    return;
                                }
                                goPage(IMeta.current + 1);
                            }}
                            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700
                            ${meta.current == meta.pages
                                    ? "text-gray-300 bg-gray-100 cursor-not-allowed pointer-events-none"
                                    : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                                }
                            `}>
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    )
}