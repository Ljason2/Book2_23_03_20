import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Footer";
import AddReview from "../components/AddReview";
import ReviewSearch from "../components/ReviewSearch";
import ReviewInfo from "../components/ReviewInfo";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import Image from "next/image";

function Review() {
  const [appointList, setAppointList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("userName");

  const filterAppointments = appointList
    .filter((item) => {
      return (
        item.userName.includes(query) ||
        item.review.includes(query) ||
        item.productName.includes(query)
      );
    })

    .sort((a, b) => {
      return sortBy === "score"
        ? a[sortBy] > b[sortBy]
          ? -1
          : 1
        : a[sortBy] < b[sortBy]
        ? -1
        : 1;
    });

  const fetchData = useCallback(() => {
    fetch(`./reviewData.json`)
      .then((response) => response.json())
      .then((data) => setAppointList(data));
  }, []);

  useEffect(fetchData, [fetchData]);

  return (
    <div id="reviewPage">
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

      <div id="reviewPage2">
        <h1>서평 게시판</h1>
        <h2>
          서평 이벤트 진행중! <br />
          <span>
            책 서평을 남겨주신 분들에 한해 추첨을 통해 저자와 저녁식사를 할 수
            있는 기회가 주어집니다.
          </span>
        </h2>
        <AddReview
          onSendAppointment={(myAppointment) =>
            setAppointList([...appointList, myAppointment])
          }
          lastId={appointList.reduce(
            (max, item) => (Number(item.id) > max ? Number(item.id) : max),
            1
          )}
        />
        <ReviewSearch
          query={query}
          onQueryChange={(myQuery) => setQuery(myQuery)}
          sortBy={sortBy}
          onSortChange={(mySortBy) => setSortBy(mySortBy)}
        />
        <div id="list">
          <h1>전체 서평</h1>
          <ul>
            {filterAppointments.map((appointment) => (
              <ReviewInfo
                key={appointment.id}
                appointment={appointment}
                onDelectAppoint={(appointmentId) =>
                  setAppointList(
                    filterAppointments.filter(
                      (appointment) => appointment.id !== appointmentId
                    )
                  )
                }
              />
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Review;
