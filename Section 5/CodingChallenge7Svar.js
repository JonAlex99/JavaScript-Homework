

/*
//Fyrsta svar


(function(){

    function Question(question, anwers, correct){
        this.question = question;
        this.anwers = anwers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i<this.anwers.length; i++){
            console.log(i + ': ' + this.anwers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans){
        if (ans === this.correct){
            console.log('Rétt svar!');
        } else {
            console.log('Vitlaust svar, pepe hands')
        }
    }
    
    var q1 = new Question('Hvað er títt', ['No good vibes', 'Some good vibes', 'Many good vibes'], 0);
    var q2 = new Question('Hva?! ætlaru að væla', ['Já :(', 'Ha?... nei ;(', 'NEI!'], 0);
    var q3 = new Question('What is best game?', ['Terraria', 'Pokemon','Metal Gear'],1);
    
    var questions = [q1,q2,q3];
    
    var n = Math.floor(Math.random()*questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Veldu rétta svar'));
    
    questions[n].checkAnswer(answer);
})();

*/

//Seinna svar


(function(){

    function Question(question, anwers, correct){
        this.question = question;
        this.anwers = anwers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for(var i = 0; i<this.anwers.length; i++){
            console.log(i + ': ' + this.anwers[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        var sc;
        
        if (ans === this.correct){
            console.log('Rétt svar!');
            sc = callback(true);
        } else {
            console.log('Vitlaust svar, pepe hands')

            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
        console.log('Score: ' + score);
        console.log('------------------');
    }


    var q1 = new Question('Hvað er títt', ['No good vibes', 'Some good vibes', 'Many good vibes'], 0);
    var q2 = new Question('Hva?! ætlaru að væla', ['Já :(', 'Ha?... nei ;(', 'NEI!'], 0);
    var q3 = new Question('What is best game?', ['Terraria', 'Pokemon','Metal Gear'],1);
    

    var questions = [q1,q2,q3];

    function score() {
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();



    function nextQuestion(){
    
        var n = Math.floor(Math.random()*questions.length);
        
        questions[n].displayQuestion();
        
        var answer = prompt('Veldu rétta svar');
        
        if(answer !== 'exit'){
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
    
})();