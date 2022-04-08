# Activite-02

### I) Tools to made the Activite-01:
       
       https://app.gitbook.com/s/72ne90loNsZWwN0WD79t/reference/api-reference/tools
       
### II) Steps to made the Activite-01:

1) install node js:

         https://nodejs.org/en/download/

2) install json server
         
         npm install unirest
         
3) create db.json
4) generate json code:

         repeat(100, 
         {
		
  	      "id": index(),
             "name": "newspaperindex()",
             "website": "https://www.newspaperindex().com/",
             "address":"https://www.newspaperindex().com/environment/climate-change/",
             "base": ""

         })
              
5) launch the server 

              json-server db.json
              
6) install unirest:
              
              npm install unirest
              
7) adabt listing 2 code to my code

      1) To see only the first 10 values we can use this request :

       var req1 = unirest("GET","http://localhost:3000/newspapers?_limit=10");
       req1.headers({
       "cache-control": "no-cache",
       })
       req1.end(function (res) {
       if (res.error) throw new Error(res,error)
       console.log(res.body)
       })
       
      2) To see only the data that starts with the letter M we can use this request :
      
       var req2 = unirest("GET","http://localhost:3000/newspapers");
       req2.headers({
       "cache-control": "no-cache",
       })
       req2.end(function (response) {
       console.log(response.body.filter((newspapers) => newspapers.name.startsWith("M")))
       }) 
       
8) launch cmd and locate my file project
9) launch the function:
                  
                  node index.js      

       
### III) Progress of the API check this repositorie:

      https://github.com/BachirZahaf27/Live-Climate-Change-API
      
      
### IV) Documentation:

       https://bachir-zahaf.gitbook.io/live-climate-change-api/


