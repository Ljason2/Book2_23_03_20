import Link from "next/link";
import Footer from "../components/Footer";
import WorryItem from "../components/WorryItem";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";

function WorryList({ cast }) {
  return (
    <div id="question">
      <header>
        <div>
          <h1>
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" width={64} height={64} />
            </Link>
          </h1>
          <h1>
            <Link href="/">
              <AiOutlineHome />
            </Link>
          </h1>
        </div>
      </header>

      <div id="question2">
        <div id="question2Top">
          <h1>
            커뮤니티 게시판 <br />
            <span>
              독서 커뮤니티 게시판 입니다. <br /> 독서와 연관된 것들에 대해
              이야기하는 곳입니다.
            </span>
          </h1>
        </div>

        <div className="container2">
          <p>총 {cast.length}개의 게시글이 있습니다.</p>

          <WorryItem cast={cast} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jason-img.s3.amazonaws.com/nextImg/dataquestion.json"
  );
  const data = await res.json();
  return {
    props: {
      cast: data,
    },
  };
}

export default WorryList;
