import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";

const castMember = ({ castMember }) => {
  return (
    <Layout>
      <main>
        <div id="commentOutline">
          <header>
            <div>
              <h1>
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={64}
                    height={64}
                  />
                </Link>
              </h1>
              <h1>
                <Link href="/">
                  <AiOutlineHome />
                </Link>
              </h1>
            </div>
          </header>
          <div id="comment">
            <h1>게시글</h1>
            <figure>
              <figcaption>
                <dl>
                  <dt>{castMember.title}</dt>
                  <dd>{castMember.content}</dd>
                </dl>
              </figcaption>
            </figure>

            <div className="answer">
              <h1>댓글</h1>
              {/* 반복문의 시작점 */}
              {castMember.answers.map((item) => {
                return (
                  <dl key={item.content}>
                    <dt>
                      <span>익명</span> &nbsp; {item.createdAt}
                    </dt>
                    <dd>{item.content}</dd>
                  </dl>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jason-img.s3.amazonaws.com/nextImg/dataquestion.json"
  );
  const data = await res.json();
  const castMember = data.filter((item) => item.slue == context.params.slue);
  return {
    props: {
      castMember: castMember[0],
    },
  };
};

export default castMember;
