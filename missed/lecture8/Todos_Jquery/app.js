
//adding a new todo
$('input').on('keypress',function(e){
    if(e.which===13){
        let todoText = $(this).val();
        $('#list').append(`<li>${todoText}</li>`);
        $(this).val('');
    }
});


// 