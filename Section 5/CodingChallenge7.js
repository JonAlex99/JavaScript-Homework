var Questions = function(question, answers, correctAnswer){
    this.question = question;
    this.answer = answers;
    this.correctAnswer = correctAnswer
}

var spurning1 = new Questions('Hvað segir kallinn?',['0: ha?', '1: jájá', '2:ÞETTA ER BEGGI MAÐUR'], 2);
var spurning2 = new Questions('Hvaða leikur er bestur?', ['0:Minecraft', '1:Terraria', '2:Spore', '3:Life', '4:Metal Gear Solid'], 1);

var spurningar = [spurning1, spurning2];

var spurningDisplay = function(){
    var randomSpurning = Math.floor(Math.random()*2);
    var spurningin = spurningar[randomSpurning];
    console.log(spurningin.question);
    for(var i = 0; i < spurningin.answer.length; i++){
        console.log(spurningin.answer[i]);
    }
}

spurningDisplay();
