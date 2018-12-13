/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${button}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         currentQuestion = 0;
         $(".answer").mouseenter(function(){$(this).css("color","black");}).mouseleave(function(){$(this).css("color","#535353");});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${end-button}", "click", function(sym, e) {
         sym.play('intro');
         currentQuestion = 0;

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'incorrect-sym'
   (function(symbolName) {   
   
   })("incorrect-sym");
   //Edge symbol end:'incorrect-sym'

   //=========================================================
   
   //Edge symbol: 'question1_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         currentQuestion++;
         sym.getComposition().getStage().$("question-number").html(currentQuestion + "/4");
      
      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 571, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().stop();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer1}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer2}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4}", "click", function(sym, e) {
         //CORRECT
         sym.play();
         sym.getComposition().getStage().play();
         //INCORRECT
         //sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer3}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4Copy}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end

      })("question1");
   //Edge symbol end:'question1'

   //=========================================================
   
   //Edge symbol: 'question1_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         currentQuestion++;
         sym.getComposition().getStage().$("question-number").html(currentQuestion + "/4");
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().stop();
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer1}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer2}", "click", function(sym, e) {
         //CORRECT
         sym.play();
         sym.getComposition().getStage().play();
         //INCORRECT
         //sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer3}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4Copy2}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end

         })("question2");
   //Edge symbol end:'question2'

   //=========================================================
   
   //Edge symbol: 'question2_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         currentQuestion++;
         sym.getComposition().getStage().$("question-number").html(currentQuestion + "/4")
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().stop();
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer1}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer2}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer3}", "click", function(sym, e) {
         //CORRECT
         sym.play();
         sym.getComposition().getStage().play();
         //INCORRECT
         //sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4Copy3}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end

         })("question3");
   //Edge symbol end:'question3'

   //=========================================================
   
   //Edge symbol: 'question3_1'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         currentQuestion++;
         sym.getComposition().getStage().$("question-number").html(currentQuestion + "/4");
      
      });
         //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 600, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().stop();
      
      });
            //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer1}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer2}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer3}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
         //Edge binding end
      
      Symbol.bindElementAction(compId, symbolName, "${answer4Copy4}", "click", function(sym, e) {
         //CORRECT
         sym.play();
         sym.getComposition().getStage().play();
         //INCORRECT
         //sym.getComposition().getStage().getSymbol("incorrect-sym").play();
      
      
      });
      //Edge binding end

         })("question4");
   //Edge symbol end:'question4'

   //=========================================================
   
   //Edge symbol: 'question4_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         currentQuestion++;
         sym.getComposition().getStage().$("question-number").html(currentQuestion + "/5");

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().stop();

      });
            //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer1}", "click", function(sym, e) {
         //CORRECT
         sym.play();
         sym.getComposition().getStage().play();
         //INCORRECT
         //sym.getComposition().getStage().getSymbol("incorrect-sym").play();

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer2}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer4}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${answer3}", "click", function(sym, e) {
         //CORRECT
         //sym.play();
         //sym.getComposition().getStage().play();
         //INCORRECT
         sym.getComposition().getStage().getSymbol("incorrect-sym").play();
         

      });
         //Edge binding end

         })("question5");
   //Edge symbol end:'question5'

   //=========================================================
   
   //Edge symbol: 'Down-level'
   (function(symbolName) {   
   
   })("Down-level");
   //Edge symbol end:'Down-level'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-74783569");