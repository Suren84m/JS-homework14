class VehicleErr extends Error{
    constructor(message,max,min){
        super(message)
        this.max = max;
        this.min = min;
        this.name = 'Fuel Error';
    }
};
class carError extends Error{
    constructor(message){
        super(message);
        this.name = 'Door Error';
    }

};
class truckError extends Error{
    constructor(message){
        super(message);
        this.name = 'Color Error'
    }
};
class wagonError extends Error{
    constructor(message){
        super(message);
        this.name = 'Color Error'
    }
};


class Vehicle{
    maxFuel = 100;
    minFuel = 3;
    vehicleAddFuel(value) {
        if(value>this.maxFuel){
            throw new VehicleErr('Max amount is' + this.maxFuel,this.maxFuel)
        }
        if(value<=this.minFuel){
            throw new VehicleErr(this.minFuel +' '+ 'Liters is too little' + ' '+'You need fuel immediately',this.minFuel)
        }
    }
    wheels; 
    carMirrors; 
    set hood (value) {
        this._hood = value;
    };
    get hood() {
        return this.hood;
    };
    set bumper (value) {
        this._bumper = value;
    };
    get bumper() {
    return this.bumper;
    };
    #steeringWheel;
    #windshieldWipers;
    #headLight;
    }
    
    class Car extends Vehicle{
        engin; 
        door = 4;
        doorCount(value){
            if(value>this.door){
                throw new carError('The car has only' + ' ' + this.door + ' ' + 'doors')
            }
        }
        set trunk(value){
            this._trunk = value;
        };
        get trunk(){
            return this.trunk;
        }
        #windscreen;
        #bucketSeat;
        
        }
    
    class Truck extends Vehicle{
    fuelTank;
    color = 'bleck';
    colorType(value){
        if(value!=this.color){
            throw new truckError('The color must be black')
        }
    }
    set window(value) {
        this._window = value;
    };
    get window()  {
       return this.window;
    };
    #trailer;
    #step;
    }
    
    class Wagon extends Vehicle{
    ironTire;   
    woodWheels = true; 
    wheelsFan(value){
        if(value===false){
            throw new wagonError('At that time wheels were wooden')
        }
    }

    set bonnet(value) {
        this._bonnet = value;
    };
    get bonnet(){
        return this.bonnet;
    };
    #jockeyBox;
    #horse;
    }
    let err = new VehicleErr();
    
    let vehicle = new Vehicle();
    try {
        vehicle.vehicleAddFuel(110);

    } catch (error) {
        console.log(error.name);
        console.log(error.max);
        console.log(error.min);
        console.log(error.stack);
    }finally{
        console.log(vehicle);
    }

        let er = new carError();

        let car = new Car();

        try {
           car.doorCount(5); 
        } catch (error) {
            console.log(error.name);
            console.log(error.stack);
        }finally{
            console.log(car);
        };

        let err_1 = new truckError();

        let truck = new Truck();

        try {
            truck.colorType('red')
        } catch (error) {
            console.log(error.name);
            console.log(error.stack);
        }finally{
            console.log(truck);
        };

        let err_2 = new wagonError();
        
        let wagon = new Wagon();
        try {
            wagon.wheelsFan(false)
        } catch (error) {
            console.log(error.name);
            console.log(error.stack);
        }finally{
            console.log(wagon);
        }
    
   