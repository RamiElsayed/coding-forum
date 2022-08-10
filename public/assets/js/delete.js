const deleteBtn = $('#delete-btn');
const commentDeleteBtn = $('.comment-btn');

const deleteThread = async (event) => {
  const currentTarget = $(event.currentTarget);
  const threadId = currentTarget.attr('data-id');
  const dataType = currentTarget.attr('data-type');

  if (dataType === 'thread') {
    profile
    const response = await fetch(`/api/threads/${threadId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      window.location.replace('/profile');
    } else {
      alert('Failed to delete thread');
    }
  }
};

const deleteComment = async (event) => {
  const currentTarget = $(event.currentTarget);
  const commentId = currentTarget.attr('data-id');
  const threadId = currentTarget.attr('data-thread');
  const dataType = currentTarget.attr('data-type');
  if (dataType === 'comment') {
    const response = await fetch(`/api/threads/${threadId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.location.replace(`/thread/${threadId}`);
    } else {
      alert('Failed to delete comment');
    }
  }
};

deleteBtn.on('click', deleteThread);
commentDeleteBtn.on('click', deleteComment);
