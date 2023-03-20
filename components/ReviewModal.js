import { AiFillCloseSquare } from "react-icons/ai";

function ReviewModal({
  productName2,
  userName2,
  photo2,
  toggleForm2,
  setToggleForm2,
}) {
  if (!toggleForm2) {
    return null;
  }

  return (
    <div id="alert">
      <div>
        <img src={photo2} alt={productName2} />
      </div>

      <div
        id="closeAlert"
        onClick={() => {
          setToggleForm2(!toggleForm2);
        }}
      >
        <AiFillCloseSquare />
      </div>

      <dl>
        <dt>서평을 남겨주셨습니다.</dt>
        <div>
          <dt>책이름</dt>
          <dd>{productName2}</dd>
        </div>

        <div>
          <dt>작성자</dt>
          <dd>{userName2}</dd>
        </div>
      </dl>
    </div>
  );
}

export default ReviewModal;
