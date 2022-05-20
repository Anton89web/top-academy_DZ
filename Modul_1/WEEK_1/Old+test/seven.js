module.exports = function (usbGb){
    let numberOfFiles = usbGb * 1024 / 820;
    return +numberOfFiles.toFixed(2);
}
