const router = require('express').Router();
const newspapers = require('../db.json')
const { body, validationResult} = require('express-validator');
const { check } = require('express-validator');

const jornales= []//array of newspapers (id,website,source)


//---------------------------------------------- FUNCTIONS -----------------------------------------------------
//Define the dunction that push newspapers's (id,website,source) to jornales array
newspapers.forEach(newspaper => {
    //Pushing the titles and the url in the array articles    
    jornales.push({id:newspaper.id, source: newspaper.name, Website:newspaper.website})
    })


//---------------------------------------------- ROUTES -------------------------------------------------------

//--- GETS

//Get all newspapers (id,website,source) ---- DONE
router.get('/', (req,res) => {
    //Display the articles
    console.log('request: GET /newspapers')             
    res.status(200).json(newspapers)   
    //res.status(200).json(jornales)    
})
//Get newspapers (id,website,source) by id ---- DONE
router.get('/:newspapersId', (req,res) => {
    //Display the newspapers
    //console.log(req)
    const newspaperId = req.params.newspapersId;
    console.log('request: GET /newspapers/'+newspaperId+'') 
    res.status(200).json(jornales[newspaperId-1])//-1 because it start with 0 rathen 1
    
})



//--- POSTES   ---- DONE?

router.post('/',
//---- Validation
//---- Sanitization
check('name').isLength({ min: 5 }).toLowerCase().trim().not().isEmpty().trim().escape(),
check('website').isURL().withMessage('its not a url').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
check('address').isURL().withMessage('its not a url').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
check('base').isString().withMessage('has to be a url string').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),

(req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const newspaper = {
    id: newspapers.length + 1,
    name: req.body.name,
    website: req.body.website,
    address: req.body.address,
    base: req.body.base,    
    };

    newspapers.push(newspaper);
    console.log('request: POST /newspapers {'+req.body.name+','+req.body.website+','+req.body.address+','+req.body.base+'}')
    res.status(200).json(newspapers)
});


//--- PUTS (MODIFY) ---- DONE
router.put('/:id',
//---- Validation
//---- Sanitization
check('name').isLength({ min: 5 }).toLowerCase().trim().not().isEmpty().trim().escape(),
check('website').isURL().withMessage('its not a url').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
check('address').isURL().withMessage('its not a url').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
check('base').isString().withMessage('has to be a url string').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
(req,res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

    const id = parseInt(req.params.id)//get the id from the req
    let newspaper = newspapers.find(newspaper => newspaper.id === id)//find the parking that have the same id as the id the client insert
    newspaper.name = req.body.name,//set the name of the parking to the name that the client insert in the req body
    newspaper.website =req.body.website,//
    newspaper.address =req.body.address,//
    newspaper.base =req.body.base,//
    console.log('request: POST /parkings/'+id+'{'+req.body.name+','+req.body.website+','+req.body.address+','+req.body.base+'}')
    res.status(200).json(newspaper)
})


//--- DELETE ---- DONE
router.delete('/:id',(req,res) => {
    const id = parseInt(req.params.id)
    let newspaper = newspapers.find(newspaper => newspaper.id === id)
    newspapers.splice(newspapers.indexOf(newspaper),1)
    console.log('request: DELETE /parkings/'+id+'{'+req.body.name+','+req.body.website+','+req.body.address+','+req.body.base+'}')
    res.status(200).json(newspapers)
})

module.exports = router;