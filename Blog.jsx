import React, { useState } from "react";

function Blog() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addComment = () => {
    if (!name || !text) {
      alert("Please enter name and comment");
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      text,
      time: new Date().toLocaleTimeString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div style={styles.container}>
      {/* Blog Content */}
      <div style={styles.blog}>
        <h1>My Tech Blog</h1>
        <p>
          This is a simple responsive blog layout built using React.
          Users can post comments and see them update in real time.
        </p>
        <p>
          React makes it easy to manage UI state and instantly update
          content without reloading the page.
        </p>
      </div>

      {/* Comments Section */}
      <div style={styles.comments}>
        <h2>Comments</h2>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <textarea
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />

        <button onClick={addComment} style={styles.button}>
          Post Comment
        </button>

        <div>
          {comments.length === 0 && <p>No comments yet</p>}
          {comments.map((c) => (
            <div key={c.id} style={styles.commentBox}>
              <strong>{c.name}</strong>
              <span style={styles.time}> • {c.time}</span>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "20px",
    flexWrap: "wrap", // responsive
  },
  blog: {
    flex: 2,
    minWidth: "280px",
  },
  comments: {
    flex: 1,
    minWidth: "280px",
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "6px",
  },
  input: {
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
    padding: "8px",
  },
  button: {
    width: "100%",
    padding: "8px",
    marginBottom: "15px",
  },
  commentBox: {
    borderBottom: "1px solid #ddd",
    marginBottom: "10px",
    paddingBottom: "8px",
  },
  time: {
    color: "gray",
    fontSize: "12px",
  },
};

export default Blog;
