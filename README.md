# Angular lesson 01
<br />
install angular
```sh
$ npm install angular --save --save-exact
```
> ```--save-exact``` for the last version locked (no auto updates)

> there is a version control of node called nvm [node version manager](https://github.com/creationix/nvm)

<br />

init the project
```sh
$ npm init
```
use version: 0.0.0
<br />

install the http-server

```sh
$ sudo npm install -g http-server
```
run the http-server
```sh
$ http-server
```

<br />
####Browserify
Install browserity:
```sh
$ sudo npm install -g browserify
```
> Browserify helps u to create a single js file merging several others

Command to make browserify merge the 'app.js' file in a new file called 'bundled.js'
```sh
$ browserify app.js -o bundled.js
```

<br />
After browserify, every .js page is gonna to be insert in a function. In this way u can use ```'use strict'``` in a some specific files instead of the entire app. Then all the functions are going to be insert in a master function who will be triggered buy the window itself.
```sh
	(function(root){
		‘use strict’;
		...
	})(window);
```


```'use strict'``` is a js sintax that force u to write a better js and has to be inizialized in each function. that's why browsserify ecc. create a 'parent function' during the bound of js files. In this way ```'use strict'``` has to be delare just ones in the top of ur js document. [more info...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

<br />
install a node module to create uuID 
```sh
$ npm install uuidv4 --save --save-exact
```
<br />
create a 'build' folder where deploy the bondled files
```sh
$ mkdir -p build
```
<br />
####Grunt
Install Grunt (to perform several pre-programmed command-line actions)
```sh
$ npm install -g grunt-cli
$ npm install grunt --save-dev --save-exact
```
> ```--dev ``` to register the referense in package.json in dev, instead of the main reference list


<br />

Install tourism for simplify grunt https://github.com/thenativeweb/tourism
```sh
$ npm install tourism --save-dev --save-exact
```

<br />
Inizialize Grunt to watch during dev (saving a watch file u trig grunt)
```sh
$ grunt watch
```
Or manually:

```sh
$ grunt 
```
> this command trig the error check on ur code and the update of modules

<br />

You can even start a custom action you previously created in Gruntfile.js simply calling the action name after ```grunt```
```sh
$ grunt … 
```
> Grunt use ESLint (checker sintassi js) and esformatter (fix ur code format)

<br />
Install uglify to fuz the code and make it lighter:
```sh
$ npm install uglify-js
```
Start uglify with this sintax:
```sh
$ uglifyjs index.js -c -m --screw-ie8 -o build/bundled.js
```
and combine the command with browserify like this:
```sh
$ browserify index.js | uglifyjs -c -m --screw-ie8 -o build/bundled.js
```



<br />

---

<br />

 
# Angular lesson 02

instead of use
``` $ http-server``` you should use ```$ node app ```

to avoid the cross-domain issue you should creare a proxy architecture that redirect the request to different ports or domains, one for static files (views, js, css, ecc) and one for data. 
A good proxy is NginX (web server) already used behind website like github.com and workpress

<br />
####Unit tests
Install mocha to create Unit tests (both BDD and TDD):

```sh
$ sudo npm install -g mocha
```
Start mocha test:

```sh
$ mocha --recursive --ui tdd
```
> Use mocha test recursive (to see in all the suborders for js files) and ui tdd to use the tdd system (otherwise it use BDD ad default)

<br />
For addictional test sintaxes check for libraries like “should” or “expert”
For example 'assert that' to add “assert” unit test syntax:
```sh
$ npm install node-assertthat --save --save-exact
```
<br />

You can use mocha for async tests adding ```--async-only``` but u need to add “done” to the test function
```sh
$ mocha --recursive --ui tdd --async-only
```

```--bail``` stops mocha test after first fail
```sh
$ mocha --recursive --ui tdd --async-only --bail
```


```--watch``` command run the tests during dev
```sh
$ mocha --recursive --ui tdd --async-only --bail --reporter nyan --watch
```

Install cases to add [cases](https://github.com/thenativeweb/cases) to unit tests
```sh
$ npm install cases
```
<br />
####filterts
to add filters in angular views, just add pipes and that the filer name ``` | filtername```

es:
```sh
 {{calculator.sum | currency}}
```

to add a different currency and decimal number, just add parameter after  ```: ```
```sh
{{calculator.sum | currency: '$' : 3}}
```

Use a model as a filer (called filter-filter) 
```sh
ng-model="query"
| filter:query 
```

If I know even what kind of object data I'm going to filter, I can define it in the model
 
```sh
ng-model="query.name”
| filter:query
```
<br />
Create a custom filter is basicaly a function that return a function (as directive ecc):
```sh
.filter('reverse', [function(){
    return function(){
       ... 
    };
}]);
```

<br />
<br />
####Directives
Basic directive:
```sh
<hello-world>
```
or aattribute directive:
```sh
<div hello-world></div>
```
the ``` - ``` in the view become capital letter in JS
```sh
.directive('helloWorld’);
```

an attribute directive always return a function with the same 3 parameters: ```scope, element, attributes```
```sh
.directive('focus', function(){
	return function(scope, element, attributes){
		//...          
	};
});
```
Angular has a native small version of Jquery integrated called JQlite (the 'special' brother of Jquery, usefull for very few things)
In the worst case scenario where u need to add JQuey too, Angular is clever enoth to avoid to instanciate JQlite, leaving the app lighter.

<br />
To include directly an .html file without directives, use ng-include, but u need to put it in ‘’ to explicit the fact that is a string:
```sh
<div ng-include="'footer.html'"></div>
```
<br />
####Route
angular-route is bugged, instead use [angular ui router](https://github.com/angular-ui/ui-router)


but u need to add the ``` <script> ``` in the main index.html and add the dependences in the main module

```sh
angular.module('myApp', [
    require('./math').name,
    'ui.router'
]);
```

than add ```.config``` with 2 dependencies: ```$stateProvider, $urlRouterProvider```.

```$urlRouterProvider``` is just to redirect if the page doesn’t exist
```sh
.config(function($stateProvider, $urlRouterProvider){
    ...    
});
```

<br />
####Teacher Contacts

email: [golo.roden@thenativeweb.io](golo.roden@thenativeweb.io)

twitter: [@goloroden](https://twitter.com/goloroden)

<br />
####Personal notes
A friend of mine said that angular becomes very slow if u start bind too many thing.
He use an external module called [bindonce](https://github.com/Pasvaz/bindonce) that helped his to improve the persormance of 400%



<br />

<br />
<br />









