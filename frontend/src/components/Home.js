import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([]);
  const apiUrl = "http://localhost:3000/story";
    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res));
    }, [])

    const formated_story = data.map((story)=>{
      return(
        <div class="story-card">
            <h3 class="story-title">{story.title}</h3>
            <p class="story-excerpt">
              {story.content}
            </p>
            <Link to={`/story/${story.id}`} class="read-more">
              Read More
            </Link>
          </div>
      )
    })
  return (
    <>
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to StoryMosaic</h1>
          <p class="hero-subtitle">Discover, Read, and Share Amazing Stories</p>
          <Link to="/story" class="read-more">
            Start Reading
          </Link>
          <Link to="/write-story" class="read-more">
            Start Writing
          </Link>
        </div>
      </section>

      <section class="featured-stories">
        <div class="stories-grid">
          {formated_story}
        </div>
      </section>

      <section class="features-section">
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Vast Library</h3>
            <p>Access thousands of stories across various genres</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💫</div>
            <h3>Personalized Experience</h3>
            <p>Get recommendations based on your reading preferences</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤝</div>
            <h3>Community</h3>
            <p>Connect with fellow readers and share your thoughts</p>
          </div>
        </div>
      </section>
    </>
  );
}
