catchproject
============

Copy the project into you var/www/html/ directory and change your current directory to /var/www/html/catchproject

     * Update packages via Composer
        1. Execute composer install

     * Database name is catchproject.
         1. Execute php app/console doctrine:database:create command to generate database named catchproject

     * Generate table
         1. Execute php app/console doctrine:schema:update --force

     * Import excel
         1. Use Phpmyadmin or MySQL Workbench to import customers.csv

     * Build assets
         1. Build the assets(css and js) using
            sudo rm -rf app/cache/* && app/console assetic:dump

     * Run your application:
          1. Execute the php app/console server:run command.
          2. Browse to the http://localhost:8000 or http://127.0.0.1:8000/ URL.