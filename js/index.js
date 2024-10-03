const loadCategories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data=>displayCategories(data.categories
    ))

    .catch(console.error('NOT FOUND'));
    
}


const displayCategories=(data)=>{
    console.log(data)
}

loadCategories()