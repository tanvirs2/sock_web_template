

    $(document).ready(function($){








        /* gallery */
        $(".projects-titles li").on('click', function(){
            
            $(".projects-titles li").removeClass("active");
            $(this).addClass("active");            
            
            var selector = $(this).attr('data-filter');
            $(".projects-list").isotope({
                filter : selector
            })
        });

        var selectedClass = "";
                $(".filter").click(function(){
                selectedClass = $(this).attr("data-rel");
                $("#gallery").fadeTo(100, 0.1);
                $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
                setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('animation');
                $("#gallery").fadeTo(300, 1);
                }, 300);
            });



       
        /* Reg Date */
        $('#datetimepicker1').datetimepicker({
             format: 'L'

        });


    

        


    });








    $(window).on("load", function() {



         $('[data-toggle="tooltip"]').tooltip();



    /* Checkout Page One : Country & State Select */
        $("select").on("click" , function() {
  
          $(this).parent(".select-box").toggleClass("open");
          
        });

        $(document).mouseup(function (e)
        {
            var container = $(".select-box");

            if (container.has(e.target).length === 0)
            {
                container.removeClass("open");
            }
        });


        
        $("select").on("change" , function() {
          
          var selection = $(this).find("option:selected").text(),
              labelFor = $(this).attr("id"),
              label = $("[for='" + labelFor + "']");
            
          label.find(".label-desc").html(selection);
            
        });




        /* Checkout Page Two : Shipping selection : At Least Only one select */

         $('input.chk').on('change', function() {
            $('input.chk').not(this).prop('checked', false);  
        });








});


