function driving (speed)
{
    if(speed<70){
        console.log("Safe Driving");
    }
    else if (speed>70)
    {
        let point=(speed-70)/5;
        console.log("Speed limit crossed by penalty point : "+point)
       
       if(point>10){
         console.log("License Suspended")
        }
    }
    
}


let result = driving(120);