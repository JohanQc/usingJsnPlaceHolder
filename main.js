const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrarData(data))
  .catch((error) => console.log(error));

const buttonNext = document.getElementById("buttonNext");
const buttonBack = document.getElementById("buttonBack");

function renderUser(dataList, index) {
  const body = `<article class="article">
     <img class="image" src="https://i.guim.co.uk/img/media/07115c7cdf9ba47be3fdb3273b2380488d8edb96/44_279_976_585/master/976.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9f7df9bd9cabcf141ef4bc3a4b07e8de">
     <div>${dataList[index].name}</div>
     <div>${dataList[index].email}</div>
     <div>${dataList[index].username}</div>
    </article>`;
  document.getElementById("card").innerHTML = body;
}

const mostrarData = (data) => {
  // let body = ''
  // body = `<div>${data[5].name}</div>`
  // for (let i = 0; i<data.length; i++){
  //      body += `<article>
  //    <div>${data[i].id}</div>
  //    <div>${data[i].name}</div>
  //    <div>${data[i].email}</div>
  //    <div>${data[i].id}</div>
  //   </article>`
  // }
  // const body = data.map((item)=> {
  // return `<article class="article">
  //    <div>${item.id}</div>
  //    <div>${item.name}</div>
  //    <div>${item.email}</div>
  //   </article>`
  // })
  let currUserIdx = 0;

  renderUser(data, currUserIdx);
  buttonNext.addEventListener("click", () => {
    // currUserIdx = currUserIdx + 1
    if (currUserIdx < 9) {
      currUserIdx++;
      renderUser(data, currUserIdx);
      console.log(currUserIdx);
    }
    if (currUserIdx > 0) {
      buttonBack.classList.remove("btn--hidden");
    }
    if (currUserIdx === 9) {
      buttonNext.classList.add("btn--hidden");
    }
  });
  buttonBack.addEventListener("click", () => {
    // currUserIdx = currUserIdx + 1
    if (currUserIdx <= 9) {
      currUserIdx--;
      renderUser(data, currUserIdx);
    }
    if (currUserIdx === 0) {
      buttonBack.classList.add("btn--hidden");
    }
    if (currUserIdx < 9) {
      buttonNext.classList.remove("btn--hidden");
    }
  });
};
