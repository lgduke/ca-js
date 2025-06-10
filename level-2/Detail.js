var tabcount = $(".tab-button").length;
console.log(tabcount);

for (let i=0; i< tabcount; i++) {

    $('.tab-button').eq(i).on('click', function() {
        alert(".tab-button clicked"); 
        $('.show').toggleClass('show');       
        $('.orange').toggleClass('orange');    
        $('.tab-content').eq(i).addClass('show');  
        $('.tab-button').eq(i).addClass('orange');    
    });  
}

//var 버튼 = $('.tab-button');
//var 컨텐트 = $('.tab-content');
//
//버튼.eq(0).on('click', function() {
//    alert(".tab-button clicked"); 
//    $('.show').toggleClass('show');       
//    $('.orange').toggleClass('orange');    
//    컨텐트.eq(0).addClass('show');  
//    버튼.eq(0).addClass('orange');    
//});  
//버튼.eq(1).on('click', function() {
//    alert(".tab-button clicked"); 
//    $('.show').toggleClass('show');       
//    $('.orange').toggleClass('orange');    
//    컨텐트.eq(1).addClass('show');  
//    버튼.eq(1).addClass('orange');    
//});  
//버튼.eq(2).on('click', function() {
//    alert(".tab-button clicked"); 
//    $('.show').toggleClass('show');       
//    $('.orange').toggleClass('orange');    
//    컨텐트.eq(2).addClass('show');  
//    버튼.eq(2).addClass('orange');    
//});  