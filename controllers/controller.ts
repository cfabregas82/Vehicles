let car: Car;

function createCar(plate:string, brand:string, color:string){
    return new Car(plate, color, brand);
}

//En prémer el botó "Create car" crea el cotxe, mostra els resultats i amaga carForm.   
function submitCar(){ 
    const platebox = (<HTMLInputElement>document.getElementById("plate")).value;
    const brandbox = (<HTMLInputElement>document.getElementById("brand")).value;
    const colorbox = (<HTMLInputElement>document.getElementById("color")).value;

    var plateValidation = (/^[0-9]{4}[a-zA-Z]{3}$/.test(platebox)); 
    if(!plateValidation){
        alert("Matricula incorrecta, introduce 4 números y 3 letras.");
        return false;
    }else if(brandbox == "" || colorbox == ""){
        alert("Todos los campos son necesarios.")
    }else{
        car = createCar(platebox, brandbox, colorbox);
        showCar();
        showWheelForm();
    }
}

function showCar(){ 
    const carinfo = (<HTMLInputElement>document.getElementById("carInfo"));
    carinfo.innerText = "Matrícula: " + car.plate + "  /  " + "Color: " + car.color + "  /  " + " Marca: " + car.brand;
}

function showWheelForm(){
    document.getElementById("carForm").style.display = "none";
    document.getElementById("wheelForm").style.display = "block";
    document.getElementById("titleInfo").style.display = "block";
}

//Condició general per validar el diàmetre de les rodes.
function testDiameter(diameter: number){
    if(diameter > 0.4 && diameter < 2){
        return true;
    }else{
        return false;
    }
}

function submitWheels(){    
    // Marca de les rodes
    var brandWheel1 = (<HTMLInputElement>document.getElementById("brandWheel1")).value;
    var brandWheel2 = (<HTMLInputElement>document.getElementById("brandWheel2")).value;
    var brandWheel3 = (<HTMLInputElement>document.getElementById("brandWheel3")).value;
    var brandWheel4 = (<HTMLInputElement>document.getElementById("brandWheel4")).value;

    // Diàmetre de les rodes
    var diam_wheel1 = Number((<HTMLInputElement>document.getElementById("wheel1")).value);
    var diam_wheel2 = Number((<HTMLInputElement>document.getElementById("wheel2")).value);
    var diam_wheel3 = Number((<HTMLInputElement>document.getElementById("wheel3")).value);
    var diam_wheel4 = Number((<HTMLInputElement>document.getElementById("wheel4")).value);

        if(!testDiameter(Number(diam_wheel1))){
            alert("El diámetro de la rueda 1 no es correcto!");
        }
        if(!testDiameter(Number(diam_wheel2))){
            alert("El diámetro de la rueda 2 no es correcto!");
        }
        if(!testDiameter(Number(diam_wheel3))){
            alert("El diámetro de la rueda 3 no es correcto!");
        }
        if(!testDiameter(Number(diam_wheel4))){
            alert("El diámetro de la rueda 4 no es correcto!");
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

function showWheels(){
    //Info des les rodes que es mostrarà per pantalla. WheelsInfo son els paragrafs html.
    const wheelsInfo1 = (<HTMLInputElement>document.getElementById("wheelsInfo1"));
    const wheelsInfo2 = (<HTMLInputElement>document.getElementById("wheelsInfo2"));
    const wheelsInfo3 = (<HTMLInputElement>document.getElementById("wheelsInfo3"));
    const wheelsInfo4 = (<HTMLInputElement>document.getElementById("wheelsInfo4"));

    wheelsInfo1.innerText = "Rueda 1 Diámetro:  " + car.wheels[0].diameter + ", Marca: " + car.wheels[0].brand + ". ";
    wheelsInfo2.innerText = "Rueda 2 Diámetro:  " + car.wheels[1].diameter + ", Marca: " + car.wheels[1].brand + ". ";
    wheelsInfo3.innerText = "Rueda 3 Diámetro:  " + car.wheels[2].diameter + ", Marca: " + car.wheels[2].brand + ". ";
    wheelsInfo4.innerText = "Rueda 4 Diámetro:  " + car.wheels[3].diameter + ", Marca: " + car.wheels[3].brand + ". ";
}

function hideWheelsForm(){
    document.getElementById("wheelForm").style.display = "none";
}

/*
function createWheel(diameter: number, brand: string){
    car.addWheel(new Wheel(diameter,brand));
}
*/