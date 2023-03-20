const { default: Link } = require("next/link");

function WorryItem({cast}){
    return(

        <div>
        {cast.map((item)=>{return (<figure key={item.slue}>
            <figcaption>
                <dl>
                    <dt>{item.title}</dt>
                    <dd>{item.writer}</dd>
                    <dd>{item.createdAt}</dd>
                    <dd>{item.content}</dd>
                    <dd><Link href="/member2/[slue]" as={`/member2/${item.slue}`}>댓글보기</Link></dd>
                </dl>
            </figcaption>
        </figure>)

        })}
                </div>
    )
}


export default WorryItem;

