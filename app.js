const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const icon = question.querySelector('i');

  question.addEventListener('click', () => {
    question.classList.toggle('active');
    
    // Change the icon class when the question is toggled
    if (question.classList.contains('active')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      
    } else {
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus');
    }
  });
});
