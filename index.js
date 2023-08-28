// $("h1").css("color","red");

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
// function handleFadeIn() {
//     const elements = document.getElementsByClassName('animate');

//     elements.forEach(element => {
//         if (isElementInViewport(element)) {
//             element.classList.add('fade-in');
//           //   element.fadeIn();
//             window.removeEventListener('scroll', handleFadeIn); // Remove the event listener once the fade-in is triggered
//           }
//     });
//   }
  
//   // Add a scroll event listener to trigger the fade-in effect
//   window.addEventListener('scroll', handleFadeIn);

// $(".animate").fadeIn();
// $(".animate").text("hello");

document.querySelector('.pull-down').style.paddingTop = "8.5%";
var cont = 0 ;
function pullDown(){
  var element = document.querySelector('.pull-down');
  if(cont%2==1){
    element.style.paddingTop = "25%";
    cont++ ;
  } else{
    element.style.paddingTop = "8.5%";
    cont++ ;
  }  
}
pullDown();