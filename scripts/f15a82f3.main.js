function coolStuff(){_.each(jobHistory,function(a){a.title?$(".jumbotron").append("<h1>"+a.title+"</h1>"):console.log("value was not truthy, title was:"+a.title)})}console.log("Hey there! Thanks for checking out my programming."),console.log("You can use the console if you prefer, but you find it easier to inspect the main.js file."),console.log("In this assignment we had to come up with 20 examples of using Underscore."),console.log("I've included a lot of comments with each example to share what I thought would happen and whether or not it did."),$(".btn-success").click(function(){$("body").toggleClass("neon"),$(".jumbotron").toggleClass("neon"),$(".footer").toggleClass("neon"),$(".nav-pills").toggleClass("neon"),$(".header").toggleClass("neon"),$(".btn-success").toggleClass("neon")});var jobHistory=[{title:"bus boy",contentedness:"-**",precollege:!0,salary:!1},{title:"Foster Agency Intake Director",contentedness:"*",precollege:!1,salary:!1},{title:"Grant Program Coordinator",contentedness:"*****",precollege:!1,salary:!0},{title:"Production Coordinator",contentedness:"*****",precollege:!1,salary:!0},{title:0,contentedness:"*",precollege:!0,salary:!0},{title:"",contentedness:"*",precollege:!0,salary:!0}];_.initial(jobHistory);var jobTitle=["bus boy","Foster Agency Intake Director","Grant Program Coordinator","Production Coordinator",0,""];_.compact(jobTitle),_.rest(jobHistory),_.rest(jobTitle),_.rest(jobHistory,[2]),_.last(jobHistory),_.last(jobTitle),_.without(jobTitle,0,""),_.flatten(["bussboy",["Foster Agency Intake Director"],["Assistant Grant Program Coordinator",["Grant Program Coordinator"]]]),_.union(["bussboy"],["bellboy","bussboy","front desk clerk"],["Assistant Program Coordinator","Program Coordinator"],["Intern","Production Coordinator"]),_.intersection(["bussboy"],["bellboy","bussboy","front desk clerk"],["Assistant Program Coordinator","Program Coordinator"],["Intern","Production Coordinator"]),_.intersection(["bussboy","Intern"],["bellboy","Intern","bussboy","front desk clerk"],["Assistant Program Coordinator","Program Coordinator","Intern"],["Intern","Production Coordinator"]),_.difference(["Assistant Program Coordinator","Program Coordinator","Intern"],["Intern","Production Coordinator"]);var finishedEntry=_.filter(jobHistory,function(a){return 0!==a.title}),bestJobs=_.filter(jobHistory,function(a){return 0!==a.title&&"*****"==a.contentedness}),realJobs=_.where(jobHistory,{salary:!0,precollege:!1}),realJob=_.findWhere(jobHistory,{salary:!0,precollege:!1}),decentJobs=_.reject(jobHistory,function(a){return 0==a.salary});_.every(jobHistory,function(a){return 0!==a.title}),_.every(jobHistory,function(a){return 0!==a.contentedness}),_.contains(jobTitle,"bus boy"),_.contains(jobTitle,"Circus Coordinator"),_.pluck(jobHistory,"title"),_.indexBy(jobHistory,"contentedness"),_.has(jobHistory[1],"title"),_.has(jobTitle,"title"),_.has(jobTitle,"bus boy"),_.isArray(jobHistory),_.isArray(jobTitle),_.isObject(jobHistory),_.isObject(jobTitle);