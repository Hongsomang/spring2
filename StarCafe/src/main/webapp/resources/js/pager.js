/**
 * 
 */
let pager;

window.onload = ()=>{
    getPage(1);
   
};
function getPage(page){
    //fetch 를 실행하겠습니다.
    //이주소로 패치를 해라 정상정으로 실행되면 콘솔에 입력이 되어라
    //fetch 는 promise이다.
    fetch(`/api/product?page=${page}`)
    .then(resp => resp.json())
    .then(result =>{ 
    	//onClickListener 는 새로 생경나는거라서 
        document.querySelector(".pagination .page-next").onclick = e =>  getPage(result.pager.next);
        document.querySelector(".pagination .page-prev").onclick = e =>  getPage(result.pager.prev);
        document.querySelector(".pagination .page-last").onclick = e =>  getPage(result.pager.last);
        document.querySelector(".pagination .page-first").onclick = e =>  getPage(1);
        
        console.log(result.pager.page);
        const tbody=document.querySelector("#list");

        tbody.querySelectorAll(".item").forEach(element =>{
            element.remove();
        });

        if(result.list.length <1){
            document.querySelector("#empty_list").classList.remove("hide");
            
        }
        else{
            document.querySelector("#empty_list").classList.add("hide");
          
        }

      

        result.list.forEach(element => {
            console.log(element);
            const tr=document.createElement("tr");
            tr.classList.add("item");
            
            const id=document.createElement("td");
            id.textContent=element.id;
            tr.append(id);

            const name=document.createElement("td");
            name.textContent=element.name;
            tr.append(name);
            

            const price=document.createElement("td");
            price.textContent=element.price+"원";
            tr.append(price);

            const category=document.createElement("td");
            category.textContent=element.category_;
            tr.append(category);

            const status=document.createElement("td");
            status.textContent=element.status_;
            tr.append(status);

            const manage=document.createElement("td");
            
            const delete_btn=document.createElement("a");
            delete_btn.text="삭제";
            delete_btn.classList.add("btn","btn-danger");
            manage.append(delete_btn);
            const update_btn=document.createElement("a");
            update_btn.text="변경";
            update_btn.classList.add("btn","btn-warning");
            manage.append(update_btn);
            tr.append(manage);
           

            tbody.append(tr);
        });
        
    });

    console.log("완료");
}