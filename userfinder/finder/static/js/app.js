let searchbar=document.getElementById('searchbar')
let resultnabar=document.getElementById('resultbar')
let content=document.getElementById('content')


searchbar.addEventListener('keyup',()=>{
    getUser(searchbar.value)
})


function getUser(user){
    
        resultnabar.innerHTML=user
        console.log(user)
        let xhr=new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/'+user);
        xhr.onload=function(){
            result=JSON.parse(xhr.responseText)
            if(xhr.status==200){
                content.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="${result.avatar_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${result.name}</h5>
              <p>${result.location}</p>
              <p>${result.bio}</p>

              
            </div>
          </div>
        </div>
      </div>
        
        `
            }
            else{
                console.log('not found')
            }
        
    }
    xhr.send()
}

