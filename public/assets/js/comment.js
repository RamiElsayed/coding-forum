const commentForm = $('#create-comment');

const createComment = async (event) => {
    event.preventDefault();
    const threadId = $('#threadId').val()
    const comment = $('#comment-textarea').val();
  
    const payload = JSON.stringify({
      comment,
    });
   
    const response = await fetch(`/api/threads/${threadId}/comments`, {
      method: "POST",
      body: payload,
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
        console.log(response)
      window.location.replace(`/thread/${threadId}`);
    } else {
      alert("Failed to create Comment");
    };
  
   
  };
  commentForm.on('submit', createComment);