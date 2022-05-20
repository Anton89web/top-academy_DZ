let colors = [];
let cookies = getCookie("colors");
if(cookies){
  for (let jsonData of JSON.parse(cookies)){
          colors.push(Object.assign(new Color(), jsonData));
  }
} else {
  colors =[
      new Color("YellowGreen", "RGB", "154, 205, 50"),
      new Color("DarkCyan", "RGBA", "0, 139, 139, .6"),
      new Color("OrangeRed", "HEX", "#FF4500"),
  ];
}


let colorsPalete = document.getElementById("pallet");

colors.forEach(newColor => {
    createColumn(newColor);
});

let colorForm = document.forms[0];
colorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let colorData = new FormData(colorForm);
    let newColor = new Color(
        colorData.get("colorname"),
        colorData.get("type"),
        colorData.get("code")
    );

    if (colors.find(color => color.cName === newColor.cName)) {
        newColor.errors.colorname = "Такое имя уже существует";
    } else if (newColor.validate()) {
        colors.push(newColor);
        let cookieValue = encodeURIComponent(JSON.stringify(colors));
        let date = new Date(Date.now() + 3600*3);
        date = date.toUTCString();
        document.cookie = `colors=${cookieValue}; expires=${date}`;
        createColumn(newColor);
    }

    for (let error in newColor.errors) {
        document.getElementById(error + "-error").innerText = newColor.errors[error];
    }
});


function createColumn(newColor) {
    let column = document.createElement('div');
    column.classList.add("col");
    column.appendChild(newColor.render());

    colorsPalete.appendChild(column);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : "[]";
}
