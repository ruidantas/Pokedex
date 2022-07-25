let page = 20

async function getPokemon(qtd = 0) {

   const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${qtd}`);

   const data = await resp.json();


   data.results.forEach( async function(a) {
       const resp2 = await fetch(a.url);
       
       const data2 = await resp2.json();
      

       const resp3 = await fetch(data2.species.url)
       
       const data3 = await resp3.json();
       console.log(data2);
      
        let descricao = ""

        for(let i = 0; i <500; i++){
         if(data3.flavor_text_entries[i].language.name == "en"){
            descricao = data3.flavor_text_entries[i].flavor_text

            break
         }
       }
       
       descricao = descricao.replace("", "")
       
       let type1 = ""
       let type2 = ""
       

        try{
           type1 = data2.types[0].type.name
        } catch(b){
           type1 = ""
        }

        try{
           type2 = data2.types[1].type.name
        } catch(b){
           type2 = ""
        }

        let habilidade1 = ""
        let habilidade2 = ""
        let habilidade3 = ""

        try{
           habilidade1 = data2.abilities[0].ability.name
        } catch(b) {
           habilidade1 = ""
        }
        
        try{
           habilidade2 = data2.abilities[1].ability.name
        } catch(b) {
           habilidade2 = "NONE"
        }

        try{
           habilidade3 = data2.abilities[2].ability.name
        } catch(b) {
           habilidade3 = "NONE"
        }


        



        function types(type){
           if (type.toLowerCase()=="bug"){
            
              return `<h2 class="type" style="background-color: green;">BUG</h2>` 
              
           } 
           
           if (type.toLowerCase()=="fairy"){
              
              return `<h2 class="type" style="background-color: #de0d90;">FAIRY</h2>`
           } 

           if (type.toLowerCase()=="fire"){
              
              return `<h2 class="type" style="background-color: #de680d; color:black">FIRE</h2>`
           } 

           if (type.toLowerCase()=="ghost"){
              
              return `<h2 class="type" style="background-color: #634e84;">GHOST</h2>`
           } 

           if (type.toLowerCase()=="poison"){
              
              return `<h2 class="type" style="background-color: #683277;">POISON</h2>`
           } 

           if (type.toLowerCase()=="ice"){
              
              return `<h2 class="type" style="background-color: #167d9c;">ICE</h2>`
           } 

           if (type.toLowerCase()=="normal"){
              
              return `<h2 class="type" style="background-color: #4c5255; ">NORMAL</h2>`
           } 

           if (type.toLowerCase()=="psychic"){
              
              return `<h2 class="type" style="background-color: #920c5a; ">PSYCHIC</h2>`
           } 

           if (type.toLowerCase()=="steel"){
              
              return `<h2 class="type" style="background-color: #435b5c;">STEEL</h2>`
           } 

           if (type.toLowerCase()=="dark"){
              
              return `<h2 class="type" style="background-color: #586064;">DARK</h2>`
           } 
           
           if (type.toLowerCase()=="electric"){
              
              return `<h2 class="type" style="background-color: #84750c;">ELECTRIC</h2>`
           } 

           if (type.toLowerCase()=="ground"){
              
              return `<h2 class="type" style="background-color: #908038;">GROUND</h2>`
           } 

           if (type.toLowerCase()=="fighting"){
              
              return `<h2 class="type" style="background-color: #b3561d;">FIGHTING</h2>`
           } 

           if (type.toLowerCase()=="rock"){
              
              return `<h2 class="type" style="background-color: #89761b;">ROCK</h2>`
           } 

           if (type.toLowerCase()=="water"){
              
              return `<h2 class="type" style="background-color: #32749e; ">WATER</h2>`
           } 

           if (type.toLowerCase()=="grass"){
              
              return `<h2 class="type" style="background-color: #5a7122;">GRASS</h2>`
           } 

           if (type.toLowerCase()=="flying"){
              
              return `<h2 class="type" style="background: rgb(14,137,172);
              background: linear-gradient(180deg, rgba(14,137,172,1) 50%, rgba(66,71,75,1) 50%); ">FLYING</h2>`
           } 

           if (type.toLowerCase()=="dragon"){
              
              return `<h2 class="type" style="background: rgb(42,112,150);
              background: linear-gradient(180deg, rgba(42,112,150,1) 50%, rgba(155,35,13,1) 50%);">DRAGON</h2>`
           } 

           if (type == "") {

              return `<h2></h2>`
           }
        }
        
        
        


        const hp = `${data2.stats[0].stat.name}: ${data2.stats[0].base_stat}`;
       const atk = `ATK: ${data2.stats[1].base_stat}` 
       const def = `DEF: ${data2.stats[2].base_stat}`
       const atk_s = `SP-ATK: ${data2.stats[3].base_stat}` 
       const def_s = `SP-DEF: ${data2.stats[4].base_stat}`
       const speed = `${data2.stats[5].stat.name}: ${data2.stats[5].base_stat}`

       document.querySelector("main").insertAdjacentHTML("beforeend", `
       <div class="card"><img src="${data2.sprites.other["official-artwork"].front_default}" alt="Pokemons" >
       <h2 class="nomecard">${data2.name}</h2> 
       <p class="id">ID: ${data2.id}</p> 
       <div class="tipodiv">
          ${types(type1)}
          ${types(type2)}
       </div>
       <button class="botao" type="button" onclick="abrirdescricao()">Descrição</button>
       <span class="modal-card">
       <section id="character-list">
       <div class="card-centro">
       <img src="${data2.sprites.other.dream_world.front_default}" alt="Pokemons" >
       <div class="info">
           
            <div class="type-modal-div">
               ${types(type1)}
                 ${types(type2)}
            </div>
          
           <div class="status">
              <p class="hp">${hp}</p>
              <p class="atk">${atk}</p>
              <p class="def">${def}</p>
              <p class="s-atk">${atk_s}</p>
              <p class="s-def">${def_s}</p>
              <p class="speed">${speed}</p>
           </div>
          
           <div class="habilidades-div">
              <p class="habilidade1">${habilidade1}</p>
              <p class="habilidade2">${habilidade2}</p>
              <p class="habilidade3">${habilidade3}</p>
           </div>
            
           <div class="descricao">${descricao}</div  
       </div>
       <button class="botaofechar" type="button" onclick="fechardescricao()">Close</button>
   </div>
   </section>
       </span>


       </div>
       `)
       
      


   });
   
}
getPokemon()

function abrirdescricao() {

  const botao = document.querySelectorAll(".botao")

  for (let a of botao) {
     a.addEventListener("click", function (){
        const pai = a.parentElement
        
        const span = pai.querySelector(".modal-card");
        span.style.display="unset"

     })

  }

}

function fechardescricao(){
const fecharBotao = document.querySelectorAll("span")

for (let b of fecharBotao) { 
     b.style.display="none"


}


}

function verMais(){
   getPokemon(page)
   page += 20  
}