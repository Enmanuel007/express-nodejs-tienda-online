'use strick';
var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
    var resultado = 0;
    var num1 = req.query.pantalon;
    var num2 = req.query.camisa;
    var num3 = req.query.camiseta;
    var num4 = req.query.paragua;
    var num5 = req.query.tenis;
    var num6 = req.query.zapatos;
    var num7 = req.query.correa;
    var num8 = req.query.bufanda;
    var num9 = req.query.mochila;
    var num10 = req.query.gafas;
    var num11 = req.query.chaqueta;
    var num12 = req.query.gorra;
    

    if(isNaN(num1)|| isNaN(num2) || isNaN(num3)|| isNaN(num4) || isNaN(num5)
    || isNaN(num6) || isNaN(num7)|| isNaN(num8) || isNaN(num9)|| isNaN(num10)
    || isNaN(num11) || isNaN(num12))
    
    resultado =0;
    else{
       
        if(parseInt(num1)>=10)
        {
           
            resultado1 =parseInt(num1)*0.9*80000;

        }

        else{
            resultado1 = parseInt(num1)*80000;
        }
       //---------------------------------------------------

        
        if(parseInt(num2)>=10)
        {
            resultado2 =parseInt(num2)*0.9*30000;
      
        }

        else{
            resultado2 = parseInt(num2)*30000;
        }
        //---------------------------------------------------




        if(parseInt(num3)>=10)
        {
            resultado3 =parseInt(num3)*0.9*20000;
      
        }
        else{
            resultado3 = parseInt(num3)*20000;
        }
        //---------------------------------------------------


        if(parseInt(num4)>=10)
        {
            resultado4 =parseInt(num4)*0.9*25000;
      
        }
        else{
            resultado4 = parseInt(num4)*25000;
        }
        //---------------------------------------------------



        if(parseInt(num5)>=10)
        {
            resultado5 =parseInt(num5)*0.9*70000;
      
        }

        else{
            resultado5 = parseInt(num5)*70000;
        }
        //---------------------------------------------------

        if(parseInt(num6)>=10)
        {
            resultado6 =parseInt(num6)*0.9*50000;
      
        }

        else{
            resultado6 = parseInt(num6)*50000;
        }
        //---------------------------------------------------


        if(parseInt(num7)>=10)
        {
            resultado7 =parseInt(num7)*0.9*15000;
      
        }
        //---------------------------------------------------

        else{
            resultado7 = parseInt(num7)*15000;
        }
        //---------------------------------------------------

        if(parseInt(num8)>=10)
        {
            resultado8 =parseInt(num8)*0.9*35000;
      
        }

        else{
            resultado8 = parseInt(num8)*35000;
        }
        //---------------------------------------------------


        if(parseInt(num9)>=10)
        {
            resultado9 =parseInt(num9)*0.9*70000;
      
        }

        else{
            resultado9 = parseInt(num9)*70000;
            
            
        }

         //---------------------------------------------------

         if(parseInt(num10)>=10)
         {
             resultado10 =parseInt(num10)*0.9*10000;
       
         }
 
         else{
             resultado10 = parseInt(num10)*10000;
             console.log(resultado10);
             
         }

         //---------------------------------------------------

        if(parseInt(num11)>=10)
        {
            resultado11 =parseInt(num11)*0.9*80000;
      
        }

        else{
            resultado11 = parseInt(num11)*80000;
        }

        if(parseInt(num12)>=10)
        {

            resultado12 =parseInt(num12)*0.9*25000;
      
        }

        else{
            resultado12 = parseInt(num12)*25000;
        }


        resultado = resultado1+resultado2+resultado3+resultado4+resultado5+resultado6+resultado7+resultado8+resultado9
        +resultado10+resultado11+resultado12; 
   
    }

    res.render('template',{valor: resultado});
    

});

app.listen(3000);