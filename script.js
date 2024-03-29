// Implemente aqui as funções

function heightTest(gender, height){
    if (gender == 'male'){
        return height >= 1.70;
    } 
    return height >= 1.60;
}

function barTest(gender, barReps, barSeconds){
    if (gender == 'male'){
        return barReps >= 6 || barSeconds >= 15;
    }
    return barReps >= 5 || barSeconds >= 12;
}

function absTest(abs){
    return abs >= 41;
}

function runTest(gender, runDistance, runTime){
    if (gender == 'male'){
        return ((runDistance >= 3000 && runTime <= 720) || (runDistance >= 5000 && runTime <= 1200));
    }
    return ((runDistance >= 4000 && runTime <= 900) || (runDistance >= 6000 && runTime <= 1320));
}

function swimTest(swimDistance, swimTime, diveTime){
    return ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30);
}

function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime){
    let heightResult = heightTest(gender, height);
    let barResult = barTest(gender, barReps, barSeconds);
    let absResult = absTest(abs);
    let runResult = runTest(gender, runDistance, runTime);
    let swimResult = swimTest(swimDistance, swimTime, diveTime);
    
    return (heightResult && barResult && absResult && runResult && swimResult);
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    process.argv[2], // gender
    process.argv[3], // height
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);
// Chame aqui a função que mostra o resultado no console

function showMessage(message){
    console.log(message.toString().toUpperCase());
}

showMessage(areCandidateValid);