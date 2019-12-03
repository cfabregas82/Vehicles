var car;
function createCar(plate, brand, color) {
    return new Car(plate, color, brand);
}
//En prémer el botó "Create car" crea el cotxe, mostra els resultats i amaga carForm.   
function submitCar() {
    var platebox = document.getElementById("plate").value;
    var brandbox = document.getElementById("brand").value;
    var colorbox = document.getElementById("color").value;
    var plateValidation = (/^[0-9]{4}[a-zA-Z]{3}$/.test(platebox));
    if (!plateValidation) {
        alert("Matricula incorrecta, introduce 4 números y 3 letras.");
        return false;
    }
    else if (brandbox == "" || colorbox == "") {
        alert("Todos los campos son necesarios.");
    }
    else {
        car = createCar(platebox, brandbox, colorbox);
        showCar();
        showWheelForm();
    }
}
function showCar() {
    var carinfo = document.getElementById("carInfo");
    carinfo.innerText = "Matrícula: " + car.plate + "  /  " + "Color: " + car.color + "  /  " + " Marca: " + car.brand;
}
function showWheelForm() {
    document.getElementById("carForm").style.display = "none";
    document.getElementById("wheelForm").style.display = "block";
    document.getElementById("titleInfo").style.display = "none";
}
//Condició general per validar el diàmetre de les rodes.
function submitWheels() {
    // Marca de les rodes
    var brandWheel1 = document.getElementById("brandWheel1").value;
    var brandWheel2 = document.getElementById("brandWheel2").value;
    var brandWheel3 = document.getElementById("brandWheel3").value;
    var brandWheel4 = document.getElementById("brandWheel4").value;
    var num_errores = 0;
    // Diàmetre de les rodes
    var diam_wheel1 = Number(document.getElementById("wheel1").value);
    var diam_wheel2 = Number(document.getElementById("wheel2").value);
    var diam_wheel3 = Number(document.getElementById("wheel3").value);
    var diam_wheel4 = Number(document.getElementById("wheel4").value);
    if (!isValidDiameter(Number(diam_wheel1))) {
        alert("El diámetro de la rueda 1 no es correcto!");
        num_errores++;
    }
    if (!isValidDiameter(Number(diam_wheel2))) {
        alert("El diámetro de la rueda 2 no es correcto!");
        num_errores++;
    }
    if (!isValidDiameter(Number(diam_wheel3))) {
        alert("El diámetro de la rueda 3 no es correcto!");
        num_errores++;
    }
    if (!isValidDiameter(Number(diam_wheel4))) {
        alert("El diámetro de la rueda 4 no es correcto!");
        num_errores++;
    }
    if (num_errores > 0) {
        alert("Introduce valores válidos!");
        return false;
    }
    var wheel1 = new Wheel(Number(diam_wheel1), (brandWheel1));
    var wheel2 = new Wheel(Number(diam_wheel2), (brandWheel2));
    var wheel3 = new Wheel(Number(diam_wheel3), (brandWheel3));
    var wheel4 = new Wheel(Number(diam_wheel4), (brandWheel4));
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    showWheels();
    hideWheelsForm();
}
function isValidDiameter(diameter) {
    event.preventDefault();
    if (diameter >= 0.4 && diameter <= 2) {
        return true;
    }
    else {
        return false;
    }
}
function showWheels() {
    //Info des les rodes que es mostrarà per pantalla. WheelsInfo son els paragrafs html.
    var wheelsInfo1 = document.getElementById("wheelsInfo1");
    var wheelsInfo2 = document.getElementById("wheelsInfo2");
    var wheelsInfo3 = document.getElementById("wheelsInfo3");
    var wheelsInfo4 = document.getElementById("wheelsInfo4");
    wheelsInfo1.innerText = "Rueda 1 Diámetro:  " + car.wheels[0].diameter + ", Marca: " + car.wheels[0].brand + ". ";
    wheelsInfo2.innerText = "Rueda 2 Diámetro:  " + car.wheels[1].diameter + ", Marca: " + car.wheels[1].brand + ". ";
    wheelsInfo3.innerText = "Rueda 3 Diámetro:  " + car.wheels[2].diameter + ", Marca: " + car.wheels[2].brand + ". ";
    wheelsInfo4.innerText = "Rueda 4 Diámetro:  " + car.wheels[3].diameter + ", Marca: " + car.wheels[3].brand + ". ";
}
function hideWheelsForm() {
    document.getElementById("wheelForm").style.display = "none";
}
/*
function createWheel(diameter: number, brand: string){
    car.addWheel(new Wheel(diameter,brand));
}
*/ 
