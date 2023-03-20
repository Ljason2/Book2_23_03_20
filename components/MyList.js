import Link from "next/link";




export function MyList({cast}){
    return(
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>책 제목</th>
                    <th>작가</th>
                </tr>
            </thead>

            <tbody style={{padding:"20px"}}>
                    {
        cast.map(member =>
        <tr key={member.id} style={{padding:"4px"}}>
            <td style={{padding:"4px"}}>{member.id}</td>
            <td style={{padding:"4px"}}><Link href="/member/[id]" as={`/member/${member.id}`}>{member.title}</Link></td>
             
            <td style={{padding:"4px"}}>{member.name}</td>
        </tr>
            )
                    }
            </tbody>
        </table>
    )
}