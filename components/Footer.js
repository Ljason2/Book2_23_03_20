import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
        <div>
            &copy; 북스리뷰 2023
            <div>
            <Link href="https://www.instagram.com/">
            <Image 
               src="/images/instagram.png"
               alt="instagram"
               width={32}
               height={32}
               />
            </Link>

            <Link href="https://www.facebook.com/">
                <Image 
               src="/images/facebook.png"
               alt="facebook"
               width={32}
               height={32}
               />
               </Link>

             <Link href="https://twitter.com/home?lang=ko">
             <Image 
               src="/images/twiter.png"
               alt="twitter"
               width={32}
               height={32}
               />
             </Link>

               <Link href="https://www.youtube.com/">
               <Image 
               src="/images/youtube.png"
               alt="youtube"
               width={32}
               height={32}
               />
               </Link>

             <Link href="https://www.tiktok.com/ko-KR/">
             <Image 
               src="/images/tictok.png"
               alt="tictok"
               width={32}
               height={32}
               />
                </Link> 
                
            </div>
            </div>
        </footer>

    )
}

