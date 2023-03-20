import Footer from "@/components/Footer";
import { Layout } from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const castMember = ({ castMember }) => {
  return (
    <Layout>
      <main>
        <div id="bookReview">
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

          <div id="reviewh1">
            <h1>{castMember.title}</h1>
          </div>
          <figure id="reviewFigure">
            <Image
              src={`/images/${castMember.bigImg}`}
              alt={castMember.title}
              width={413}
              height={600}
            />
            <figcaption>
              <dl>
                <dt>{castMember.name}</dt>
                <dd>{castMember.text}</dd>
                <p>
                  <Link href="/Review">서평 쓰러가기</Link>
                </p>
              </dl>
            </figcaption>
          </figure>
        </div>
        <Footer />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    "https://jason-img.s3.amazonaws.com/nextImg/bookData.json"
  );
  const data = await res.json();
  const castMember = data.filter((item) => item.id == context.params.id);
  return {
    props: {
      castMember: castMember[0],
    },
  };
};

export default castMember;
