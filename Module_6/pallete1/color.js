class Color {
    constructor(colorname, type, code) {
        this._colorname = colorname
          ? colorname.trim()
          : "";

        this._type = type;

        this._code = code
          ? code.replace(/ +/g, "").toUpperCase()
          : "";

        this.errors = {
            "colorname": "",
            "type": "",
            "code": ""
        };
    }

    get cName(){
        return this._colorname;
    }

    get type(){
        return this._type;
    }

    get code(){
        return this._code;
    }

    render() {
        let code = "";
        switch (this._type) {
            case "RGB":
                code = `rgb(${this._code})`;
                break;
            case "RGBA":
                code = `rgba(${this._code})`;
                break;
            case "HEX":
                code = this._code;
                break;
            default:
                code = "#FFF";
        }


        let colorBlock = document.createElement('div');
        colorBlock.classList.add('color');
        // colorBlock.dataset.code = code;
        colorBlock.style.cssText = `background-color: ${code}`;

        let innerBlock = document.createElement('div');
        innerBlock.insertAdjacentHTML(
          "afterbegin",
          `<span>${this._colorname}</span><span>${this._type}</span><span>${this._code}</span>`
        );
        colorBlock.appendChild(innerBlock);

        return colorBlock;
    }

    validate() {
        let success = true;

        switch (this._type) {
            case "RGB":
                success = this.validateRGB();
                break;
            case "RGBA":
                success = this.validateRGBA();
                break;
            case "HEX":
                success = this.validateHEX();
                break;
            default:
                this.errors.type = "Неизвестный тип данных";
                success = false;
        }

        if (this._colorname === "") {
            this.errors.colorname = "Имя не должно быть пустым";
            success = false;
        } else if (this._colorname.match(/[^A-z]/g) !== null) {
            this.errors.colorname = "Название может содержать только латинские буквы";
            success = false;
        }

        return success;
    }

    validateRGB() {
        let colors = this._code.split(","); // 255,255,255 => ['255', '255', '255']
        let success = colors.length === 3
            && colors.filter(color => color >= 0 && color <= 255).length === 3;
        if (!success) {
            this.errors.code = "RGB должен соответствовать формату [0-255], [0-255], [0-255]"
        }
        return success;
    }

    validateRGBA() {
        let colors = this._code.split(","); // 255,255,255,0.5
        let success = colors.length === 4
                && colors.filter(
                    (color, index) => color >= 0 && index === 3 ? color <= 1 : color <= 255
                  ).length === 4;
        if (!success) {
            this.errors.code = "RGBA должен соответствовать формату [0-255], [0-255], [0-255], [0-1]"
        }
        return success;
    }

    validateHEX() {
        let reg = new RegExp('^#[0-9A-F]{6}$', 'i');
        let success = reg.test(this._code);
        if (!success) {
            this.errors.code = "HEX должен соответствовать формату [#FFFFFF]"
        }
        return success;
    }

}
