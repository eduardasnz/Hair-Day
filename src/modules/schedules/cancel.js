import { schedulesDay } from "./load.js"
import { sheduleCancel } from "../../services/shedule-cancel";

const periods = document.querySelectorAll(".period");

// gerar evento de click para cada lista
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // obter li do elemento clicado
      const item = event.target.closest("li");
      
      // recuperar id do agendamento 
      const { id } = item;

      // confirmar cancelamento
      if (id) {
        const isConfirm = confirm("Deseja cancelar?");

        if (isConfirm) {
          await sheduleCancel({ id })
          schedulesDay()
        }
      }
    }
  });
});
