// like script start

var btns=document.querySelectorAll(".like-btn")
for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        var likes_nums=document.querySelectorAll(".likes span")
        if(likes_nums[i].innerText=="0") {
            likes_nums[i].innerHTML="1"
        }
        else {
            likes_nums[i].innerHTML="0"
        }
    })
}

var likes_nums=document.querySelectorAll(".likes span")
for (let i=0; i<likes_nums.length; i++)
{
    if (likes_nums[i].innerHTML=="")
    {
        likes_nums[i].innerHTML="0"
    }
}


// end of the like script


// share script
var share_btns=document.querySelectorAll(".share-btn")
var posts=document.querySelectorAll(".post")
for (let i=0; i<share_btns.length; i++) 
{
    share_btns[i].addEventListener("click", function()
    {
        document.querySelector(".share-section").classList.add("active")
        shared_img_src=document.querySelectorAll(".post img")[i].src
        document.querySelector(".share img").src=shared_img_src
    })
}

document.querySelector(".share .bi-x-lg").addEventListener("click", function()
{
    document.querySelector(".share-section").classList.remove("active")
})

// share script