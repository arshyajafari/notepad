const text = document.querySelector(".text");
var selectFontSize = document.querySelector(".size-font");
var defaultFontSize = 14;
selectFontSize.value = defaultFontSize;

const isActive = (btn) =>
  document.querySelector("." + btn).classList.toggle("active");

const fontFamiling = () => {
  const selectFontFamily = document.querySelector(".family-font");
  text.style.fontFamily = selectFontFamily.value;
};

const color = (colorText) => {
  text.style.color = colorText;
};

const fontSizing = () => {
  text.style.fontSize = `${selectFontSize.value}px`;
};

const dec = () => {
  const selOpt = document.querySelectorAll(".size-font option");
  for (let i = selOpt.length - 1; i > 0; i--) {
    if (selOpt[i].value === selectFontSize.value) {
      text.style.fontSize = `${selOpt[i - 1].value}px`;
      selectFontSize.value = selOpt[i - 1].value;
      break;
    }
  }
};

const inc = () => {
  const selOpt = document.querySelectorAll(".size-font option");
  for (let i = 0; i < selOpt.length - 1; i++) {
    if (selOpt[i].value === selectFontSize.value) {
      text.style.fontSize = `${selOpt[i + 1].value}px`;
      selectFontSize.value = selOpt[i + 1].value;
      break;
    }
  }
};

const bold = () => {
  isActive("bold")
    ? (text.style.fontWeight = "bold")
    : (text.style.fontWeight = "100");
};

const italic = () => {
  isActive("italic")
    ? (text.style.fontStyle = "italic")
    : (text.style.fontStyle = "normal");
};

const underline = () => {
  isActive("underline")
    ? (text.style.textDecoration = "underline")
    : (text.style.textDecoration = "none");
};

const left = () => {
  if (isActive("left")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "left";
    if (document.querySelector(".center").classList.contains("active")) {
      isActive("center");
    }
    if (document.querySelector(".right").classList.contains("active")) {
      isActive("right");
    }
    if (document.querySelector(".justify").classList.contains("active")) {
      isActive("justify");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
};

const center = () => {
  if (isActive("center")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "center";
    if (document.querySelector(".left").classList.contains("active")) {
      isActive("left");
    }
    if (document.querySelector(".right").classList.contains("active")) {
      isActive("right");
    }
    if (document.querySelector(".justify").classList.contains("active")) {
      isActive("justify");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
};

const right = () => {
  if (isActive("right")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "right";
    if (document.querySelector(".center").classList.contains("active")) {
      isActive("center");
    }
    if (document.querySelector(".left").classList.contains("active")) {
      isActive("left");
    }
    if (document.querySelector(".justify").classList.contains("active")) {
      isActive("justify");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
};

const justify = () => {
  if (isActive("justify")) {
    pTextAlign = text.style.textAlign;
    text.style.textAlign = "justify";
    if (document.querySelector(".center").classList.contains("active")) {
      isActive("center");
    }
    if (document.querySelector(".right").classList.contains("active")) {
      isActive("right");
    }
    if (document.querySelector(".left").classList.contains("active")) {
      isActive("left");
    }
  } else {
    text.style.textAlign = pTextAlign;
  }
};

const paragraphLTR = () => {
  if (isActive("paragraph-ltr")) {
    direction = text.style.direction;
    text.style.direction = "ltr";
    if (document.querySelector(".paragraph-rtl").classList.contains("active")) {
      isActive("paragraph-rtl");
    }
  } else {
    text.style.direction = direction;
  }
};

const paragraphRTL = () => {
  if (isActive("paragraph-rtl")) {
    direction = text.style.direction;
    text.style.direction = "rtl";
    if (document.querySelector(".paragraph-ltr").classList.contains("active")) {
      isActive("paragraph-ltr");
    }
  } else {
    text.style.direction = direction;
  }
};

const download = () => {
  let timestamp = new Date();
  const blob = new Blob([text.value]);
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `notepad_file_${timestamp.getTime()}`;
  link.href = fileUrl;
  link.click();
};

const print = () => {
  let timestamp = new Date();
  const blob = new Blob([text.value], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `notepad_file_${timestamp.getTime()}`;
  link.href = fileUrl;
  link.click();
};
