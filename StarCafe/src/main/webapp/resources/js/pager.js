/**
 * 
 */
let pager;

window.addEventListener("load",()=>{
  

  

    document.getElementById("add").addEventListener("click", e =>{
        const modal =new bootstrap.Modal(document.getElementById("addModal"));

        modal.toggle();
    });


    document.querySelector("#addModal .submit").addEventListener("click",e =>{
       

        const item={};
        document.querySelectorAll("#addModal .pager-item").forEach(element =>{
           item[element.name]=element.value; 
        });
       
        console.log(item);

        fetch(pager_url,{
            method: "POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(item)
        })
        .then(resp => {
            if(resp.status==200)
                return resp.json()   
        })
        .then(result =>{
            console.log(result);  
           const tbody=document.querySelector("#empty_list");
           const item= makeItem(result);
           console.log(tbody);
           console.log(item);

           tbody.after(item);   
           
        });

        alert("등록");

    });

 

    document.querySelector("#updateModal .submit").addEventListener("click",e =>{
        const modal=document.querySelector("#updateModal");
        
        const item ={};
        document.querySelectorAll("#updateModal .pager-item").forEach(element =>item[element.name]=element.value);


        fetch(pager_url,{
            method:"PUT",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(item)
        }).then(resp =>{
            if(resp.status==200){
               
                return resp.json();
            }
        }).then(result =>{
            console.log(result);
            const tr=document.querySelector(`#list tr[data-id='${result.id}']`);
            pager_item.forEach(item =>{
                if(item.select ){
                    tr.querySelector(`.${item.name}`).dataset.value=result[item.name];
                    tr.querySelector(`.${item.name}`).textContent=result[`${item.name}_`];
                }else{
                    tr.querySelector(`.${item.name}`).textContent = result[item.name];	  
                    if(item.suffix){
                        tr.querySelector(`.${item.name}`).textContent += item.suffix;
                    }
                }
                
            });

        });


        alert("변경");
        
    });

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
    let url=`${pager_url}?page=${page}`;
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
            const item=makeItem(element);  
            tbody.append(item);
        });
        
    });

    console.log("완료");
}
function makeItem(element){
    const tr=document.createElement("tr");
            tr.classList.add("item");
            tr.dataset.id=element.id;

            makeField(tr, element);

            const manage=document.createElement("td");
            
            const delete_btn=document.createElement("a");
            delete_btn.text="삭제";
            delete_btn.classList.add("btn","btn-danger");
            delete_btn.addEventListener("click", e =>{
                const id=e.target.parentNode.parentNode.dataset.id;
                console.log(id);
                fetch(`${pager_url}/${id}`,{
                    method:"DELETE"
                }).then(resp =>{
                    if(resp.status ==200){
                        document.querySelector(`#list tr[data-id='${id}']`).remove();
                    }
                }).then(result =>{
                    
                });
                alert("삭제");
            })
            manage.append(delete_btn);
            const update_btn=document.createElement("a");
            update_btn.text="변경";
            update_btn.classList.add("btn","btn-warning","update");
            update_btn.addEventListener("click", e =>{
                const tr=e.target.closest('tr');
                
                document.querySelectorAll("#updateModal .pager-item").forEach(element =>{
                    if(element.localName == "input"){
                        if(element.type =="number"){
                             element.value=parseInt(tr.querySelector(`.${element.name}`).textContent);
                        }
                        else{
                            element.value=tr.querySelector(`.${element.name}`).textContent;	
                        }
                            
                     }
                        
                    else if(element.localName == "select"){
                        const value =tr.querySelector(`.${element.name}`).dataset.value
                        document.querySelector(`#updateModal option[value='${value}']`).selected=true;
                    }
                 });

                const modal =new bootstrap.Modal(document.getElementById("updateModal"));
                modal.toggle();
            });
            manage.append(update_btn);
            tr.append(manage);
           

            
            return tr;
}
