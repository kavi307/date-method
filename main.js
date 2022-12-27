let time=new Date();
    let a=parseInt(prompt("enter time"));
    let mint=time.setTime(a);

    if(mint>=5&&mint<=12){
        console.log("Morning");
    }
    else if(mint>=12&&mint<=16){
        console.log("afternoon");
    }
    else if(mint>=16&&mint<=19){
        console.log("evening");
    }
    else if(mint>=19&&mint<=24){
        console.log("night");
    }
    else{
        console.log("please check your time!");
    }