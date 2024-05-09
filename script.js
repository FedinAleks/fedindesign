// menu

document.addEventListener("DOMContentLoaded", function() {
  var menuLinks = document.querySelectorAll('.menu_list a');

  menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(e) {
          e.preventDefault(); // Заборона стандартної поведінки переходу за посиланням
          var targetId = this.getAttribute('href'); // Отримання id цільового блоку з атрибута href
          var targetBlock = document.querySelector(targetId); // Знаходження цільового блоку
          if (targetBlock) {
              var targetOffset = targetBlock.offsetTop; // Отримання вертикального зсуву цільового блоку відносно початку документа
              // Плавна прокрутка до цільового блоку
              window.scrollTo({
                  top: targetOffset,
                  behavior: 'smooth'
              });
          }
      });
  });
});


// mobile menu


function closeMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = 'none';
}

// Додаємо обробники подій для кожного посилання в меню
var menuLinks = document.querySelectorAll('.menu_mobile_list a');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
      // Зчитуємо значення атрибута href
      var targetId = this.getAttribute('href');

      // Закриваємо меню
      closeMenu();

      // Прокручуємо сторінку до відповідного елемента
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});





// header

window.addEventListener('scroll', function() {
  var header = document.querySelector('.page_home header'); // Означення header тут
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
      header.classList.add('fixed_header');
  } else {
      header.classList.remove('fixed_header');
  }

  // Перемістіть наступний рядок всередину обробника подій scroll
  var clonedHeader = header.cloneNode(true);
  clonedHeader.classList.add('fixed_header_clone');
  document.querySelector('.page_home').appendChild(clonedHeader);
});

// Ось ваші функції openForm та closeForm
function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("overlay").style.display = "block"; // Показати overlay
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Приховати overlay
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function closeMenu() {
  var menu = document.getElementById("menu");
  menu.style.display = "none";
}


// how i work

var toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var block = this.parentNode;
        var description = block.nextElementSibling;

        // Змінюємо стиль відображення опису в залежності від поточного стану
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            this.innerHTML = '<img src="./image/minus.png">';
            block.style.backgroundColor = '#DDFF0B'; // Змінюємо колір фону блоку
        } else {
            description.style.display = 'none';
            this.innerHTML = '<img src="./image/plus.png">';
            block.style.backgroundColor = ''; // Скидаємо колір фону блоку
        }

        // Змінюємо border-radius в залежності від поточного стану
        var currentBorderRadius = window.getComputedStyle(block).borderRadius;
        if (currentBorderRadius === '20px') {
            block.style.borderBottomLeftRadius = '0px';
            block.style.borderBottomRightRadius = '0px';
            block.style.borderTopLeftRadius = '20px';
            block.style.borderTopRightRadius = '20px';
        } else {
            block.style.borderRadius = '0';
            this.innerHTML = '<img src="./image/plus.png">';
            // При натисканні на "-", всі кути знову стають квадратними
            block.style.borderRadius = '20px';
        }
    });
});



// portfolio

popup = {
    init: function(){
      $('figure').click(function(){
        popup.open($(this));
      });
      
      $(document).on('click', '.popup img', function(){
        return false;
      }).on('click', '.popup', function(){
        popup.close();
      })
    },
    open: function($figure) {
      $('.gallery').addClass('pop');
      $popup = $('<div class="popup" />').appendTo($('body'));
      $fig = $figure.clone().appendTo($('.popup'));
      $bg = $('<div class="bg" />').appendTo($('.popup'));
      $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
      $shadow = $('<div class="shadow" />').appendTo($fig);
      src = $('img', $fig).attr('src');
      $shadow.css({backgroundImage: 'url(' + src + ')'});
      $bg.css({backgroundImage: 'url(' + src + ')'});
      setTimeout(function(){
        $('.popup').addClass('pop');
      }, 10);
    },
    close: function(){
      $('.gallery, .popup').removeClass('pop');
      setTimeout(function(){
        $('.popup').remove()
      }, 100);
    }
  }
  
  popup.init()




// sublimit request form

function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("overlay").style.display = "block"; // Показати overlay
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("overlay").style.display = "none"; // Приховати overlay
}


// radial animation


  