function computeBMI()
    {
  //Obtain user inputs
        var height=Number(document.getElementById("height").value);
        var heightunits=document.getElementById("heightunits").value;
        var weight=Number(document.getElementById("weight").value);
        var weightunits=document.getElementById("weightunits").value;


        //Convert all units to metric
        if (heightunits=="inches") height/=39.3700787;
        if (weightunits=="lb") weight/=2.20462;

        //Perform calculation
        var BMI=weight/Math.pow(height,2);

        //Display result of calculation
        document.getElementById("output").innerText=Math.round(BMI*100)/100;

        var output =  Math.round(BMI*100)/100
        if (output < 10) 
        document.getElementById("comment").innerText = "you entered a wrong value!";
        else if (10 <= output && output < 14) 
        document.getElementById("comment").innerText = "You are seriously underweight!"; 
        else if (15 <= output && output < 18.5) 
        document.getElementById("comment").innerText = "You are slightly underweight.";
        else   if (output>=18.5 && output<=25)
        document.getElementById("comment").innerText = "you are Healthy";
        else   if (output>=25 && output<=30)
        document.getElementById("comment").innerText = "you are overweight";
        else if (30 <= output && output < 40) 
        document.getElementById("comment").innerText = "You are obese!";
        else if (40 <= output && output < 50) 
        document.getElementById("comment").innerText = "You are mobidly obese!";
        else if(output>50)
        document.getElementById("comment").innerText = "You should be dead...";  
        else
        document.getElementById("comment").innerText = "You did not enter a number";    
 }