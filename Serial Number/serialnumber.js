function allSensor() {
    let sensor1234 = ["02080008000100005", "02080008000100006", "02090008000100008", "02090009000100012"];
    for (let i = 0; i < sensor1234.length; i++) {
        console.log(sensor1234[i].substring(0, 9));
    }
}

allSensor()