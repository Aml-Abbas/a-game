var score=0 ;
var playerchoice;

var deal= {
    '0' : 'Rock',
'1': 'Paper',
'2' : 'Scissors'
};

var cpuchoice = {
    init : function(){

    this.store= Math.floor(Math.random()*3);
    this.text = deal[this.store];
},
store:'',
text: ''
};
 
var order=[0,1,2,0];

var choosewinner= function(player, cpu){
    if(order[player]===order[cpu] ){
    return 'Same choice. Plz, choose again.';
}
    else if ( order[player]===order[cpu +1]){
        score++;
        return 'You won, yeah!';
      
    }
    else {
        score--;
        return 'You lost, try again';
  
    }
}
var paragraph= document.querySelector('p');

var assignclick= function(tag , pos){
    tag.addEventListener('click',function(){
playerchoice = pos;
cpuchoice.init();
paragraph.innerHTML= 'The computer chose: '+ cpuchoice.text + '<br>' + choosewinner(playerchoice,cpuchoice.store)+ '<br>'+ 'Score is '+ score;
 });
}

var images= {
    tags: document.getElementsByTagName('img'),
    init: function(){
        for ( var i=0; i<this.tags.length;i++){
            assignclick(this.tags[i], i);
        }
    }
}
images.init();