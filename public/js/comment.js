const newComment = async (event) => {
    event.preventDefault();
  
    const contents = document.querySelector('#comment-text').value.trim();
  
    if (contents) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload
      } else {
        alert('Unable to create comment');
      }
    }
  };
  
  const deleteButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to delete comment');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newComment);