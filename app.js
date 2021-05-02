// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
    
})();

//Санхүүтэй ажиллах контроллер
var financeController = (function(){})();


//Програмыг холбогч контроллер
var appController = (function(uiController,financeController){

    var ctrlAddItem = function(){
         //1. oruulah ugugdliig delgetsnees olj  avna.
         //2. olj avsan ogogdluudee sanhuugiin controllert damjuulj tend hadgalna.
         //3. olj avsan ogogdluudee web deeree tohiroh hesegt gargana
         //4. Tusviig tootsoolno.
         //5. etssiin uldegdel, tootsoog delgetsend gargana.

    }
    document.querySelector('.add__btn').addEventListener('click',function(){
        console.log("clicked");
        ctrlAddItem();
    });

    document.addEventListener('keypress',function(event){
    
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

 })(uiController, financeController);
