import React, { useState } from 'react';

import Post from './components/Post';
import Header from './components/Header';



function App() {
  const [theme, setTheme] = useState(dark);

  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Title#01", subtitle: "Sub#01", likes: 10, read: false },
    { id: Math.random(), title: "Title#02", subtitle: "Sub#02", likes: 20, read: true },
    { id: Math.random(), title: "Title#03", subtitle: "Sub#03", likes: 30, read: false }
  ]);

  function handleToggleTheme() {
    setTheme((prevState) => (
      prevState === 'dark' ? 'light' : 'dark'
    ));
  }

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Sub#0${prevState.length + 1}`,
        likes: 10
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postId)
    ));
  }

  return (
    <>
      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
      >
        <h2>Posts da Semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
          theme={theme}
        />
      ))}
    </>
  );
}

export default App;