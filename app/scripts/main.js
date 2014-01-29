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
	{title: 'bus boy', contentedness: '-**', precollege: true, salary: false},
	{title: 'Foster Agency Intake Director', contentedness: '*', precollege: false, salary: false },
	{title: 'Grant Program Coordinator', contentedness: '*****', precollege: false, salary: true },
	{title: 'Production Coordinator', contentedness: '*****', precollege: false, salary: true },
	{title: 0, contentedness: '*', precollege: true, salary: true },
	{title: '', contentedness: '*', precollege: true, salary: true },
	
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
// SHould return those items not repeated between the 2 arrays. 
_.difference(['Assistant Program Coordinator','Program Coordinator', 'Intern'], ['Intern', 'Production Coordinator'])
// When adding more than 2 arrays this returns [ ]


// Experimenting with Collection functions
// *************Try 10
// Using _.filter, this should filter the jobHistory entries by those that do not have a title value of null.
// The second should filter with the same as the first, in addtion to those entries that have a contentedness value
// Equal to '*****'
var finishedEntry = _.filter(jobHistory, function(x) { return x.title !== 0;});
var bestJobs = _.filter(jobHistory, function(x) { return x.title !== 0 && x.contentedness == '*****';});

// *************Try 11
// _.where should return those items that match the conditions specified
// with this function

var realJobs = _.where(jobHistory, {salary: true, precollege: false});
// Nailed it.

// *************Try 12
// _.findWhere should return the first value of what the _.where function filtered.
var realJob = _.findWhere(jobHistory, {salary: true, precollege: false});
// It worked. I think this would be really valuable when the objects have
// a sorting property, like date


// *************Try 13
// _.reject(list, iterator, [context]);
// This should return all items in the array except those items with a salary value of false.
var decentJobs = _.reject(jobHistory, function(x) { return x.salary == false;});
// Worked!


// *************Try 14
// _.every([true, 1, null, 'yes'], _.identity);
// _.every I think that by calling a particular property value 
// within the collection I can check for null values
_.every(jobHistory, function(x) { return x.title !== 0;});
_.every(jobHistory, function(x) { return x.contentedness !== 0;});
// Kinda cool. Basically it serves as a check as to whether 
// these properties were correctly filled out.
// The first returns false b/c I have a couple of titles that 
// were not filled out.
// The second returns true b/c all properties for contentedness
// include strings with something in them.


// *************Try 15
// _.contains Basically kind of like a search function.
// _.contains(jobHistory, 'Intern') //this doesn't work, i'm thinking
// because it's not constructed to accept an iterator, maybe?
_.contains(jobTitle, 'bus boy')
// Returns 'true' b/c I have been a bus boy. 
_.contains(jobTitle, 'Circus Coordinator')
// Returns 'false' b/c I have never had the title of 'Circus Coordinator'


// *************Try 16
// When I tried calling _.invoke the console popped up an error
// Uncaught TypeError: Cannot call method 'apply' of undefined 
// underscore.js:229
// _.invoke(jobHistory, 'sort')
// Why did that happen? The error looks like something is wrong with
// Underscore, but that seems kinda' crazy to me.


// *************Try 17
// _.pluck - You can grab values out of the array for specific properties
_.pluck(jobHistory, 'title')
// Worked as expected.


// *************Try 18
// _.indexby should sort by the object property you specify. 
// Curious to see if it sorts my star system for 'contentedness'
_.indexBy(jobHistory, 'contentedness');
// By golly, it did.  Returned array sorted as: -**, *, *****. 
// How did it know to do that?


// *************Try 19
// _.has searches the object for the parameter you provide.
// If it finds it, then 'true' will be returned
_.has(jobHistory[1], "title") //this returned 'true' as expected
_.has(jobTitle, "title") //this returned 'false' as expected
_.has(jobTitle, "bus boy") //this returned 'false' - NOT expected
// Why?


// *************Try 20
// Kinda cool how intelligent code can be:
_.isArray(jobHistory) //should be true
_.isArray(jobTitle)  //should be true
_.isObject(jobHistory)  //should be true, maybe.
_.isObject(jobTitle) //should be false. WRONG. Came back as true.



// Asked Jake H. for help on gettng the _.compact working 
// & he showed me this. It's freaking cool:
function coolStuff(){
	_.each(jobHistory, function(obj){
		if(obj.title)
			$(".jumbotron").append('<h1>'+obj.title+'</h1>')
			// console.log(obj.title)
		else
			console.log("value was not truthy, title was:"+obj.title)
	})
}



