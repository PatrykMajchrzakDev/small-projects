//select all trash cans
const deleteBtn = document.querySelectorAll(".fa-trash-can");

//trash can CLICK event listener
Array.from(deleteBtn).forEach((element) => {
  element.addEventListener("click", deleteTask);
});

//DELETE METHOD
async function deleteTask() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("deleteTask", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemFromJS: itemText }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
