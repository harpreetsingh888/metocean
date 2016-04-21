MetOcean
========

**Technologies used:**
* Symfony2
* Doctrine2
* MySql
* BackboneJS
* UnderscoreJS
* D3JS
* Composer

**Data display and functionality**
* My plan to display data was based on categories as shown in categories.txt file
* So for categories like metre, time and knots I have decided to go for Bar graph as they are easy to deduce result.
* So on home page of the website, you'll be able to see a dropdown for dates and 3 bar graphs.
* Each bar graph corresponds to the field in metre, time and knots.
* For each day an average value of field is shown.
* Change the date from the dropdown and all the 3 bar graphs are updated with data.
* Fourth graph in which I was trying to plot temperature and sea surface temperature against time but there is an error in rendering the graph. Basically I was trying to implement "Multi-Series Line Chart" in D3JS.
* I had similar thought to plot precipitation, relative humidity and cloud cover against time.


**How to run the project:**
* Copy the project into you var/www/html/ directory and change your current directory to /var/www/html/metocean
* Update packages via Composer
    1. Execute composer install
* Database name is metocean.
    1. Execute php app/console doctrine:database:create command to generate database named metocean
* Generate table
    1. Execute php app/console doctrine:schema:update --force
* Import excel
    1. Use Phpmyadmin or MySQL Workbench to import metocean.txt using following command
       LOAD DATA INFILE '/tmp/metocean.txt' INTO TABLE data;
* Build assets
    1. Build the assets(css and js) using
       sudo rm -rf app/cache/* && app/console assetic:dump
* Run your application:
    1. Execute the php app/console server:run command.
    2. Browse to the http://localhost:8000 or http://127.0.0.1:8000/ URL.

**Things I would have done**
* Due to limited amount of time I am not able to refactor the code in front end and backend.
* My thoughts of refactoring are as follows:
    1. In renderGraphs.js, methods drawFirstGraph, drawSecondGraph and so on can be combined into a single method which makes the xhr request(with extra parameter) for each graph.
    2. In DefaultController.php, similarly instead of getDataForFirstGraphAction, getDataForSecondGraphAction and so on there can be a single method getDataForGraphsAction which will listen to the route "/getDataForGraphs/{$type}". $type variable can be first, second or third so relevant data can be returned.

I am quite happy to get familiar with a powerful library D3JS and its plugins and hope to use it the future.