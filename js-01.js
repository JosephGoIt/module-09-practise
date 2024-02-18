const button = document.querySelector("button");

const onClick = () => {
  const timerId = setTimeout(() => {
    console.log("I love async JS!");
  }, 2000);

  console.log(timerId);
  console.log("Wait for it");
  console.log("It's gonna come");
  console.log("I called it 2 secs ago");
  console.log("There you go");
};

button.addEventListener("click", onClick);
