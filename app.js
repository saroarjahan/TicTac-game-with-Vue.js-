new Vue({
  el: '#app',
  data: {
    box1:'',
    box2:'',
    box3:'',
    box4:'',
    box5:'',
    box6:'',
    box7:'',
    box8:'',
    box9:'',
    count:0,
    oddAndEven:'',
    box1Glow:'',
    box2Glow:'',
    box3Glow:'',
    box4Glow:'',
    box5Glow:'',
    box6Glow:'',
    box7Glow:'',
    box8Glow:'',
    box9Glow:'',
    show:false,
    winSign:'',
    noWin:'',
    clickOff:'',
  },
  methods:{

    box_1:function(){
     if (this.box1=='' && this.clickOff=='') {
       this.count++;
       this.oddAndEven = this.oddOrEven(this.count);
       if (this.oddAndEven==='odd') {
          this.box1='fa-times';    
       } 
       else{this.box1='fa-check';}
       this.result();
     }
    },
    box_2:function(){ 
     if (this.box2=='' && this.clickOff=='') {    
       this.count = this.count+1;
       this.oddAndEven = this.oddOrEven(this.count);
       if (this.oddAndEven==='odd') {
          this.box2='fa-times';
       } 
       else{this.box2='fa-check';}
       this.result();
     }
    },
    box_3:function(){     
     if (this.box3=='' && this.clickOff=='') {
         this.count = this.count+1;
         this.oddAndEven = this.oddOrEven(this.count);
         if (this.oddAndEven==='odd') {
            this.box3='fa-times';
         } 
         else{this.box3='fa-check';}
         this.result();
      }
    },  
    box_4:function(){
     if (this.box4=='' && this.clickOff=='') {     
         this.count = this.count+1;
         this.oddAndEven = this.oddOrEven(this.count);
         if (this.oddAndEven==='odd') {
            this.box4='fa-times';
         } 
         else{this.box4='fa-check';}
         this.result();
      }
    },  
    box_5:function(){ 
    if (this.box5=='' && this.clickOff=='') {    
         this.count = this.count+1;
         this.oddAndEven = this.oddOrEven(this.count);
         if (this.oddAndEven==='odd') {
            this.box5='fa-times';
         } 
         else{this.box5='fa-check';}
         this.result();
     }
    },  
    box_6:function(){ 
    if (this.box6=='' && this.clickOff=='') {    
         this.count = this.count+1;
         this.oddAndEven = this.oddOrEven(this.count);
         if (this.oddAndEven==='odd') {
            this.box6='fa-times';
         } 
         else{this.box6='fa-check';}
         this.result();
     }
    },  
    box_7:function(){
     if (this.box7=='' && this.clickOff=='') {     
         this.count = this.count+1;
         this.oddAndEven = this.oddOrEven(this.count);
         if (this.oddAndEven==='odd') {
            this.box7='fa-times';
         } 
         else{this.box7='fa-check';}
         this.result();
     }
    },
    box_8:function(){
    if (this.box8=='' && this.clickOff=='') {     
       this.count = this.count+1;
       this.oddAndEven = this.oddOrEven(this.count);
       if (this.oddAndEven==='odd') {
          this.box8='fa-times';
       } 
       else{this.box8='fa-check';}
       this.result();
     }
    },
    box_9:function(){  
     if (this.box9=='' && this.clickOff=='') {   
       this.count = this.count+1;
       this.oddAndEven = this.oddOrEven(this.count);
       if (this.oddAndEven==='odd') {
          this.box9='fa-times';
       } 
       else{this.box9='fa-check';}
       this.result();
     }
    },    
    oddOrEven:function(x){
      return ( x & 1 ) ? "odd" : "even";
    },
    result:function(){
      if (this.box1===this.box2 &&  this.box3===this.box2 && this.box1 !='' ) {
        this.box1Glow = this.box2Glow = this.box3Glow='glow';
        this.show=true;
        this.winner(this.box1);
      } 
      else if(this.box1===this.box4 &&  this.box4===this.box7 && this.box1 !='') {
        this.box1Glow = this.box4Glow = this.box7Glow ='glow';
        this.show=true;
        this.winner(this.box1);
      } 
      else if(this.box3===this.box6 &&  this.box6===this.box9 && this.box3 !='') {
        this.box3Glow = this.box6Glow = this.box9Glow ='glow';
        this.show=true;
        this.winner(this.box3);
      } 
      else if(this.box2===this.box5 &&  this.box5===this.box8 && this.box2 !='') {
        this.box2Glow = this.box5Glow = this.box8Glow ='glow';
        this.show=true;
        this.winner(this.box2);
      }
       else if(this.box4===this.box5 &&  this.box5===this.box6 && this.box4 !='') {
        this.box4Glow = this.box5Glow = this.box6Glow ='glow';
        this.show=true;
        this.winner(this.box4);
      }
      else if(this.box4===this.box5 &&  this.box5===this.box6 && this.box4 !='') {
        this.box4Glow = this.box5Glow = this.box6Glow ='glow';
        this.show=true;
        this.winner(this.box4);
      }
      else if(this.box7===this.box8 &&  this.box8===this.box9 && this.box7 !='') {
        this.box7Glow = this.box8Glow = this.box9Glow ='glow';
        this.show=true;
        this.winner(this.box7);
      }
      else if(this.box1===this.box5 &&  this.box5===this.box9 && this.box1 !='') {
        this.box1Glow = this.box5Glow = this.box9Glow ='glow';
        this.show=true;
        this.winner(this.box1);
      }
       else if(this.box3===this.box5 &&  this.box5===this.box7 && this.box3 !='') {
        this.box3Glow = this.box5Glow = this.box7Glow ='glow';
        this.show=true;
        this.winner(this.box3);
      }
        else if(this.box1!='' && this.box2!='' && this.box3 !='' && this.box4 !='' && this.box5 !='' &&
        this.box6 !='' && this.box7!='' && this.box8 !='' && this.box9 !='' ) {
        this.show=true;
        this.noWin="Nobody";       
      }
    },
    playAgain:function(){
          this.box1=this.box2=this.box3=this.box4=this.box5=this.box6=this.box7=this.box8=this.box9='';
          this.count = 0;
          this.oddAndEven = '';
          this.box1Glow=this.box2Glow=this.box3Glow=this.box4Glow=this.box5Glow=this.box6Glow=this.box7Glow=this.box8Glow=this.box9Glow = '';
          this.show = false;
          this.noWin='';
          this.winSign='';
          this.clickOff='';
    },
    winner:function(sign){
      this.winSign = sign;
      this.clickOff="off";
    },  
  }
});
