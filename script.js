const usersData = [
    {
        id:0,
        username:"Wade Wilson",
        image:"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"California",
        country:"USA",
        techStak:["PHP","android","IOS",'Flutter','Swift','Kotlin','Java'],
        description:"Alexandra is very dedicated developer for mobile platforms and very good designer as well.",
    },
    {
        id:1,
        username:"Alex Morgan",
        image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"London",
        country:"UK",
        techStak:["UI","UX","Photoshop",'AfterEffect','Premier Pro','Adobe Illutrator'],
        description:"Wade is a 32 year old UI/UX designer, with impressive portfolio behind him.",
    },
    
    {
        id:2,
        username:"Jonathan Jones",
        image:"https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        city:"Berlin",
        country:"Germany",
        techStak:["Node.JS","MongoDB","React.JS",'HTML','CSS','JS','Express','Redux','Firebase','Next.JS','Angular.JS'],
        description:"Jonathan is very good web developer who can create any web application with high effeciency",
    },
    
]
var clutter=""
usersData.forEach(function(elem){
    clutter+=`<div class="h-[60vh] bg-white w-[50vh] flex flex-col items-center justify-items-center p-[30px]   "   id="box">
    <i class="ri-menu-line"></i>
    <img class="h-[15vh] w-[15vh] object-cover rounded-[50%]  " src="${elem.image}" alt="">
    <h2 class="font-bold p-[12px] ">${elem.username}</h2>
    <h4 class="font-light text-sm ">${elem.city}</h4>
    <div class=" h-[10vh] w-[45vh]  flex items-center justify-items-center  gap-8 my-[10px]  " id="tech">
        <button class="bg-[#DCE4F1] p-[10px] h-[40px] rounded-[15px]    ">UX</button>
        <button class="bg-[#DCE4F1] p-[10px] h-[40px] rounded-[15px]    ">IX</button>
        <button class="bg-[#DCE4F1] p-[10px] h-[40px] rounded-[15px]    ">photshop</button>
        <button class="bg-red-200 p-[10px] h-[40px] rounded-[15px]    ">+4</button>
    </div>
    <h5 class="max-w-50 text-[15px] ">${elem.description}</h5>
    <h3 class="p-[30px]">VIEW PROFILE</h3>

</div>`
})

var box= document.querySelector("#main")
box.innerHTML = clutter