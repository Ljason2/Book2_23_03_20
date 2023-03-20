import { FaTrash } from "react-icons/fa";
import Image from "next/image";

function ReviewInfo({ appointment, onDelectAppoint }) {
  return (
    <li>
      <dl>
        <dd className="photoUrl">
          <Image
            src={appointment.photoUrl}
            alt={appointment.productName}
            width={206.5}
            height={300}
          />
        </dd>
        <div>
          <dd className="name">{appointment.userName}</dd>
          <dd className="productName">{appointment.productName}</dd>
          <dd className="content">{appointment.review}</dd>
          <div>
            <button
              onClick={() => onDelectAppoint(appointment.id)}
              type="button"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </dl>
    </li>
  );
}

export default ReviewInfo;
