<><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script><script
 src="https://cdn.jsdelivr.net/jquery.slick/1.8.1/slick.min.js"></script><script>
    $(document).ready(function() {$('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Adjust the number of slides to show on smaller screens
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Adjust the number of slides to show on mobile screens
                }
            }
        ]
    })};
    &rbrace;);
</script></>
