const deleteBtn = $("#delete-btn");

const deleteThread = async (event) => {
    const  currentTarget  = $(event.currentTarget);
    const threadId = currentTarget.attr("data-id");
    console.log(threadId);

    const response = await fetch(`/api/threads/${threadId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (response.ok) {
        window.location.replace("/profile");
      } else {
        alert("Failed to delete thread");
      }
}

deleteBtn.on("click", deleteThread)