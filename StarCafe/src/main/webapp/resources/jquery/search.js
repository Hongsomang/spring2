/**
 * 
 */
$(document).ready(function(){

    $(".keyword-all").prop("disabled",true);
    $("select[name=search]").change(e =>{

        console.log(e.target)
        $(".keyword-all").prop("disabled",true);
        $(`.keyword-${e.target.value}`).attr("disabled",false);
    });
    
   /* $('select[name=search]').change(function(){	
        
        


        const search=$(this).val();
        console.dir($(this));
        console.log(search);
        if(search==1|| search==2){
                $('.keyword-all').attr("disabled",true);
                $('.keyword-1').attr("disabled",false);
        }
        else if(search==3){
            $('.keyword-all').attr("disabled",true);
            $('.keyword-3').attr("disabled",false);
        }
        else if(search==4){
            $('.keyword-all').attr("disabled",true);
            $('.keyword-4').attr("disabled",false);
        }
        else if(search==5){
            $('.keyword-all').attr("disabled",true);
            $('.keyword-5').attr("disabled",false);
        }else{
            $('.keyword-all').attr("disabled",false);
        
        }
    });*/
});