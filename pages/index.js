import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import { Layout } from '../components/Layout'
import { MyList } from '../components/MyList'


export default function Home({cast}) {
  return (
    <Layout>
      <Head>
        <title>북스리뷰</title>
      </Head> 
      <main>
       <header>
         <div>

         <h1><Link href="/"><Image 
         src="/images/logo.png" 
        alt="logo"
         width={204}
         height={245}
         /> </Link></h1>
       <nav>
         <ul>
           <li><Link href="/Join">회원가입</Link></li>
           <li><Link href="/Login">로그인</Link></li>
           <li><Link href="/Review">서평 남기기</Link></li>
           <li><Link href="/Worrylist">커뮤니티</Link></li>
         </ul>
       </nav>
       </div>
       </header>

       <article id="article5">
        <div>
            <div>
            <h2>BOOK <span>NEWS</span></h2>
            <dl>
                <dt><Link href="https://www.readersnews.com/news/articleView.html?idxno=97814">[응답하라! 그때 그 시절 베스트셀러] - 2014년 3월의 책
</Link></dt>
                <dd>2020.03.03 / 서믿음 기자</dd>
            </dl>
            <dl>
                <dt><Link href="https://www.readersnews.com/news/articleView.html?idxno=108341">국립장애인도서관, 청각장애인 독서 프로그램 ‘손책누리’ 운영
</Link></dt>
                <dd>2023.03.15 / 김혜경 기자</dd>
            </dl>
            <Link href="https://www.readersnews.com/"><button>ALL NEWS</button></Link>
            </div>
            <figure>
              <Image src="/images/booknews.jpg" 
              alt="booknews"
              width={566.5}
              height={438.5}
              />
            </figure>
        </div>
        </article>


    <div id='mainOutline'>
        <div id='main'>
          <h1>최신 책 리뷰</h1>
        <div id='line'>
        <MyList cast={cast}/>
        </div>
        </div>
        </div>

<div id="category">
  <div>
    <dl>
      <dt>베스트셀러</dt>
      <dd>
        <figure>
          <Image 
          src="/images/bestseler.png"
          alt="bestseler"
          width={206.5}
          height={300}
          />
          <figcaption>
          세이노의 가르침

          </figcaption>
        </figure>
      </dd>
    </dl>

    <dl>
      <dt>스테디셀러</dt>
      <dd>
        <figure>
          <Image 
          src="/images/one.jpg"
          alt="one"
          width={206.5}
          height={300}
          />
          <figcaption>
          원씽
        </figcaption>
        </figure>
      </dd>
    </dl>


    <dl>
      <dt>추천도서</dt>
      <dd>
        <figure>
        <Image 
          src="/images/1percent.jpg"
          alt="1percent"
          width={206.5}
          height={300}
          />
          <figcaption>
          1퍼센트 부자의 법칙
     </figcaption>
        </figure>
      </dd>
    </dl>


    <dl>
      <dt>신간도서</dt>
      <dd>
        <figure>
        <Image 
          src="/images/dark.jpg"
          alt="dark"
          width={206.5}
          height={300}
          />

          <figcaption>
          한밤중의 심리학 수업
     </figcaption>
        </figure>
      </dd>
    </dl>
    </div>
</div>
    <Footer />
      </main>
      </Layout>
  )
}


export async function getStaticProps(){
  const res= await fetch("https://jason-img.s3.amazonaws.com/nextImg/bookData.json")
  const data= await res.json();
  return{
    props:{
      cast:data
    }
  }
}