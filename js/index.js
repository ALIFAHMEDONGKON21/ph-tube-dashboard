const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data=>displayCategories(data.categories
    ))
    .catch(console.error('NOT FOUND'));
    
}


const displayCategories=(categories)=>{

    const categori_container=document.getElementById('categories')
    console.log(categories);

    categories.forEach(item => {
        console.log(item)
        const button=document.createElement('button');
        button.classList='btn';
        button.innerText=item.category;
        
        categori_container.append(button)


    });


}

loadCategories()