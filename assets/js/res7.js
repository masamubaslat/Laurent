// ***************************************** start main resturant page *****************************************
$(document).ready(function(){
    $("body").css('overflow','auto');
    $('.rest-head-content').fadeIn(2000);
    $('.rest-head-content').removeClass('d-none');
})
$(window).scroll(function(){
    let t=$(window).scrollTop();
    console.log(t);
    if(t>1480){
        $('.res7-s2-img').fadeIn(3000)
        $('.res7-s2-img').removeClass('d-none');
        $('.res7-s2-svg').fadeIn(3000);
        $('.res7-s2-svg').removeClass('d-none');
        $('.landing-laptop-img2').css('animation','3s silde_animation');
       
    }
})


let s1=[
    {id :1 , image : 'assets/css/images/res7/s1-1.jpg' , tilte:'Main Home' , type:'cafe'},
    {id :2 , image : 'assets/css/images/res7/s1-2.jpg' , tilte:'Bar Home' , type:'cafe' },
    {id :3 , image : 'assets/css/images/res7/s1-3.jpg' , tilte:'Resturant Home', type:'cafe'},
    {id :4 , image : 'assets/css/images/res7/s1-4.jpg' , tilte:'Fine Dining' , type:'resturant'},
    {id :5 , image : 'assets/css/images/res7/s1-5.jpg' , tilte:'Split Screen Showcase' , type:'cafe'},
    {id :6 , image : 'assets/css/images/res7/s1-6.jpg' , tilte:'Home Cuisin' , type:'cafe'},
    {id :7 , image : 'assets/css/images/res7/s1-7.jpg' , tilte:'Resturant Menu' , type:'resturant'},
    {id :8 , image : 'assets/css/images/res7/s1-8.jpg' , tilte:'Fullscreen Showcase' ,type:'resturant'},
    {id :9 , image : 'assets/css/images/res7/s1-9.jpg' , tilte:'Carousel Showcase' , type:'cafe'},  
]
let s3=[
    {id :1 , image : 'assets/css/images/res7/s3-1.jpg' , tilte:'Meet The Chef' , type:'cafe'},
    {id :2 , image : 'assets/css/images/res7/s3-2.jpg' , tilte:'Our Menu' , link:"./resturant7 menu.html" },
    {id :3 , image : 'assets/css/images/res7/s3-3.jpg' , tilte:'Gallery Page', type:'cafe'},
    {id :4 , image : 'assets/css/images/res7/s3-4.jpg' , tilte:'About Us' , type:'resturant'},
    {id :5 , image : 'assets/css/images/res7/s3-5.jpg' , tilte:'Contact Us' , type:'cafe'},
    {id :6 , image : 'assets/css/images/res7/s3-6.jpg' , tilte:'Booking Page' , type:'cafe'},
    {id :7 , image : 'assets/css/images/res7/s3-7.jpg' , tilte:'Our Kitchen' , type:'resturant'},
    {id :8 , image : 'assets/css/images/res7/s3-8.jpg' , tilte:'Our Chefs' ,type:'resturant'},
    {id :9 , image : 'assets/css/images/res7/s3-9.jpg' , tilte:'Coming Soon' , type:'cafe'},  
]

function home_pages(arr, place){
    let list =" ";
    for(let i=0 ; i<arr.length ; i++ )
    {   
        list+=`
            <div class="mt-5 text-center ">
                        <a href="${arr[i].link}"><div class="s1-1" style="background:url(${arr[i].image}); background-size:cover";></div></a> 
                        <p class="mt-3 text-white text-center w-100">${arr[i].tilte}</p>
                     </div>
                `
    }
    document.getElementById(place).innerHTML=list;
}
home_pages(s1, 'res1-data1');      
home_pages(s3, 'res7-data2'); 
//https://forkify-api.herokuapp.com/api/search?q=seafood

//****************************************** end main resturant page ********************************************


//****************************************** start resturant --7-- page ********************************************




