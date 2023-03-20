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
        const name=document.querySelector("#addModal input[name='name']").value;
        const price=document.querySelector("#addModal input[name='price']").value;
        const category=document.querySelector("#addModal select[name='category']").value;
        const status=document.querySelector("#addModal select[name='status']").value;

        const item={name, price, category, status};
        console.log(item);

        fetch("/api/product",{
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
        const id=modal.querySelector("input[name='id']").value;
        const name=modal.querySelector("input[name='name']").value;
        const price=modal.querySelector("input[name='price']").value;
        const category=modal.querySelector("select[name='category']").value;
        const status=modal.querySelector("select[name='status']").value;

        const item={id,name,price,category,status};

        fetch("/api/product",{
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
            tr.querySelector(".name").textContent=result.name;
            tr.querySelector(".price").textContent=result.price+"원";
            tr.querySelector(".category").dataset.value=result.category;
            tr.querySelector(".category").textContent=result.category_;
            tr.querySelector(".status").dataset.value=result.status;
            tr.querySelector(".status").textContent=result.status_;

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

            const id=document.createElement("td");
            id.textContent=element.id;
            id.classList.add("id");
            tr.append(id);

            const name=document.createElement("td");
            name.textContent=element.name;
            name.classList.add("name");
            tr.append(name);
            

            const price=document.createElement("td");
            price.textContent=element.price+"원";
            price.classList.add("price");
            tr.append(price);

            const category=document.createElement("td");
            category.textContent=element.category_;
            category.dataset.value=element.category;
            category.classList.add("category");
            tr.append(category);

            const status=document.createElement("td");
            status.textContent=element.status_;
            status.dataset.value=element.status;
            status.classList.add("status");
            tr.append(status);

            const manage=document.createElement("td");
            
            const delete_btn=document.createElement("a");
            delete_btn.text="삭제";
            delete_btn.classList.add("btn","btn-danger");
            delete_btn.addEventListener("click", e =>{
                const id=e.target.parentNode.parentNode.dataset.id;
                console.log(id);
                fetch(`/api/product/${id}`,{
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
                const id=e.target.closest('tr');
                
                
                document.querySelector("#updateModal input[name= 'id']").value=tr.querySelector('.id').textContent;
                document.querySelector("#updateModal input[name= 'name']").value=tr.querySelector('.name').textContent;
                document.querySelector("#updateModal input[name= 'price']").value=parseInt( tr.querySelector('.price').textContent);
                const category=tr.querySelector('.category').dataset.value;
                document.querySelector(`#updateModal select[name='category'] option[value='${category}']`).selected=true;
                const status=tr.querySelector('.status').dataset.value;
                document.querySelector(`#updateModal select[name='status'] option[value= '${status}']`).selected=true;

                const modal =new bootstrap.Modal(document.getElementById("updateModal"));
                modal.toggle();
            });
            manage.append(update_btn);
            tr.append(manage);
           

            
            return tr;
}
