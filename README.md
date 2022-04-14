# Activite-02

# Français:
### I) Étapes pour réaliser l'Activite-02 :

1) Créez un projet et installez le package :

         npm init

2) Installez tous les outils :
         
         https://bachir-zahaf.gitbook.io/live-climate-change-api/reference/api-reference/tools
	 
	 * Axios:
	 			
				npm i axios
	 * Chai:
	 			
				npm i chai
	 * Chai-http:
	 			
				npm i chai-http
	 * Cheerio:
	 			
				npm i cheerio
	 * Express:
	 			
				npm i express
	 * Express-validation:
	 			
				npm i express-validation
	 * Express-validator:
	 			
				npm i express-validator
	 * Joi:
	 			
				npm i joi@14.3.1
	 * Validation:
	 			
				npm i validation
	 * Mocha:
	 			
				npm i mocha
	 * Nodemon:
	 			
				npm i nodemon

	 * package.json devrait ressembler à ça:			
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163452773-57300def-802b-4188-bbb8-6d6cc4dc9b9b.png)

         
3) Créez db.json: 
		
	* (id): Entré le Identifiant de le jornal. 
	* (website): Entré le site officiel de le jornal. 
	* (address): Entré le site web spécifique au changement climatique de le jornal.
	* (base): Entré le site officiel de le jornal (just pour le error de gratter l'API).

4) Créez index.js:              

	![image](https://user-images.githubusercontent.com/61596276/163459139-959133ed-8af0-4042-8a45-df24769d588a.png)


5) Créer un dossier d'itinéraires avec 2 fichiers (News.js & Newspapers.js) comme 2 itinéraires:
	
	![image](https://user-images.githubusercontent.com/61596276/163459327-acbc19dd-8d21-4b91-9f35-1cb95bd8c22b.png)

	* Créer Newspapers.js:
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163459726-e466042a-8edf-4f51-939b-7be1d6c4c3cb.png)
	 
	 * Créér function de stocker les données pour utilisé:
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163460917-389dcf9e-083b-426f-a309-0d753d297471.png)
	
	* Créer News.js:
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163460086-2df1ce81-4c08-4467-95ac-3f3c980ba29b.png)
	 
	* Créér function de stocker les données pour utilisé:

	 ![image](https://user-images.githubusercontent.com/61596276/163461224-4ed18c28-a448-463c-be66-9cc57136c67d.png)


 
6) Créer 2 middlewares dans index.js pour les routes News & Newspapers:
	
	 ![image](https://user-images.githubusercontent.com/61596276/163460407-6d4dd081-73fd-470a-8da8-0675901325c5.png)


7) Créer des points de terminaison (GET, POST, PUT, DELETE) dans les deux routes:

8) Ajouter la validation et la Sanitation aux points de terminaison ('express-validation','Joi')
9) Créez un dossier utils avec Newspapers-schema.js comme schéma pour Joi afin de valider l'entrée Put
10) Créer un dossier de test avec test.js pour pour testé l'API
11) Vérifiez le POST en utilisant POSTMAN et 'express-validator' comme outil de validation
12) Check the The PUT using POSTMAN and 'Joi' as a tool of validation
13)Lancez les tests de l'API :

		npm run test

       
### II) Documentation:

      https://bachir-zahaf.gitbook.io/live-climate-change-api/
      
### _________________________________________________________________________________________________________________________


# English:       
### I) Steps to made the Activite-02:

1) Create a project and install package:

         npm init

2) Install all the tools
         
         https://bachir-zahaf.gitbook.io/live-climate-change-api/reference/api-reference/tools
	  1-Axios:
	 			
				npm i axios
	 2-Chai:
	 			
				npm i chai
	 3-Chai-http:
	 			
				npm i chai-http
	 4-Cheerio:
	 			
				npm i cheerio
	 5-Express:
	 			
				npm i express
	 6-Express-validation:
	 			
				npm i express-validation
	 7-Express-validator:
	 			
				npm i express-validator
	 8-Joi:
	 			
				npm i joi@14.3.1
	 9-Validation:
	 			
				npm i validation
	 10-Mocha:
	 			
				npm i mocha
	 11-Nodemon:
	 			
				npm i nodemon

	 * package.json should looks like this:
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163452813-3b16244f-32b4-4b94-9e52-46576fe0719c.png)

         
3) Create db.json:
		
	* (id): Entered in log id.
	* (website): Entered from the official website of the newspaper.
	* (address): Entered the specific climate change website of the newspaper.
	* (base): Entered from the official newspaper site (just for the error of scratching the API).

4) Create index.js              
5) Create routes folder with 2 files (News.js & Newspapers.js) as the 2 routes 
6) Create 2 Middlewares in index.js for the News & Newspapers routes
7) Create (GET,POST,PUT,DELETE) endpoints in both routes
8) Add Validation and Sansitation to the endpoints ('express-validation','Joi')
9) Create utils folder with newspapers-schema.js as Schema for Joi to validate the Put input
10) Create test folder with test.js as test file for API
11) Check the The POST using POSTMAN and 'express-validator' as a tool of validation
12) Check the The PUT using POSTMAN and 'Joi' as a tool of validation
13) Launch the API testing :

		npm run test

       
### II) Documentation:

      https://bachir-zahaf.gitbook.io/live-climate-change-api/
      



