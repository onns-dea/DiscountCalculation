const amounts = document.querySelectorAll(".price_area .amount");

const createSpanElement = () => {
  const spanElement = document.createElement("span");
  spanElement.innerText = "30%";
  spanElement.style.marginRight = "2px";
  spanElement.style.color = "#f15746";
  return spanElement;
};

const addSpanElement = () => {
  for (let i = 0; i < amounts.length; i++) {
    amounts[i].prepend(createSpanElement());
  }
};

addSpanElement();
