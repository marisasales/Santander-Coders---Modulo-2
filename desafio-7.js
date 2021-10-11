/* 
  Módulo calculadora
    - Função "enter"
    - Função "equals"
    - Função "list" que mostra todas as operações já
    executadas, seguidas de seus resultados
    - Função "reset"
  Controlar os operadores e entradas de valor
*/

const calculator = (() => {
	const _add = (x, y) => x + y;
	const _subtract = (x, y) => x - y;
	const _multiply = (x, y) => x * y;
	const _divide = (x, y) => x / y;
	const _remainder = (x, y) => x % y;
	const _exponent = (x, y) => x ** y;

	const _operators = {
		'+': _add,
		'-': _subtract,
		'*': _multiply,
		'/': _divide,
		'%': _remainder,
		'**': _exponent,
	};

	let _entries = [];
	let _equalsList = new Map();

	const enter = (value) => {
		if (isNaN(value) && !Object.keys(_operators).includes(value)) {
			return 'Invalid Entry!';
		}
		_entries = [..._entries, value];
	};

	const equals = () => {
		const [x, op, y] = _entries;
		const _calcResult = _operators[op](x, y);

		_equalsList.set(_entries.join(''), _calcResult);
		_entries = [];

		return _calcResult;
	};

	const list = () => _equalsList;
	const reset = () => _equalsList.clear();

	return {
		enter,
		equals,
		list,
		reset,
	};
})();

console.log(calculator.enter('value'));

calculator.enter(5);
calculator.enter('+');
calculator.enter(2);
console.log(calculator.equals());

calculator.enter(8);
calculator.enter('*');
calculator.enter(2);
console.log(calculator.equals());

console.log(calculator.list());

calculator.reset();
console.log(calculator.list());
