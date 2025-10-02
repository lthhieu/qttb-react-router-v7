import dayjs from "dayjs"
import { useState } from "react"
import { useNavigate } from "react-router"
import type { IFormCategories, IForms, Meta } from "~/types/backend"
import { FileLink } from "~/utils/file.link"
import { getPaginationRange } from "~/utils/pagination"

interface IProps {
    forms: IForms[],
    meta: Meta,
    formCategories: IFormCategories[]
}
export function FormComponent(props: IProps) {
    const { forms, meta: IMeta, formCategories } = props
    const [nameSearch, setNameSearch] = useState<string>('')
    const [cate, setCate] = useState<string>('all')
    const [meta, setMeta] = useState<Meta>({
        current: IMeta.current,
        pageSize: IMeta.pageSize,
        pages: IMeta.pages,
        total: IMeta.total
    })
    let navigate = useNavigate();


    const handleSearch = () => {
        if (nameSearch == '' && cate == 'all') {
            navigate(`/bieu-mau`);
        }
        else if (nameSearch != '' && cate == 'all') {
            navigate(`?name=${nameSearch}`)
        } else if (nameSearch == '' && cate != 'all') {
            navigate(`?categoryFormId=${cate}`)
        } else {
            navigate(`?name=${nameSearch}&categoryFormId=${cate}`)
        }
    }

    const goPage = (value: number) => {
        setMeta(prev => ({ ...prev, current: value, }));
        navigate(`?page=${value}`);
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
                    <input value={nameSearch} onChange={(e) => { setNameSearch(e.target.value) }} type="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-0 bg-gray-50 focus:border-blue-500" placeholder="Tìm kiếm theo tên biểu mẫu ..." />

                </div>
                <div className="xl:w-[30%] w-[100%] border flex gap-2 p-1 px-6 border-gray-300 bg-gray-50 rounded-lg text-gray-700">
                    <label>Lọc theo:</label>
                    <select
                        onChange={(e) => { setCate(e.target.value) }} value={cate}
                        className="outline-0">
                        <option value={'all'}>Tất cả</option>
                        {formCategories.length > 0 && formCategories.map((item, index) => {
                            return (<option key={index} value={item._id}>{item.name}</option>)
                        })}
                    </select>
                </div>
                <div className="xl:w-[20%] lg:w-[40%] w-full">
                    <button onClick={() => { handleSearch() }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Tìm kiếm</button>
                </div>
            </div>
            <div className="mb-4">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className="pl-2">STT</th>
                                <th className="min-w-[300px] pl-2">Tên biểu mẫu</th>
                                <th className="min-w-[100px] pl-2">Ngày ban hành</th>
                                <th className="min-w-[100px] pl-2">File đính kèm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {forms && forms?.length > 0 ? forms.map((item, index) => {
                                const filelink = FileLink(item.file, item.mimetype);
                                return (
                                    <tr key={item._id}>
                                        <td className="pl-2">{index + 1}</td>
                                        <td className="truncate max-w-[200px] pl-2">{item.name}</td>
                                        <td className="pl-2">{dayjs(item.issueDate).format("DD/MM/YYYY")}</td>
                                        <td className="pl-2">{<a className="text-blue-500 hover:underline" href={filelink} download={item.name} target="_blank" rel="noopener noreferrer">
                                            File đính kèm
                                        </a>}</td>
                                    </tr>
                                )
                            }) : <span>Không có biểu mẫu nào</span>}
                        </tbody>

                    </table>
                </div>
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


                    {getPaginationRange(IMeta.current, IMeta.pages).map((page, idx) => (
                        <li key={idx}>
                            {page === "..." ? (
                                <span className="px-3">...</span>
                            ) : (
                                <span
                                    onClick={() => goPage(+page)}
                                    className={
                                        meta.current === page
                                            ? "cursor-pointer z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                            : "cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    }
                                >
                                    {page}
                                </span>
                            )}
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