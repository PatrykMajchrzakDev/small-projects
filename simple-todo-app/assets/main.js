//select all trash cans
const deleteBtn = document.querySelectorAll(".fa-trash-can");
//select uncompleted
const item = document.querySelectorAll(".item span");
//select completed
const itemCompleted = document.querySelectorAll(".item span.completed");

//trash can CLICK event listener
Array.from(deleteBtn).forEach((element) => {
  element.addEventListener("click", deleteTask);
});

//grab uncompleted tasks
Array.from(item).forEach((element) => {
  element.addEventListener("click", markComplete);
});
//grab completed tasks
Array.from(itemCompleted).forEach((element) => {
  element.addEventListener("click", markUnComplete);
});

async function markComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markUnComplete() {
  const itemText = this.parentNode.childNodes[1].innerText;
  try {
    const response = await fetch("markUnComplete", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        itemFromJS: itemText,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

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
