// 
// 
//
$( document ).ready(function() {
	function set_bg(obj_id){
		link_img =  "url('";
		link_img += $(obj_id).attr("src");
		link_img += "')";
    target= $(obj_id).attr("target");

    //alert(link_img);
		//parent_bg = $(obj_id).parents("section").css("background-image");
		$(target).css("background-image" ,link_img);

	}
	// main function for photo's gallery
	// it works when user choses photo by moving mouse coursor (or finger on toutch screens) on photo.
	$(".set_background").mouseenter(function()
		{
      //console.log( $(this).attr("target"));
			set_bg(this);
			//siblings_invissible(this);
		});
  // it sets chosen photo as background

  // it check if element is on screen
  function isInView(elem){
    // works only with elements with ID
      if($(elem).attr("id")){ 
        // check if element is on screen
        if( $(elem).offset().top  - $(window).scrollTop()  <= screen.height*0.9 )
        {
        // if it is it returns its ID, to $(window).scroll()
          return $(elem).attr("id");
        }
        else
        {
          // if element is not on screen it stops function and returns FALSE
          return false;
        }
      }
      else
      {
        // if element has no id (likely null or undefinded) it returns FALSE and stops function
        //alert($(elem).attr("id"));
        return false;
      }
      
  }
  // Scroll event - during scrolling elements will apear on screen
  $(window).scroll(function(){
    // It gets ID of element by running isInView function 
      id_card = isInView($('.show_animation'));
      if ( id_card != false )
      {
        // if element is on screen and has own ID it starts animations (by adding css property to this)
        // Animation mentioned above is in style.css file in css directory 
        //  apear_from_nowhere in /css/style.css
        //alert(id_card);
      $("#"+id_card).css("animation-name", "apear_from_nowhere" );
      $("#"+id_card).css("animation-duration", "2s");
      $("#"+id_card).css("animation-timing-function", "ease-in");
      $("#"+id_card).addClass("opacity-100"); 
      // it removes class "show_animation" in order to avoid errors, and machining next element.
      // without this function will machining the same element over and over .
      $("#"+id_card).removeClass("show_animation");   
      $("#"+id_card).addClass("show_done");   
        if ($("#"+id_card).hasClass("will_photo"))
         {
          $("#"+id_card).children("img").attr("src",$("#"+id_card).children("img").attr("x_src"));
         }
         if ($("#"+id_card).hasClass("link_loader"))
         {
          //alert($("#"+id_card).attr("link"));
          tmp_api=open_link($("#"+id_card).attr("link"));
          // It fix "fast mouse scrolling + hover" bug
          $("#"+id_card).removeClass("link_loader")
          if (tmp_api)
          {
            api=tmp_api;
            page++;
            make_galery(api,page);
          }
         //$("#"+id_card).children("img").attr("src",$("#"+id_card).children("img").attr("x_src"));
         
         }  
      }
  })
  // functions for photo gallery
  // it hides unused photos 
  function siblings_invissible(obj_id)
  {
    $(obj_id).parents().siblings().children(".set_background").addClass("opacity-0");
    $(obj_id).parents().siblings().children(".set_background").addClass("inactive");
  }
  //  it make photos vissible therefore user can hover another photo
  function siblings_vissible(obj_id)
  {
    $(obj_id).parents().siblings().children(".set_background").removeClass("opacity-0");
    $(obj_id).parents().siblings().children(".set_background").removeClass("inactive");
  }
  // 
  $(".set_background").mouseleave(function()
    {
      //siblings_vissible(this);
    });
  // It makes buttons on navbar on the top on screen yellow (bg-warning), therefore buttons become more vissible.
  /*$(".nav-item").hover(
    function(){
      //  mouse enter - buttons are yellow
      $(this).addClass("bg-warning");
    },
    function(){
      //  mouse leave- button are white
      $(this).removeClass("bg-warning");
    });*/
  $(".set_background").click(function() 
    {
    //$(this).toggleClass("opacity-0");
    }
  );

// for changing languages
  $(".language").click(function()
    {
    $(".nav-link:contains('Discover Us')").text("Tref uns");
    }
  );
  
    function un_rotated(elem)
    {
      if ($(elem).hasClass("rotated-10"))
      {     
        $(elem).removeClass("rotated-10",5000, "linear");
    }
    }
    function make_small(elem)
    { 
      $(elem).addClass("smallable",5000, "linear"); 
    }
    function make_small_most_left(elem)
    {
        $(elem).addClass("smallable_3d_most_left",5000, "linear");
    }
    function make_small_just_left(elem)
    {
        $(elem).addClass("smallable_3d_left",5000, "linear");
    }
    function make_small_just_right(elem)
    {
      $(elem).addClass("smallable_3d_right",5000, "linear");
    }
    function make_small_most_right(elem)
    {
      $(elem).addClass("smallable_3d_most_right",5000, "linear");
    }

    function un_make_small(elem)
    {
      if ($(elem).hasClass("rotated-10"))
      {     
      $(elem).addClass("rotated-10",5000, "linear");  
      }
      $(elem).removeClass("smallable",6000, "linear");
      
    }
    function un_make_small_most_left(elem)
    {
        $(elem).removeClass("smallable_3d_most_left",5000, "linear");
    }
    function un_make_small_just_left(elem)
    {
        $(elem).removeClass("smallable_3d_left",5000, "linear");
    }
    function un_make_small_just_right(elem)
    {
      $(elem).removeClass("smallable_3d_right",5000, "linear");
    }
    function un_make_small_most_right(elem)
    {
      $(elem).removeClass("smallable_3d_most_right",5000, "linear");
    }
    
    $(".small_siblings").hover(
    function(){
      if ( $(this).hasClass("show_done") ) 
      {
        un_rotated($(this).siblings(".rotated-10"));
        make_small($(this).siblings(".no_3d"));
        make_small_most_left($(this).siblings(".most_left"));
        make_small_just_left($(this).siblings(".just_left"));
        make_small_just_right($(this).siblings(".just_right"));
        make_small_most_right($(this).siblings(".most_right"));
      }

      if(!$(this).hasClass("show_animation"))
      {
        un_rotated($(this).siblings(".rotated-10"));
        make_small($(this).siblings(".no_3d"));
        make_small_most_left($(this).siblings(".most_left"));
				make_small_just_left($(this).siblings(".just_left"));
				make_small_just_right($(this).siblings(".just_right"));
				make_small_most_right($(this).siblings(".most_right"));	
			}

		},
		function(){
			if ( $(this).hasClass("show_done") ) 
			{
				un_make_small($(this).siblings(".no_3d"));
				un_make_small_most_left($(this).siblings(".most_left"));
				un_make_small_just_left($(this).siblings(".just_left"));
				un_make_small_just_right($(this).siblings(".just_right"));
				un_make_small_most_right($(this).siblings(".most_right"));
			}

			if(!$(this).hasClass("show_animation"))
			{
				un_make_small($(this).siblings(".no_3d"));
				un_make_small_most_left($(this).siblings(".most_left"));
				un_make_small_just_left($(this).siblings(".just_left"));
				un_make_small_just_right($(this).siblings(".just_right"));
				un_make_small_most_right($(this).siblings(".most_right"));
			}
		});
  	
  	function image_flip()
  	{
  		//$("#h_test").addClass("lay_down"); /* Standard syntax */
  		$(".left_cube").css("animation-name","ani_rotated-90");
  		$(".left_cube").css("animation-duration", "3s");
  		$(".left_cube").css("animation-timing-function", "ease-in");
  		$(".right_cube").addClass("rotated-90",500, "easeOutBounce");
  		$(".left_cube").children().children(".card-title").text($( "#custom-handle" ).text());
  		$(".right_cube").children().children(".card-title").text($( "#custom-handle" ).text());
  	}
  	
});

// End of program