$(document).ready(function () {
  // Se añaden las tareas de ejemplo
  let defaultTaks = [
    "Water the plants",
    "Do the shopping",
    "Promenade the dog",
  ];
  for (let i = 0; i < defaultTaks.length; i++) {
    // Se crean los contenedores con sus marcas
    let addDefaultTasks = $('<div class="tasks__newTask"></div>');
    let addDeleteTask = $('<i class="tasks__icon-cross fa-solid fa-xmark"></i>');
    let addMarkTask = $('<i class="tasks__icon-check fas fa-check"></i>');
    addDefaultTasks.append(addDeleteTask, addMarkTask, defaultTaks[i]);
    // Se meten en el contenedor padre (tasks)
    $(".tasks").append(addDefaultTasks);
    // Botones para eliminar y marcar y desmarcar tarea
    addDeleteTask.click(function () {
      $(this).parent().remove();
    });
    addMarkTask.click(function () {
      $(addDefaultTasks).toggleClass("tasks-checked");
    });
  }

  // Cuando se levanta una tecla en el container__input se activa la función
  $(".container__input").keyup(function (e) {
    // Se guarda el contenido del container__input
    const textInput = $(".container__input").val();
    // Si se pulsa Enter y lo que hay en el container__input no está vacío entra
    if (e.key == "Enter" && textInput != "") {
      // Se crea un nuevo contenedor con el contenido que se ha escrito en el container__input
      let addTask = $('<div class="tasks__newTask"></div>').text(textInput);
      // Se crean los símbolos de seleccionar y eliminar tarea
      let addDeleteTask = $('<i class="tasks__icon-cross fa-solid fa-xmark"></i>');
      let addMarkTask = $('<i class="tasks__icon-check fas fa-check"></i>');
      // Esos dos símbolos se meten dentro del contenedor de la tarea (addTask)
      addTask.append(addDeleteTask, addMarkTask);
      // Y las tareas se van agregando a un contenedor que las envolverá todas
      $(".tasks").append(addTask);
      // El container__input se pone vacío al introducir nueva tarea
      $(".container__input").val("");
      // Al hacer click en el símbolo de la papelera, este elimina a su padre, es decir, toda la tarea
      addDeleteTask.click(function () {
        $(this).parent().remove();
      });
      // Al hacer click en el símbolo del check, esta tarea se tacha y se colorea
      addMarkTask.click(function () {
        $(addTask).toggleClass("tasks-checked");
      });
    }
  });
});
