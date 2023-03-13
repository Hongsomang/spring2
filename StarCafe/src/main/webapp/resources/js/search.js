/**
 * 
 */
 
 $(document).ready(function(){
			/*document.querySelector("select[name='search']").addEventListener("change",e=>{
				document.querySelectAll(".keyword-all").forEach(item =>{
					item.disabled=true;});

				const item=e.target[e.target.selectedIndex];
				alter(item.textcontent);

				document.querySelectAll(".keyword-all").forEach(item =>{
					item.disabled=true;});
					
				document.querySelectAll(".keyword-"+value).forEach(item =>{
					item.disabled=true;});
				})
			});*/
			
			$('select[name=search]').change(function(){				
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
			});
		});