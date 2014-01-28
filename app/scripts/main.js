console.log('\'Allo \'Allo!');

// var students = [
// {name: 'Mason'},
// {name: 'Joe'},
// {name: 'Eric'}
// ];

// _.rest will return everything but the first item
// in an array.
// in this case, [{name: 'Joe'}, {name:'Eric'}]

// _.rest (students)

// why does this return [] and not ['mason'] ?
// _.rest (['mason'])

// check in the console. You're code should syntatically work.
// Create 20. Make sure you master Underscore. If you don't get 
// Underscore you are not going to understand Backbone.


// Gonna start with Arrays because I feel more familiar with them

// ***********Try 1
var jobHistory = [
	{title: 'bus boy', contentedness: '-**'},
	{title: 'Foster Agency Intake Director', contentedness: '*'},
	{title: 'Grant Program Coordinator', contentedness: '***'},
	{title: 'Production Coordinator', contentedness: '*****'},
	{title: 0, contentedness: '*'},
	{title: '', contentedness: '*'}
];

// _.initial should produce all array items except the last.
// Not sure what the use case would be for this. 

_.initial(jobHistory)

// ***********Try 2
var jobTitle = ['bus boy','Foster Agency Intake Director','Grant Program Coordinator','Production Coordinator',0,''];

// _.compact should return all items in the array except falsies (in this case leaving out 0 and ''). 
// This would be totally helpful to protect from displaying unfinished
// job history entries
_.compact(jobTitle);

// Try Again
// Why does _.compact(jobHistory) return all values? I think it's because
// the array is a collection of objects with properties so their inherent 
// value isn't null. So how do I perform _.compact on just the values of 'title'?

// Here are things I tried that don't work:
// _.compact(title) //returns 'title' not defined
// _.compact(jobHistory.title)  //returns an empty array


// *************Try 3
// _.rest should return all array items but the first:
_.rest(jobHistory)
_.rest(jobTitle)
// Hooray! It worked

// Also tried:
_.rest(jobHistory,[2])
// which returns all items in the array starting with index[2] and on

// *************Try 4
// _.last(jobHistory) should return only the last item in the array
_.last(jobHistory)
_.last(jobTitle)
// Hooray! It worked!

// *************Try 5
// Should return array items filtering the items by the value in the brackets
_.without(jobTitle, 0, '')
// Worked, but I would like to see how to filter a property w/in an array 
// of objects, like I attempted with _.compact. Seeing a pattern here
// of not being able to apply underscore functions to individual properties
// of objects w/in an array.
// Try Again

// *************Try 6
// So, I think this just takes out the grouping (or nesting) and displays
// the array items as a single array.
// here I grouped items of position titles I held at the same company
// and _.flatten returns all position titles used throught the nested arrays
_.flatten(['bussboy', ['Foster Agency Intake Director'], ['Assistant Grant Program Coordinator', ['Grant Program Coordinator']]]);

// *************Try 7
// _.unition should combine items that are the same value.
// I think that exact strings ('bussboy') should combine, 
// but similar but not exact strings ('Program Coordinator' vs. 'Production Coordinator')
// should not combine
_.union(['bussboy'], ['bellboy', 'bussboy', 'front desk clerk'], ['Assistant Program Coordinator','Program Coordinator'], ['Intern', 'Production Coordinator'])
// I was right.

// *************Try 8
// _.intersection should work similar to _.union, but instead of combining 
// repetitive strings within the arrays it will return only those
// strings that are repetive (indentical strings). In this case, 'bussboy'
_.intersection(['bussboy'], ['bellboy', 'bussboy', 'front desk clerk'], ['Assistant Program Coordinator','Program Coordinator'], ['Intern', 'Production Coordinator'])
// Okay, didn't work. Why? - right, b/c it only returns identical strings found in each array...
// so this should work now that I added 'Intern' to each array:
_.intersection(['bussboy', 'Intern'], ['bellboy', 'Intern', 'bussboy', 'front desk clerk'], ['Assistant Program Coordinator','Program Coordinator', 'Intern'], ['Intern', 'Production Coordinator'])


// *************Try 9


// *************Try 10
// *************Try 11
// *************Try 12
// *************Try 13
// *************Try 14
// *************Try 15
// *************Try 16
// *************Try 17
// *************Try 18
// *************Try 19
// *************Try 20

// Start Collection Tries
// Asked Jake H. for help on gettng the _.compact working & he showed me this:
function coolStuff(){
	_.each(jobHistory, function(obj){
		if(obj.title)
			$(".jumbotron").append('<h1>'+obj.title+'</h1>')
			// console.log(obj.title)
		else
			console.log("value was not truthy, title was:"+obj.title)
	})
}



