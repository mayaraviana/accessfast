// Get the checkbox element
var checkbox1 = document.getElementById("checkbox1");

// Save the checkbox state in local storage when it changes
checkbox1.addEventListener("change", function () {
  localStorage.setItem("checkbox1State", this.checked);
});

// Load the saved checkbox state from local storage on page load
window.addEventListener("load", function () {
  var savedState1 = localStorage.getItem("checkbox1State");
  if (savedState1 === "true") {
    checkbox1.checked = true;
  } else if (savedState1 === "false") {
    checkbox1.checked = false;
  }
});

var checkbox2 = document.getElementById("checkbox2");

// Save the checkbox2 state in local storage when it changes
checkbox2.addEventListener("change", function () {
  localStorage.setItem("checkbox2State", this.checked);
});

// Load the saved checkbox2 state from local storage on page load
window.addEventListener("load", function () {
  var savedState2 = localStorage.getItem("checkbox2State");
  if (savedState2 === "true") {
    checkbox2.checked = true;
  } else if (savedState2 === "false") {
    checkbox2.checked = false;
  }
});

var checkbox3 = document.getElementById("checkbox3");

// Save the checkbox3 state in local storage when it changes
checkbox3.addEventListener("change", function () {
  localStorage.setItem("checkbox3State", this.checked);
});

// Load the saved checkbox3 state from local storage on page load
window.addEventListener("load", function () {
  var savedState3 = localStorage.getItem("checkbox3State");
  if (savedState3 === "true") {
    checkbox3.checked = true;
  } else if (savedState3 === "false") {
    checkbox3.checked = false;
  }
});

var checkbox4 = document.getElementById("checkbox4");

// Save the checkbox4 state in local storage when it changes
checkbox4.addEventListener("change", function () {
  localStorage.setItem("checkbox4State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState4 = localStorage.getItem("checkbox4State");
  if (savedState4 === "true") {
    checkbox4.checked = true;
  } else if (savedState4 === "false") {
    checkbox4.checked = false;
  }
});

var checkbox5 = document.getElementById("checkbox5");

// Save the checkbox4 state in local storage when it changes
checkbox5.addEventListener("change", function () {
  localStorage.setItem("checkbox5State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState5 = localStorage.getItem("checkbox5State");
  if (savedState5 === "true") {
    checkbox5.checked = true;
  } else if (savedState5 === "false") {
    checkbox5.checked = false;
  }
});

var checkbox6 = document.getElementById("checkbox6");

// Save the checkbox4 state in local storage when it changes
checkbox6.addEventListener("change", function () {
  localStorage.setItem("checkbox6State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState6 = localStorage.getItem("checkbox6State");
  if (savedState6 === "true") {
    checkbox6.checked = true;
  } else if (savedState6 === "false") {
    checkbox6.checked = false;
  }
});

var checkbox7 = document.getElementById("checkbox7");

// Save the checkbox4 state in local storage when it changes
checkbox7.addEventListener("change", function () {
  localStorage.setItem("checkbox7State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState7 = localStorage.getItem("checkbox7State");
  if (savedState7 === "true") {
    checkbox7.checked = true;
  } else if (savedState7 === "false") {
    checkbox7.checked = false;
  }
});

var checkbox8 = document.getElementById("checkbox8");

// Save the checkbox4 state in local storage when it changes
checkbox8.addEventListener("change", function () {
  localStorage.setItem("checkbox8State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState8 = localStorage.getItem("checkbox8State");
  if (savedState8 === "true") {
    checkbox8.checked = true;
  } else if (savedState8 === "false") {
    checkbox8.checked = false;
  }
});

var checkbox9 = document.getElementById("checkbox9");

// Save the checkbox4 state in local storage when it changes
checkbox9.addEventListener("change", function () {
  localStorage.setItem("checkbox9State", this.checked);
});

// Load the saved checkbox4 state from local storage on page load
window.addEventListener("load", function () {
  var savedState9 = localStorage.getItem("checkbox9State");
  if (savedState9 === "true") {
    checkbox9.checked = true;
  } else if (savedState9 === "false") {
    checkbox9.checked = false;
  }
});
