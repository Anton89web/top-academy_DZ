function AddPallet() {

    class Color {
        constructor(colorname, type, code) {
            this.name = colorname;
            this.type = type;
            this.code = code;
        }

        createStrColor() {
            let strColor = "";

            if (this.type === "RGB") {
                strColor = `rgb(${this.code})`;
            } else if (this.type === "RGBA") {
                strColor = `rgba(${this.code})`;
            } else if (this.type === "HEX") {
                strColor = `#${this.code}`;
            }
            return strColor;
        }
    }

   function createColor(item) {
        let strColor = "";

        if (item.type === "RGB") {
            strColor = `rgb(${item.code})`;
        } else if (item.type === "RGBA") {
            strColor = `rgba(${item.code})`;
        } else if (item.type === "HEX") {
            strColor = `#${item.code}`;
        }
        return strColor;
    }

    let pallet = document.querySelector('#pallet');

    let palletDiv = [

        {
            name: "Yellowsreen".toUpperCase(),
            type: "RGB",
            code: "154, 205, 50",
            createStrColor() {
                let strColor = "";

                if (this.type === "RGB") {
                    strColor = `rgb(${this.code})`;
                } else if (this.type === "RGBA") {
                    strColor = `rgba(${this.code})`;
                } else if (this.type === "HEX") {
                    strColor = `#${this.code}`;
                }
                return strColor;
            }
        },
        {
            name: "Darkcyan".toUpperCase(),
            type: "RGBA",
            code: "0, 139, 139, 1",
            createStrColor() {
                let strColor = "";

                if (this.type === "RGB") {
                    strColor = `rgb(${this.code})`;
                } else if (this.type === "RGBA") {
                    strColor = `rgba(${this.code})`;
                } else if (this.type === "HEX") {
                    strColor = `#${this.code}`;
                }
                return strColor;
            }
        },
        {
            name: "Orangered".toUpperCase(),
            type: "HEX",
            code: "FF4500",
            createStrColor() {
                let strColor = "";

                if (this.type === "RGB") {
                    strColor = `rgb(${this.code})`;
                } else if (this.type === "RGBA") {
                    strColor = `rgba(${this.code})`;
                } else if (this.type === "HEX") {
                    strColor = `#${this.code}`;
                }
                return strColor;
            }
        },
    ];


    function innerDiv(arr) {

        arr.forEach((element => {
            let div = `<div style='background-color:${createColor(element)}' class='col-4 newdiv'><p>${element.name}</p><p>${element.type}</p><p>${element.code}</p></div>`;
            pallet.insertAdjacentHTML('beforeend', div);
        }));
    }
    if (sessionStorage.getItem("arr")){
        innerDiv(JSON.parse(sessionStorage.getItem("arr")));
    } else {
        innerDiv(palletDiv);
    }


    document.querySelector('.btn').addEventListener('click', (event) => {
        event.preventDefault();

        for (i = 0; i < pallet.childNodes.length;) {
            pallet.firstChild.remove();
        }

        let name = document.querySelector('#colorname').value;
        let type = document.querySelector('#type').value;
        let code = document.querySelector('#code').value;
        let arrCode = code.split(",");
        let validRGB = arrCode.length === 3 && arrCode.filter(code => code >= 0 && code <= 255 &&
            code != "" && code != ' ').length === 3;
        let validRGBA = arrCode.length === 4 && arrCode.filter(
            (code, index) => code >= 0 && code != "" && code != ' ').length === 4;
        let arrHEX = code.split('');
        let validHEX = arrHEX.length === 6 && arrHEX.filter(code => ((code >= 0 && code <= 9) || (code >= 'A' && code <= 'f'))).length === 6;

        function valid(name, type, code) {
            let error_name = document.querySelector('#colorname-error');
            let error_code = document.querySelector('#code-error');
            error_code.textContent = "";
            error_name.textContent = "";
            let checkName = false;

            palletDiv.forEach(element => {
                if (element.name === name) {
                    checkName = true;
                }
            });

            if (!name) {
                error_name.textContent = 'Вы не заполнили это поле';
            }
            if (!code) {
                error_code.textContent = 'Вы не заполнили это поле';
            } else if ((name.match(/[^A-z]/g) !== null)) {
                error_name.textContent = "Название может содержать только латинские буквы";
            } else if (checkName) {
                error_name.textContent = "Такое название уже используется";
            } else if (type === 'RGB' && !validRGB) {
                error_code.textContent = "RGB должен соответствовать формату [0-255], [0-255], [0-255]";
            } else if (type === 'RGBA' && !validRGBA) {
                error_code.textContent = "RGBA должен соответствовать формату [0-255], [0-255], [0-255], [0-1]";
            } else if (type === 'HEX' && !validHEX) {
                error_code.textContent = "HEX должен соответствовать формату [#FFFFFF]";
            } else {
                let obj = new Color(name, type, code);
                palletDiv.push(obj);
            }
        }
        valid(name, type, code);



        
        
        sessionStorage.setItem('arr', JSON.stringify(palletDiv));
        
        arr = JSON.parse(sessionStorage.getItem("arr"));
        
        console.log(arr);
        innerDiv(arr); 
    });
}
AddPallet();