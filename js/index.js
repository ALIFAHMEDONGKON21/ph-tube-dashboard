const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data=>displayCategories(data.categories))
    .catch((error) => console.log(error));
    
}


const loadCategoryVideos=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res =>res.json())
    .then(data=>displayVideos(data.category))
    .catch((error) => console.log(error));
}


const displayCategories=(categories)=>{

    const categori_container=document.getElementById('categories')
    

    categories.forEach(item => {
    console.log(item)
       
        const button_container=document.createElement('div');
        button_container.innerHTML=`
        <button onclick=loadCategoryVideos(${item.category_id}) class="btn">
        ${item.category}
        </button>
        `
        
        categori_container.append(button_container)


    });
}

const loadVideos=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res =>res.json())
    .then(data=>displayVideos(data.videos))
    .catch((error) => console.log(error));

}

const displayVideos=(video)=>{
    console.log(video)
    const videos_container=document.getElementById('Videos');
    videos_container.innerHTML="";

    video.forEach(item =>{
        console.log(item)

        const card=document.createElement('div')
        card.classList="card card-compact"
        card.innerHTML=`
        <figure>
    <img
      src="${item.thumbnail}"
      alt="Shoes" />
      </figure>
     <div class="card-body">
     <h2 class="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
     </div>
  </div>
        `
    videos_container.append(card)

    })
}


loadVideos();
loadCategories()