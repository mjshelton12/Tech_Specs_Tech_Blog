/*
We want to make a get route for the comments and retrieve the comments and see if we can log them in the console 
*/

const newComment = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('[data-post-id]').getAttribute('data-post-id')
    const contents = document.querySelector('#comment-text').value.trim();

    console.log(contents)
  
    if (contents) {
      const response = await fetch(`/api/comments/${postId}`, {
        method: 'POST',
        body: JSON.stringify({ contents }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json()
      console.table('here is data', data)

      if (response.ok) {
        document.location.reload()
        //  console.log(response)
      // console.log(JSON.stringify(response))
      // console.log(JSON.parse(response))
      // console.log(JSON.stringify(JSON.parse(response)))
      // console.log(JSON.parse(JSON.stringify(response)))
      console.log("hi", data)
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
    .querySelector('.new-comment-form')
    .addEventListener('submit', newComment);