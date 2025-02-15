import { useEffect, useState } from "react";
import "./Story.css";

export default function Story() {
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost:3000/story";
  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formated_story = data.map((story) => {
    return (
      <div class="story-card">
        <div class="story-cover">{story.title}</div>
        <div class="story-info">
          <h3 class="story-title">{story.title}</h3>
          <div class="story-author">
            <div class="author-avatar">NH</div>
            <span>{story.contributor}</span>
          </div>
          <p>{story.title}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div class="search-container">
        <input
          type="text"
          class="search-bar"
          placeholder="Search for stories, authors, or genres..."
        />
        <div class="filters">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Fiction</button>
          <button class="filter-btn">Non-Fiction</button>
          <button class="filter-btn">Business</button>
          <button class="filter-btn">Self-Help</button>
        </div>
      </div>

      <main class="library-container">
        <section>
          <h2 class="category-title">Popular Now</h2>
          <div class="story-grid">{formated_story}</div>
        </section>
      </main>
    </>
  );
}
