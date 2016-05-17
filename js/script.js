$(document).ready(function () {
	
	// JAVASCRIPT COUNT DOWN ===============================================================
	$('.countdown').downCount({
		date: '07/01/2014 12:00:00',
		offset: +10
	});
	
	//JAVASCRIPT Youtube Video ============================================================
	$('document').ready(function() {
		var options = { videoId: 'BL4pZ6lLWm0', start: 3 };
			$('#wrapper').tubular(options);
	});
	
	// Start Javascript for Subscription Form =============================================
	$('.subscriptionForm').submit(function(){
		var email = $('#email').val();
		$.ajax({
		url:'email.php',
		type :'POST',
		dataType:'json',
		data: {'email': email},
			success: function(data){
				if(data.error){
					$('#error').fadeIn();
				}else{
					$('#success').fadeIn();
					$("#error").hide();
				}
			}
		})
		return false;
	});
                
	$('#email').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});
	
	$('#email').keydown(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});

	$("#email").click(function() {
        $("#email").val('');
    });
	
	//Animate Home
	
	//menu
	$('.home').css('cursor', 'pointer');
	$('.about').css('cursor', 'pointer');
	$('.contact').css('cursor', 'pointer');
	
	$('.home').click(function() {
		$('#about').addClass('hide');
		$('#contact').addClass('hide');
		$('#home').fadeIn(700);
		$('#home').removeClass('hide');
		$('.about').removeClass('active');
		$('.contact').removeClass('active');
		$('.home').addClass('active');
	});
	$('.about').click(function(){
		$('#home').addClass('hide');
		$('#contact').addClass('hide');
		$('#about').fadeIn(700);
		$('#about').removeClass('hide');
		$('.home').removeClass('active');
		$('.contact').removeClass('active');
		$('.about').addClass('active');
		
	});
	$('.contact').click(function(){
		$('#home').addClass('hide');
		$('#about').addClass('hide');
		$('#contact').fadeIn(700);
		$('#contact').removeClass('hide');
		$('.home').removeClass('active');
		$('.about').removeClass('active');
		$('.contact').addClass('active');
	});
	
});

