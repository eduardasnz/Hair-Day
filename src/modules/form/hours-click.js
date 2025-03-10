// adicionar evento de click para os eventos disponiveis
export function hoursClick(){
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((avaliable) => {
    avaliable.addEventListener("click", (selected) => {
      
      // removendo a classe hour-selected de todas as li NAO selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })

      // adicionando a classe hour-selected na li clicado
      selected.target.classList.add("hour-selected")
    })
  })
}