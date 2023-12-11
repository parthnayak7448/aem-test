export default function decorate(block) {
    // Extract children of the parent div
    const children = block.children;

    // Set background image based on the first child's picture
    const firstChild = children[0];
    if (firstChild) {
        const pic = firstChild.querySelector('picture');

        if (pic) {
            const img = pic.querySelector('img');

            if (img) {
                const parentElementStyle = block.parentElement.style;
                parentElementStyle.backgroundImage = `url(${img.src})`;
                parentElementStyle.backgroundRepeat = 'no-repeat';
                parentElementStyle.backgroundSize = 'cover';
                parentElementStyle.backgroundPosition = 'center';
                pic.style.display = 'none';
            }
        }
    }

    // Change heading size based on window width
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
