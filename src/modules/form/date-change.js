import { schedulesDay } from "../schedules/load.js"
const selectedDate = document.getElementById("date")

// recarregar lista de horarios quando o input de data mudar
selectedDate.onchange = () => {
  schedulesDay()
}

// quando apenas chamei a funcao schedulesDay, ele recarregou e adicionou 
// MAIS uma lista de horarios (em vez de recarregar novos horarios)