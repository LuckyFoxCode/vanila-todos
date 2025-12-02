"use strict";

const app = {
  state: [],
  init() {
    this.renderTodoForm();
    this.addTodoTask();
  },
  renderTodoForm() {
    const form = document.createElement("form");
    form.classList.add("todo-form");

    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("todo-form__input");
    input.name = "todo";
    input.placeholder = "Add a todo";
    input.required = true;
    input.autocomplete = "off";
    input.minLength = 2;
    input.maxLength = 30;
    input.addEventListener("invalid", () => {
      input.classList.add("todo-form__input--error");
    });
    input.addEventListener("input", () => {
      input.classList.remove("todo-form__input--error");
    });

    const button = document.createElement("button");
    button.type = "submit";
    button.classList.add("todo-form__button");
    button.textContent = "Add";

    this.form = form;
    this.input = input;
    this.button = button;

    form.append(input, button);
    document.body.appendChild(form);
  },
  addTodoTask() {
    const { form, input } = this;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (input.value.trim()) {
        const newTodo = {
          id: crypto.randomUUID(),
          title: input.value,
          completed: false,
        };

        this.state.push(newTodo);

        console.log("---State---", this.state);

        input.value = "";
        input.focus();
      }
    });
  },
};

document.addEventListener("DOMContentLoaded", () => app.init());
