class Expense {
  /**
   Represents a Expense.
   @constructor
   @param {date} date - The date of the expense.
   @param {float} income - The author of the book.
   @param {number} expense - Expense number.
   @param {string} detail - Additional detail.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {number} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

/**
 * add expense numbers passed to the function.
 * @param {date} date - A positive number.
 */
  add(date) {
    this.expenses.push(date);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

/**
 * add expense numbers passed to the function.
 * @param {float} income - A positive number.
 */
  add(income) {
    this.expenses.push(income);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

/**
 * add expense numbers passed to the function.
 * @param {string} detail - A positive number.
 */
  add(detail) {
    this.expenses.push(detail);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }

  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }

  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
