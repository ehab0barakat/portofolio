$(".tabs>.btn").on("click", (y)=>{
    var ee =y.target.getAttribute("data-bt")
    var ww =[...$(".tab")]
    if (ee == "all" ){
        $(".tab").css("opacity", "1") 
    }
    else{
        $(".tab").css("opacity", ".4") 
        ww.forEach( x => {
            $(x).attr("data-bt") == ee ? $(x).css("opacity", "1") : ""
        });
    }
})



$(".fa-circle").on("click",(x)=>{
    $(".fa-circle").removeClass("activ")
    x.target.classList.add("activ")

    $(" .one ,.two , .three").css("z-index","-1")

    y = x.target.getAttribute("data-set")
    $(`.${y}`).css("z-index","5")
})