
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalExpenses = document.getElementById('total-expenses');


let expenses = [];


function renderExpenses() {
  
  expenseList.innerHTML = '';

  
  expenses.forEach((expense) => {
    
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.description} - $${expense.amount}`;

    
    expenseList.appendChild(listItem);
  });

  
  const total = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);
  totalExpenses.textContent = `Total Expenses: $${total.toFixed(2)}`;
}


function addExpense(event) {
  event.preventDefault();

  
  const description = document.getElementById('description').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;

  
  const expense = {
    description: description,
    amount: parseFloat(amount),
    date: date,
  };

  
  expenses.push(expense);

  
  renderExpenses();

  
  expenseForm.reset();
}


expenseForm.addEventListener('submit', addExpense);
