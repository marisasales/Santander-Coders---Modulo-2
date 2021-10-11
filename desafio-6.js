/* 
  Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação. 
  inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35, quantos de 36 a 55 anos e quantos de cada uma dessas faixas etárias realmente votaram.
  O objeto resultante contendo esses dados deve ter 6 propriedades. Veja o exemplo de saída na parte inferior:
  {
    numYoungVotes: 1,
    numYoungPeople: 4,
    numMidVotesPeople: 3,
    numMidsPeople: 4,
    numOldVotesPeople: 3,
    numOldsPeople: 4
  }
*/

const voters = [
	{ name: 'Bob', age: 30, voted: true },
	{ name: 'Jake', age: 32, voted: true },
	{ name: 'Kate', age: 25, voted: false },
	{ name: 'Sam', age: 20, voted: false },
	{ name: 'Phil', age: 21, voted: true },
	{ name: 'Ed', age: 55, voted: true },
	{ name: 'Tami', age: 54, voted: true },
	{ name: 'Mary', age: 31, voted: false },
	{ name: 'Becky', age: 43, voted: false },
	{ name: 'Joey', age: 41, voted: true },
	{ name: 'Jeff', age: 30, voted: true },
	{ name: 'Zack', age: 19, voted: false },
];

const YOUNG = {
	votes: 'numYoungVotes',
	people: 'numYoungPeople',
	startAge: 18,
	endAge: 25,
};
const MID = {
	votes: 'numMidVotesPeople',
	people: 'numMidsPeople',
	startAge: 26,
	endAge: 35,
};
const OLD = {
	votes: 'numOldVotesPeople',
	people: 'numOldsPeople',
	startAge: 36,
	endAge: 55,
};

const ageGroup = [YOUNG, MID, OLD];

const ageBetween = (voter, startAge, endAge) =>
	voter.age >= startAge && voter.age <= endAge;

const handleVoters = (votesCount, PeopleCount, totals, voter) => ({
	...totals,
	[votesCount]: voter.voted ? totals[votesCount] + 1 : totals[votesCount],
	[PeopleCount]: totals[PeopleCount] + 1,
});

const votingResult = voters.reduce(
	(totals, voter) => {
		for (const votersAge of ageGroup) {
			if (ageBetween(voter, votersAge.startAge, votersAge.endAge)) {
				return handleVoters(votersAge.votes, votersAge.people, totals, voter);
			}
		}
	},
	{
		[YOUNG.votes]: 0,
		[YOUNG.people]: 0,
		[MID.votes]: 0,
		[MID.people]: 0,
		[OLD.votes]: 0,
		[OLD.people]: 0,
	}
);

console.log(votingResult);
