import { Link } from "react-router"
import type { IPosts } from "~/types/backend"

interface IProps {
    posts: IPosts[] | undefined
}
export function Posts(props: IProps) {
    const { posts } = props
    console.log(posts)
    return (
        <>
            <div>
                {posts && posts.length > 0 ?
                    <>
                        {posts.map((item, index: number) => {
                            return (
                                <div className='item-post' key={index}>
                                    <img className='thumbnail-post' src={`data:${item.mimetype};base64,${item.thumbnail}`} />
                                    <div className="w-[92%]">
                                        <Link className="truncate w-full block" to={`/tin-tuc/${item.slug}`}>{item.title}</Link>
                                        <p className="truncate w-full">{item.content}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </> : <span>Chưa có tin tức nào</span>}
            </div>
        </>
    )
}