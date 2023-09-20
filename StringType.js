function strType(str)
{

    for (let key in str)
    {
        (typeof str[key]=== 'string')
        {
            console.log(`${key}: ${str[key]}`);
        }
    }

}



const str = {

    name: "sanaullah",
    dept: "computer science",
    semester: 5 ,
    age : 20
};
 

strType(str)