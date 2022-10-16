const text = document.querySelector(".text");
let defaultFontSize = 14;

const isActive = (btn) =>
  document.querySelector("." + btn).classList.toggle("active");

const fontFamiling = () => {};

const color = (colorText) => {
  text.style.color = colorText;
};

const fontSizing = () => {};

const dec = () => {
  defaultFontSize -= 2;
  text.style.fontSize = defaultFontSize + "px";
};

const inc = () => {
  defaultFontSize += 2;
  text.style.fontSize = defaultFontSize + "px";
};

const bold = (bold) => {
  if (isActive("bold")) {
    text.style.fontWeight = "bold";
  } else {
    text.style.fontWeight = "100";
  }
};

const italic = (italic) => {
  if (isActive("italic")) {
    text.style.fontStyle = "italic";
  } else {
    text.style.fontStyle = "normal";
  }
};

const underline = (underline) => {
  if (isActive("underline")) {
    text.style.fontStyle = "underline";
  } else {
    text.style.fontStyle = "normal";
  }
};

const left = (left) => {
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

const center = (center) => {
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

const right = (right) => {
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

const justify = (justify) => {
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

const paragraphLTR = (paragraphLTR) => {
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

const paragraphRTL = (paragraphRTL) => {
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
