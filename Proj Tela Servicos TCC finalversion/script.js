
let starBtn = document.querySelector('#Openbutton')
let form = document.querySelector('.formArea')
let text = document.querySelector('.topText')
let btnabrirModal = document.getElementById('open-modal')
let areaService = document.querySelector('.Services')
let id = 0
let body = document.querySelector('body')

function Start(){
    //animação inicial
    form.classList.add('StartClass')
    starBtn.style.display = 'none'
    text.innerHTML = "Começe os Trabalhos!"

    

}

function mostrarModal(){
    abrirModal.style.display = 'flex'
    //setTimeout(mostrarModal, 2000)

}

function EnviarForm(){
    let nomeCliente =document.getElementById('nameClient').value
    let cpfCliente =document.getElementById('CPfClient').value
    let enderecoCliente =document.getElementById('endressClient').value
    let idadeCliente =document.getElementById('ageClient').value
    let contatoCliente =document.getElementById('contactClient').value
    let emailCliente =document.getElementById('emailClient').value
    let carroModelo =document.getElementById('modelCar').value
    let carroPlaca =document.getElementById('plateCar').value
    let corCarro =document.getElementById('colorCar').value
    let anoFabricacao =document.getElementById('fabricationAge').value
    let motoriazacao =document.getElementById('carEnginne').value

    id++
    
    let lista = `<div class="modal" id ="Modal">
        <div class="mainModal">

          <div class= "modalTopText">
          <h2 class="modalName" id>${nomeCliente}</h2>
          </div>
          
      <button id="open-modal" onclick="abrirModal('Modal-${id}')">Abrir</button>
      <button id="removeService" onclick = "removeService()">Remover</button>
   
        <dialog id="Modal-${id}" class = "Modal-List">
            

        <div class="content">
          <label id="nameClient-serviceArea">Nome:<br>${nomeCliente}</label> 
        </div>

        <div class="content">
          <label id="CPfClient-serviceArea">CPF:<br>${cpfCliente}</label> 
        </div>

        <div class="content">
          <label id="endressClient-serviceArea">Endereço:<br>${enderecoCliente}</label> 
        </div>

        <div class="content">
          <label id="ageClient-serviceArea">Idade:<br>${idadeCliente}</label> 
        </div>

        <div class="content">
          <label id="contactClient-serviceArea">Telefone:<br>${contatoCliente}</label> 
        </div>

        <div class="content">
          <label id="emailClient-serviceArea">Email:<br>${emailCliente}</label> 
        </div>

        <div class="content">
          <label id="modelCar-serviceArea">Modelo do Carro:<br>${carroModelo}</label> 
        </div>

        <div class="content">
          <label id="plateCar-serviceArea">Placa:<br>${carroPlaca}</label> 
        </div>

        <div class="content">
          <label id="colorCar-serviceArea">Cor do Carro:<br> ${corCarro}</label> 
        </div>

        <div class="content">
          <label id="fabricationAge-serviceArea">Ano de Fabricação:<br>${anoFabricacao}</label> 
        </div>

        <div class="content">
          <label id="carEnginne-serviceArea">Motorização:<br>${motoriazacao}</label> 
        </div>

       
        <br><br>
        
        <button id="closeModal" onclick= "fecharModal('Modal-${id}')">Fechar</button>
    </dialog>
  </div>
      </div>`

     areaService.innerHTML += lista
   setTimeout(apagarCampos,5000)
   console.log(id)
     
}


function apagarCampos(){
    document.querySelector('.form').reset()
}

function abrirModal(modalid){
   openModal = document.getElementById(modalid)

    if (openModal){
        openModal.classList.add('open')
        openModal.showModal()
        body.style.overflow = 'hidden'
        
    }
}


function fecharModal(modalid){
    const abrirModal = document.getElementById(modalid)
    if (abrirModal){
        abrirModal.classList.remove('open')
        abrirModal.close();
         body.style.overflow = 'auto'
    }
}


function removeService(){
    let remove = document.getElementById('Modal')
    remove.remove();
}