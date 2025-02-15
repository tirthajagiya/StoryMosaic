import { data, useParams } from "react-router-dom";
import "./StoryDetail.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      comment:
        "This story is captivating! I loved the character development and the magical elements.",
    },
    {
      name: "Jane Smith",
      comment:
        "A beautiful tale that transports you to another world. Highly recommend!",
    },
  ]);
  const { id } = useParams();
  const apiUrl = "http://localhost:3000/story"+ id;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res)
    );
  }, []);
  return (
    <>
      <main className="story-section">
        <div className="story-header">
          <h1 id="story-name">Title : {data.title}</h1>
          <button id="edit-button">Edit</button>
        </div>
        <p id="story-content">Content : {data.content}</p>

        {/* <h2>Feedback</h2>
        <textarea
          id="feedback"
          placeholder="Leave your feedback here..."
          rows="4"
          value={feedback}
          onChange={handleFeedbackChange}
          style={{ width: "100%" }}
        />
        <button
          id="submit-feedback"
          onClick={handleFeedbackSubmit}
          style={{ marginTop: "1rem" }}
        >
          Submit Feedback
        </button>

        <h2>Reviews</h2>
        <div id="reviews">
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <strong>{review.name}:</strong>
              <p>{review.comment}</p>
            </div>
          ))}
        </div> */}
      </main>
    </>
  );
}
