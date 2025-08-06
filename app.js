$(function() {
  // exercise 1
  $('#toggleButton').on('click', function(){
    $('#myParagraph').toggle()
  })

  // exercise 2
  $('#colorButton').on('click', function(){
    $(this).next().css('background', 'yellow')
  })

  //exercise 3
  $('#addClassButton').on('click', function(){
    $('#classDiv').addClass('newClass')
  })
  $('#removeClassButton').on('click', function(){
    $('#classDiv').removeClass('newClass')
  })

  // exercise 4
  $('#fadeInButton').on('click', function(){
    $('#fadeDiv').fadeIn()
  })
  $('#fadeOutButton').on('click', function(){
    $('#fadeDiv').fadeOut()
  })

  // exercise 5
  $('#slideUpButton').on('click', function(){
    $('#slideDiv').slideUp()
  })
  $('#slideDownButton').on('click', function(){
    $('#slideDiv').slideDown()
  })
})