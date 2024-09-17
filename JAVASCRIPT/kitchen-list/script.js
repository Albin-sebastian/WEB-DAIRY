let kitchenInput = document.getElementById
  ("kitchen-input");

let addBtn = document.getElementById("add-btn");

let kitchenItemsList = document.getElementById("kitchen-items-list");

let kitchenInputData;
let kitchenInputDataArray = [];

const setLocalStorage = () => {
  localStorage.setItem('kitchenInput', JSON.stringify(kitchenInputDataArray));
}

const getLocalStorage = () => {
  if (localStorage.getItem('kitchenInput')) {
    kitchenInputDataArray = JSON.parse(localStorage.getItem('kitchenInput'));
    buildUi();
  }

}

const buildUi = () => {
  kitchenItemsList.textContent = "";
  kitchenInputDataArray.forEach((item) => {

    let li = document.createElement('li');
    let spanEl = document.createElement('span');
    li.appendChild(spanEl);
    spanEl.innerText = item;
    li.style.cssText = "animation-name:slideIn;";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();

    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fas', 'fa-trash');
    li.appendChild(trashBtn);

    let editBtn = document.createElement('i');
    editBtn.classList.add('fas', 'fa-edit');
    li.appendChild(editBtn)
  });
}


const addKitchenItems = () => {
  kitchenInputData = kitchenInput.value;

  kitchenInputDataArray.push(kitchenInputData);
  setLocalStorage();

  getLocalStorage();

}
const deleteKitchenItem = (e) => {
  console.log(e.target.classList[1]);
  if (e.target.classList[1] === 'fa-trash') {
    let item = e.target.parentElement;
    item.classList.add('slideOut');
    item.addEventListener('transitionend', () => {
      item.remove();
    })

  }

}

const editKitchenItem = (e) => {
  console.log(e.target.classList[1]);
  if (e.target.classList[1] === 'fa-edit') {
    let editValue = prompt('please add new text');
    let items = e.target.parentElement;

    let spanEl = items.querySelector('span');
    spanEl.innerText = editValue;
  }

}

addBtn.addEventListener('click', addKitchenItems);

kitchenItemsList.addEventListener('click', deleteKitchenItem);

kitchenItemsList.addEventListener('click', editKitchenItem);

getLocalStorage();