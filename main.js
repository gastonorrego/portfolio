const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }

    });
    
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((e1) => observer.observe(e1));



function Experiencia(){
    console.log('prueba');

}

function delegacion(e){
    e.preventDefault();
    let nombreLenguaje=e.target.id;
   let botonExp = document.querySelector('#botonExp');
    $('#botonExp').fadeIn(50)
    switch(nombreLenguaje){

        case('sql'):
        $('#botonExp').css("background","radial-gradient(at top left, rgb(0, 225, 255) 20%, rgb(0, 217, 255))");
        nombreLenguaje = 'sql';
        
        if(nombreLenguaje == 'sql'){
            botonExp.addEventListener('click',() =>{
                $('.expSQL').fadeIn(1000);
            
            
            
            });

        }
       
       
                break;
        
        case('js'):
        $('#botonExp').css("background","radial-gradient(at top left, rgb(235, 252, 1) 20%, rgb(241, 237, 2))");
        nombreLenguaje = 'js';
        if(nombreLenguaje == 'js'){
            botonExp.addEventListener('click',() =>{
                $('.expJS').fadeIn(1000);
            
            
            
            });
            

        }
      ;
        
        break;
        case('html'):
        nombreLenguaje = 'html';
        $('#botonExp').css("background","radial-gradient(at top left, rgb(255, 145, 0) 20%, rgb(255, 166, 0))");
        nombreLenguaje = 'html';
        if(nombreLenguaje == 'html'){
            botonExp.addEventListener('click',() =>{
                $('.expHTML').fadeIn(1000);
            
            
            
            });
            

        }
        ;
        
        
        break;
        case('css'):
        nombreLenguaje = 'css';
        $('#botonExp').css("background","radial-gradient(at top left, rgb(0, 4, 255) 20%, rgb(0, 26, 255))");
        nombreLenguaje = 'css';
        if(nombreLenguaje == 'css'){
            botonExp.addEventListener('click',() =>{
                $('.expCSS').fadeIn(1000);
            
            
            
            });
            

        }
       ;
        
        break;

        case('csharp'):
        nombreLenguaje = 'csharp';
        $('#botonExp').css("background","radial-gradient(at top left, rgb(204, 0, 255) 20%, rgb(204, 0, 255))");
        nombreLenguaje = 'csharp';
        if(nombreLenguaje == 'csharp'){
            botonExp.addEventListener('click',() =>{
                $('.expCsharp').fadeIn(1000);
            
            
            
            });
            

        }
      ;
        
        console.log('csharp')
        break
        

    }

}

function mostrarExperiencia(){

const imagenes = document.querySelector('#imagenes');

    
if(document.getElementById("botonExp")){

    
    console.log('ya existe')
}else{
    const botonPadre = document.querySelector('.esfera1');

    const botonExperiencia = document.createElement('btn');
    const exp =`<button id ="botonExp" class="item-button btn btn-success">EXPERIENCE</button>`
    botonExperiencia.innerHTML =exp;
    botonPadre.appendChild(botonExperiencia);
    
    $('#botonExp').css("display","flex");
    $('#botonExp').css("width","130px");
    $('#botonExp').css("height","130px");
    $('#botonExp').css("background-color","rgb(255, 255, 255");
    $('#botonExp').css("background","radial-gradient(at top left, rgb(12, 216, 216) 20%, rgb(107, 107, 107))");
    $('#botonExp').css("-ms-border-radius","50px");
    $('#botonExp').css("-webkit-border-radius","50px");
    $('#botonExp').css("-o-border-radius","50px");
    $('#botonExp').css("border-radius","50px");
    $('#botonExp').css("margin","60px auto");
    $('#botonExp').css("cursor","pointer");
    $('#botonExp').css("justify-content","center");
    $('#botonExp').css("align-items","center");
    $('#botonExp').css("font-size","17px");
    $('#botonExp').css("font-family","'Poppins', sans-serif");

    botonExperiencia.addEventListener('click',Experiencia)
    

}



}

const experiencia = document.querySelector('.imagenes');
experiencia.addEventListener('mouseover',mostrarExperiencia);
experiencia.addEventListener('mouseover',delegacion);

function borrarExperiencia(){
    $('#botonExp').fadeOut(50)
}
