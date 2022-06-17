let DarkButton = document.getElementById("DarkModeButton");
let changeDark1 = document.getElementsByClassName("dark01");
let changeDark2 = document.getElementsByClassName("dark02");

DarkButton.addEventListener("click", () => {
  console.log(changeDark2);
  if (DarkButton.innerText === "DARK") {
    for (let i = 0; i < changeDark1.length; i++) {
      changeDark1[i].classList.add("dark");
    }

    for (let i = 0; i < changeDark2.length; i++) {
      changeDark2[i].classList.add("dark2");
    }

    DarkButton.innerText = "PINK";
  } else {
    for (let i = 0; i < changeDark1.length; i++) {
      changeDark1[i].classList.remove("dark");
    }

    for (let i = 0; i < changeDark2.length; i++) {
      changeDark2[i].classList.remove("dark2");
    }
    DarkButton.innerText = "DARK";
  }
});
