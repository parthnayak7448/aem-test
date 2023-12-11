export default function decorate(block) {
    console.log('block', block);
     // Get the children of the parent div
     var children = block.children;
     console.log('block', children);
     // Loop through the children and assign a class
     for (var i = 0; i < children.length; i++) {
       var child = children[i];
       console.log('block', child);
       // Assign a class to each child
       if(i ==2){
       child.classList.add('myButton');
       child.addEventListener("click", function() {
        // Your button click logic here
        alert("Button Clicked!");
      });
      child.children[0].classList.add('btnText');
       }
     }
    // block.style.textAlign = 'center';
    // block.style.position = 'relative';
    // block.style.left = '50%';
    // block.style.transform = 'translateX(-50%)';
    // block.style.color = '#FFF';

    // children[0].style.fontSize = '45px';
    // children[0].style.lineHeight = '110%';
    // children[0].style.fontweight = '700';
    // children[1].style.fontSize = '18px';
    // children[1].style.paddingTop = '16px';
    function changeHeadingSize() {
        Array.from(block.getElementsByTagName(window.innerWidth <= 360 ? 'h2' : 'h3')).forEach(function (heading) {
            if (window.innerWidth <= 360) {
                // Change h2 to h3
                if (heading) {
                    var newHeading = document.createElement('h3');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                }
            } else {
                // Change h3 back to h2
                if (heading && heading.tagName.toLowerCase() === 'h3') {
                    var newHeading = document.createElement('h2');
                    newHeading.innerHTML = heading.innerHTML;
                    heading.parentNode.replaceChild(newHeading, heading);
                }
            }
        });
    }

    // Initial call to set the heading size on page load
    changeHeadingSize();

    // Listen for window resize events to update heading size
    window.addEventListener('resize', changeHeadingSize);
}
