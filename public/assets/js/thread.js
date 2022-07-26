const creatThreadForm = $('#create-thread-form');

const createThread = async (event) => {
  event.preventDefault();
  const title = $('#title').val();
  const body = $('#thread-body').val();

  const payload = JSON.stringify({
    title,
    body,
  });

  const response = await fetch("/api/threads", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to create thread");
  };

  console.log('create thread');
};
creatThreadForm.on('submit', createThread);
