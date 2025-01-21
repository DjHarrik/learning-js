let computer = {
    ram:"8gb",
    rom:"128gb"
}
let lenovo={
    screen:"HD",
    gg :computer
}
console.log(lenovo.gg);

let computerHP = {
    ram:"16gb",
    rom:"512gb"
}
let hp={
    screen:"HD",
    __proto__ :computerHP
}
console.log(hp.__proto__);
console.log("check git in formated laptop" ")