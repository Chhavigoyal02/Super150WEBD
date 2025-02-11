
//adding a new todo
$('input').on('keypress',function(e){
    if(e.which===13){
        let todoText = $(this).val();
        $('#list').append(`<li><span>x </span>${todoText}</li>`);
        $(this).val('');
    }
});

// mark as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

// delete todo
$('ul').on('click','span',function(e){
    e.stopPropagation();//to stop event bubbling
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
});


// toggle input field
$('#plus').on('click',function(){
    $('input').fadeToggle();
});