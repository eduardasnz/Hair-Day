import dayjs from "dayjs";

// Selecionando as sessões
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpar a lista
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderizar os agendamentos
    dailySchedules.forEach((schedule) => {
      // Criando os elementos do agendamento
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      // Adicionar/atribuindo o id do agendamento
      item.setAttribute("id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      // Criar o icone de cancelar o agendamento.
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Cancelar");

      // adicionar o tempo, nome e ícone no item  
      item.appendChild(time);
      item.appendChild(name);
      item.appendChild(cancelIcon);
      
      // obtem somente a hora
      const hour = dayjs(schedule.when).hour();

      // renderizar o agendamento de forma condicional (manha, tarde ou noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
      

    });
  } catch (error) {
    alert("não foi possivel exibir os agendamentos");
    console.log("error: " + error);
  }
}
