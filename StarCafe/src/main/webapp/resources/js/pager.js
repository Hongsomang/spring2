/**
 * 
 */
let pager;

window.addEventListener("load",()=>{
    getPage(1);

    document.getElementById("search").addEventListener("click",e =>{
        const search =document.querySelector("select[name=search]").value;
        const keyword=document.querySelector("input[name=keyword]").value;
        const minPrice=document.querySelector("input[name=minPrice]").value;
        const maxPrice=document.querySelector("input[name=maxPrice]").value;
        const category=document.querySelector("select[name=category]").value;
        const status=document.querySelector("select[name=status]").value;

        if(search ==1 || search ==2){
            getPage(1,{search,keyword});
        }
        else if(search ==3){
            getPage(1,{search,minPrice,maxPrice})
        }
        else if(search ==4){
            getPage(1,{search,category});
        }
        else if(search ==5){
            getPage(1,{search,status});
        }
    });
   
});

function getPage(page,query){
    let url=`/api/product?page=${page}`;
    if(query)
       url += "&"+new URLSearchParams(query).toString();

    console.log(url);

    //fetch 를 실행하겠습니다.
    //이주소로 패치를 해라 정상정으로 실행되면 콘솔에 입력이 되어라
    //fetch 는 promise이다.
    fetch(url)
    .then(resp => resp.json())
    .then(result =>{ 
    	//onClickListener 는 새로 생경나는거라서 
        document.querySelector(".pagination .page-next").onclick = e =>  getPage(result.pager.next,query);
        document.querySelector(".pagination .page-prev").onclick = e =>  getPage(result.pager.prev,query);
        document.querySelector(".pagination .page-last").onclick = e =>  getPage(result.pager.last,query);
        document.querySelector(".pagination .page-first").onclick = e =>  getPage(1);
        
        const pagination=document.querySelector(".pagination .page-next");

        document.querySelectorAll(".pagination .page-list").forEach(element => element.remove());

        result.pager.list.forEach(element =>{
            console.log(element);

            const li =document.createElement("li");
            li.classList.add("page-item","page-list");

            const link=document.createElement("div");
            link.classList.add("page-link");
            link.textContent=element;
            
            if(element ==result.pager.page){
                link.classList.add("active");
            }

            link.addEventListener("click",e => getPage(element,query));

            li.append(link);
            pagination.before(li);
        });

        console.log("page=",result.pager.page);
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