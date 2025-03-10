import dayjs from "dayjs";

import { sheduleNew } from "../../services/shedule-new";
import { schedulesDay } from "../schedules/load.js"

// formulário
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

// data atual
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// carregar data atual e definir data mínima
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // recuperando nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    // recuperando horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horario!");
    }

    // recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":");
    
    // inserir hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")
    
    // criando um identificador 
    const id = new Date().getTime();

    // faz agendamento
    await sheduleNew({
      id,
      name,
      when,
      status: "agendado"
    })

    await schedulesDay()

    // limpar input do client
    clientName.value = "";

  } catch (error) {
    alert("não foi possível realizar o agendamento");
    console.log(error);
  }
};
