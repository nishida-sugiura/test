var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信
    $('form').submit(function () {
  
        var daytime2 = $('input[name="daytime2"]').val();
        


        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        

     


       msg = ["serial code【" + daytime2 +"】を送信しました。"] ;

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});





