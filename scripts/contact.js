function disableElements(elements) {
    for (i of elements){
        i.disabled = true;
    }
}

function disableForm(form) {
    var inputs = form.getElementsByTagName('input'),
        textareas = form.getElementsByTagName('textarea'),
        buttons = form.getElementsByTagName('button'),
        selects = form.getElementsByTagName('select');
  
    disableElements(inputs);
    disableElements(textareas);
    disableElements(buttons);
    disableElements(selects);
}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_q8p3bu8';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '¡Gracias! Mensaje enviado';
      btn.style.background = '#049F76';
      btn.style.color = '#ffffff';
      disableForm(document.getElementById('form'));
    }, (err) => {
      btn.value = 'Error';
      console.log(JSON.stringify(err));
    });
});