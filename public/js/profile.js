var deleteBtn = document.querySelector('.btn-danger')

const newForm = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-body').value.trim();
  
    if (title && contents) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to create post');
      }
    }
  };
  
  const deleteButton = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Unable to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newForm);
  
  if (deleteBtn) {
    document
    .querySelector('.post-list')
    .addEventListener('click', deleteButton);
  }