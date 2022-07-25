const deleteBtn = $("delete-btn");

const handleDeleteThread = async (event) => {
    const { currentTarget } = event.currentTarget;
    const threadId = currentTarget.attr("data-id");

    const response = await fetch(`/api/thread/${threadId}`, {
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

deleteBtn.on("click", handleDeleteThread)