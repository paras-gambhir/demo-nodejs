var express = require('express');
var router = express.Router();
var openNLP = require("opennlp");

/* GET users listing. */
router.get('/nlp', function(req, res, next) {
   

    var sentence = 'George Washington';
    var posTagger = new openNLP().posTagger;
    posTagger.tag(sentence, function(err, tokens_arr) {
        console.log(err, tokens_arr)
    });
    posTagger.topKSequences(sentence, function(error, tagger) {
        console.log(tagger.getScore())
        console.log(tagger.getProbs())
        console.log(tagger.getOutcomes())
    });
   
    // var tokenizer = new openNLP().tokenizer;
    // tokenizer.tokenize(sentence, function(err, results) {
    //     console.log(err, results);
    //     tokenizer.getTokenProbabilities(function(error, response) {
    //             console.log(error, response);
    //             });
    //     }); 

    // var nameFinder = new openNLP().nameFinder;
    // nameFinder.find(sentence, function(err, tokens_arr) {
    //     console.log(err, tokens_arr)
    //     nameFinder.probs(function(error, response) {
    //         console.log(error, response)
    //     });
    // });

  //  var nameFinder = new openNLP().nameFinder;
    // var nameFinder = new openNLP().nameFinder;
    // nameFinder.find(sentence, function(err, tokens_arr) {
    //     console.log(tokens_arr);
    //  //   console.log(err, tokens_arr)
    //     // nameFinder.probs(function(error, response) {
    //     //  //   console.log(error, response)
    //     // });
    // });


  
});

module.exports = router;
