


//Gafst upp, virkar ekki!


var Questions = function(question, answers, correctAnswer){
    this.question = question;
    this.answer = answers;
    this.correctAnswer = correctAnswer
}

var svar = -1;
var spurning1 = new Questions('Hvað segir kallinn?',['0: ha?', '1: jájá', '2:ÞETTA ER BEGGI MAÐUR'], 2);
var spurning2 = new Questions('Hvaða leikur er bestur?', ['0:Minecraft', '1:Terraria', '2:Spore', '3:Life', '4:Metal Gear Solid'], 1);

var spurningar = [spurning1, spurning2];
var randomSpurning = -1;

var score = 0;

var spurningDisplay = function(){
    randomSpurning = Math.floor(Math.random()*spurningar.length);
    var spurningin = spurningar[randomSpurning];
    console.log(spurningin.question);
    for(var i = 0; i < spurningin.answer.length; i++){
        console.log(spurningin.answer[i]);
    }
    console.log('Score: ' + score);
    userinn();
}

var userinn = function(){
    var spurn = spurningar[randomSpurning]
    svar = prompt(spurn.question + '\n skrifaðu exit ef þú vilt hætta');
    if(svar != 'exit' || svar != 'Exit' || svar != 'EXIT' || svar != -1){
        if(svar === spurn.answer){
            score += 1;
            console.log('Rétt svar!');
            console.log('Score: ' + score);
            spurningDisplay();
        }else{
            console.log('Ekki rétt! pepe hands');
            console.log('Score: ' + score);
            spurningDisplay();
        }
        console.log(svar);
    }else{
        console.log('Takk fyrir að spila')
    }
}

spurningDisplay();