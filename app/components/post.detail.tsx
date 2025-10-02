import dayjs from "dayjs"
import type { IPosts } from "~/types/backend"

interface IProps {
    post: IPosts | undefined
}

export function PostDetail(props: IProps) {
    const { post } = props
    return (
        <>
            <h2 className="font-bold text-4xl mb-4 text-justify">{post?.title}</h2>
            <span className="italic text-sm text-[#aaa]">Ngày đăng: {dayjs(post?.createdAt).format("DD/MM/YYYY")}</span>
            <p className="leading-[24px] text-justify">{post?.content}</p>
        </>
    )
}