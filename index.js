var wholeLine = [];

function takeANumber(katzDeliLine, name){
  var lastIndex = katzDeliLine.length - 1;
  katzDeliLine.push(katzDeliLine[lastIndex] + 1);
  wholeLine.push(katzDeliLine[lastIndex] + 1);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var firstInLine = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return 'The line is currently empty.'
  } else {
    var line = [];
    for(let i = 0; i < katzDeliLine.length; i++){
      line.push(` ${i+1}. ${katzDeliLine[i]}`)
    } return `The line is currently:${line.toString()}`;
  }
}
