const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      let O_Result = [];
      O_Result = all.filter((TodoList) => TodoList.dueDate < new Date().toLocaleDateString("en-CA"));
      return O_Result;
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      let D_Result = [];
      D_Result=all.filter((TodoList) => TodoList.dueDate === new Date().toLocaleDateString("en-CA"));
      return D_Result;
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      let DueLater = [];
      DueLater = all.filter((TodoList) => TodoList.dueDate > new Date().toLocaleDateString("en-CA"));
      return DueLater;
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      return list.map(
        (TodoList) =>
          `[${TodoList.completed ? "x" : " "}] ${TodoList.title} ${
            TodoList.dueDate !== formattedDate(new Date()) ? TodoList.dueDate : ""
          }`).join("\n").trim();
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  module.exports = todoList;
