$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault(e);

        const tarefa = $('#inserir-tarefa').val();
        const horario = $('#data-tarefa').val();

        if (tarefa){
            const novaTarefa = $(`<li>${tarefa} - ${horario}</li>`);
            novaTarefa.appendTo('#listas-tarefas');

            $('#inserir-tarefa').val('');
            $('#data-tarefa').val('');
        }
});

$(document).on('click', '#listas-tarefas li', function(){
    $(this).toggleClass('completa');
});

$('#reseta').click(function(){
    $('#listas-tarefas').slideUp(function(){
        $(this).empty().show();
    });
});
});
