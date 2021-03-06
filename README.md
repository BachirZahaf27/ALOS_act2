# Activite-02

# Français:
### I) Étapes pour réaliser l'Activite-02 :

### 1) Créez un projet et installez le package :

         npm init

### 2) Installez tous les outils :
         
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

         

### 3) Créez db.json: 
		
* (id): Entré le Identifiant de le jornal. 
* (website): Entré le site officiel de le jornal. 
* (address): Entré le site web spécifique au changement climatique de le jornal.
* (base): Entré le site officiel de le jornal (just pour le error de gratter l'API).



### 4) Créez index.js:              

   ![image](https://user-images.githubusercontent.com/61596276/163459139-959133ed-8af0-4042-8a45-df24769d588a.png)



### 5) Créer un dossier d'itinéraires avec 2 fichiers (News.js & Newspapers.js) comme 2 itinéraires:
	
   ![image](https://user-images.githubusercontent.com/61596276/163459327-acbc19dd-8d21-4b91-9f35-1cb95bd8c22b.png)

* Créer Newspapers.js:
	 
  ![image](https://user-images.githubusercontent.com/61596276/163459726-e466042a-8edf-4f51-939b-7be1d6c4c3cb.png)
	 
* Créér function de stocker les données pour utilisé:
	 
	 ![image](https://user-images.githubusercontent.com/61596276/163460917-389dcf9e-083b-426f-a309-0d753d297471.png)
	
* Créer News.js:
	 
  ![image](https://user-images.githubusercontent.com/61596276/163460086-2df1ce81-4c08-4467-95ac-3f3c980ba29b.png)
	 
* Créér function de stocker les données pour utilisé:

  ![image](https://user-images.githubusercontent.com/61596276/163461224-4ed18c28-a448-463c-be66-9cc57136c67d.png)


 
### 6) Créer 2 middlewares dans index.js pour les routes News & Newspapers:
	
   ![image](https://user-images.githubusercontent.com/61596276/163460407-6d4dd081-73fd-470a-8da8-0675901325c5.png)



### 7) Créer des points de terminaison (GET, POST, PUT, DELETE) dans les deux routes:

* GET endpoints pour Newspapers.js:
	 
  ![image](https://user-images.githubusercontent.com/61596276/163462047-a6c8952f-e6a4-4212-a3c3-3dae8f33ae53.png)

* POST endpoints pour Newspapers.js:
	 
  ![image](https://user-images.githubusercontent.com/61596276/163462146-0aa08ba0-6f1c-4292-9740-1064a7b6c976.png)

* PUT endpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163462220-5678d124-148a-455e-96eb-c73fca9d32bf.png)

* DELETE endpoints pour Newspapers.js:
	 
  ![image](https://user-images.githubusercontent.com/61596276/163462311-1a50ee70-8933-4606-ab9e-d0f49d91edca.png)

* GET endpoints pour News.js:
	
 ![image](https://user-images.githubusercontent.com/61596276/163462471-1c4a3801-5b3b-41f0-bc4f-fe7119cdfc43.png)



### 8) Ajouter la validation et la Sanitation aux points de terminaison ('express-validation','Joi')

* Import the packages:
	
  ![image](https://user-images.githubusercontent.com/61596276/163465532-602d6e20-8994-4178-8fda-1e0d6c8d938d.png)

* Ajouter la validation et la Sanitation aux GET endpoints (express-validion) version:
	
  ![image](https://user-images.githubusercontent.com/61596276/163467163-40a339c4-f824-4c78-811a-be82f1db1723.png)

* Ajouter la validation et la Sanitation aux POST endpoints (Joi) version:
	
  ![image](https://user-images.githubusercontent.com/61596276/163472066-8b002c90-b744-4bba-bae3-472720e0944f.png)
 


### 9) Créez un dossier utils avec Newspapers-schema.js comme schéma pour Joi afin de valider l'entrée PUT:

   ![image](https://user-images.githubusercontent.com/61596276/163467922-f00fdd2d-2194-4cef-8682-67f43e05bdf6.png)
	
* Créez schéma pour valider l'entrée PUT:
	
  ![image](https://user-images.githubusercontent.com/61596276/163467772-54afaa7a-bf84-4663-aaa7-9802bc65119c.png)



### 10) Créer un dossier de test avec test.js pour pour testé l'API:

* Ajouter le test de GET enpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163469314-9009246b-e5f2-47d7-b733-29d706817f62.png)

* Ajouter le test de (GET par id) enpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163469426-b607669e-e71b-4552-b5fe-9d0703bd0ecc.png)

* Ajouter le test de GET enpoints pour News.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163469480-bb79f15f-6a92-49e8-b371-c1e977378075.png)

* Ajouter le test de (GET par id) enpoints pour News.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163469522-1bf290ab-885d-4829-ae5e-0752b77083b0.png)

* Ajouter le test de POST enpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163469667-b81f7f90-628b-490e-ad34-7d41c09364e1.png)

* Ajouter le test de PUT enpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163471542-4465e6c9-ee66-47b3-a032-e8178005d6a7.png)
	  
* Ajouter le test de DELETE enpoints pour Newspapers.js:
	
  ![image](https://user-images.githubusercontent.com/61596276/163470051-d1c7c918-3a5f-4c29-a6a3-25ab346e203b.png)
  ![image](https://user-images.githubusercontent.com/61596276/163471603-b8886a38-d518-4d29-95ea-fbe754dc9aa0.png)


### 11) Vérifiez le GET en utilisant POSTMAN pour Newspapers.js:

   ![image](https://user-images.githubusercontent.com/61596276/163564544-752e5876-1d41-4965-b8e6-6734752902c5.png)

### 12) Vérifiez le GET (par identifiant) en utilisant POSTMAN pour Newspapers.js:

   ![image](https://user-images.githubusercontent.com/61596276/163564601-00cee974-eba6-4903-be71-bac9771b6952.png)

### 13) Vérifiez le GET en utilisant POSTMAN pour News.js:

   ![image](https://user-images.githubusercontent.com/61596276/163564670-cd7b486d-153a-4234-9b42-e42a57612340.png)

### 14) Vérifiez le GET (par identifiant) en utilisant POSTMAN pour News.js:

   ![image](https://user-images.githubusercontent.com/61596276/163564718-4cacd9bf-d92a-4e7c-a314-e9abcdefbfbb.png)

### 15) Vérifiez le POST en utilisant POSTMAN et 'express-validator' comme outil de validation:

   * Validation de nom de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163568818-80611b20-1c27-4ab1-8449-abc8e31f5eb0.png)

   * Validation de site offical de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163568725-7e95261a-ea6d-4e65-ae12-189fb7590199.png)

   * Validation de address de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163568465-53f2a80f-745c-4a9a-8ae8-68bed396791a.png)

   * Validation de base de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163568387-6bb672ed-447c-4973-9202-cecc44657a8c.png)


### 16) Vérifiez le PUT en utilisant POSTMAN et 'Joi' comme outil de validation:

   * Validation de nom de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163569695-ddc7b7ba-1331-43ed-89f0-91be3ba4c350.png)

   * Validation de site offical de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163569764-3ffa860a-d963-4b81-9687-6e4e425117be.png)

   * Validation de address de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163569879-6fe6f073-f4f5-4e03-beed-eca5ee9edf0c.png)

   * Validation de base de jornal:
   
   ![image](https://user-images.githubusercontent.com/61596276/163570019-34c747f5-8b6b-4b57-b84e-eb7e68076ead.png)



### 17)Lancez les tests de l'API :

		npm run test
![image](https://user-images.githubusercontent.com/61596276/163572985-f521a989-6825-4e58-b2ae-3f78858afd1d.png)


       
### II) Documentation:

      https://bachir-zahaf.gitbook.io/live-climate-change-api/
      
