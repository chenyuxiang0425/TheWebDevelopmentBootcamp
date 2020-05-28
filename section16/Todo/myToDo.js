let lis = document.querySelectorAll("li");

lis.forEach(function (li) {
    li.addEventListener("click",function () {
        li.classList.toggle("done");
    });
    li.addEventListener("mouseover",function () {
        li.classList.add("selected");
    });
    li.addEventListener("mouseout",function () {
        li.classList.remove("selected");
    });
})