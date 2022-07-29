const commentForm = $('#create-comment');

const createComment = async (event) => {
    event.preventDefault();
    const comment = $('#comment-textarea').val();
  
    const payload = JSON.stringify({
      comment,
    });
    console.log('confirm');
    const response = await fetch("/api/comments/writeComment", {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
        console.log(response)
      window.location.replace("/thread");
    } else {
      alert("Failed to create Comment");
    };
  
    console.log('create Comment');
  };
  commentForm.on('submit', createComment);