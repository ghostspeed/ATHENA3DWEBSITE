$(document).ready(function(){
    
    $("#aboutus").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#aboutus").mouseleave(function(){
        $(this).removeClass();
    });
    $("#aboutus").click(function(){
        document.getElementById("dT01").innerHTML="\n\
\nRC ATHENA 3D v1.0 is a project created by a team of students of D.Maria 2\n\
school in Braga, Portugal. Its objective is to show that anyone with passion and\n\
dedication is able to create a replicable 3D printer with relatively low cost.\n\
We wanted to prove that, so we created ATHENA, our 3D printer. \n\
We based our work on the web open-source project 'reprap' and improved their prototipe,\n\
personalizing the design and upgrading the code.\n\
\n</br></br>\n\
Meet our team:\n\
<ul><li>Manuel Brandão</li><li>Alexandre Brito</li><li>Rita Gomes</li></ul>\
";
    });
    
    
    $("#intro").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#intro").mouseleave(function(){
        $(this).removeClass();
    });
    $("#intro").click(function(){
        document.getElementById("dT01").innerHTML="Most people have not noticed it yet\n\
but 3D printing is begining to grow beyond borders. It is one of the most profitable\n\
markets in our industry today. If you want to keep up with the pace, we really encourage\n\
you to build your own 3D printer.<br/><br/>\n\
Building ATHENA will sharpen your skills in lots of areas, like Physics, Maths,\n\
electronics and programming and it will be very useful because you can build useful stuff\n\
and, who knows, create your own buisiness!<br/><br/>\n\
But how does a 3D printer work?</br>\n\
A 3D printer is a cartesian robot. It has 3 axes, a board, a frame, and an extruder.\n\
The extruder can move through this 3 axes while deposing melted plastic(PLA) in the board.\n\
";
    });
    
    
    $("#costs").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#costs").mouseleave(function(){
        $(this).removeClass();
    });
    $("#costs").click(function(){
        document.getElementById("dT01").innerHTML="You can make this beautifull peace\n\
of engineering in under 400 euros!\n\
You will need to buy some material:</br></br>\n\
<ul><li>Mechanics:</li><ul><li>Material1</li><li>Material2</li></ul><li>Electronics:</li><ul><li>Elec1</li><li>Elec2</li></ul><li>Software:</li><ul><li>Soft1</li><li>Soft2</li></ul></ul>";
    });
    
    
    $("#mechanics").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#mechanics").mouseleave(function(){
        $(this).removeClass();
    });
    $("#mechanics").click(function(){
        document.getElementById("dT01").innerHTML="MECHANICS";
    });
    
    
    $("#electronics").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#electronics").mouseleave(function(){
       $(this).removeClass(); 
    });
    $("#electronics").click(function(){
        document.getElementById("dT01").innerHTML="ELECTRONICS";
    });
    
     
    $("#software").mouseover(function(){
        $(this).addClass("mouseOver");
    });
    $("#software").mouseleave(function(){
       $(this).removeClass();
    });
    $("#software").click(function(){
        document.getElementById("dT01").innerHTML="SOFTWARE";
    });
    
});
