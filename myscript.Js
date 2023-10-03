document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.getElementById('scroll-btn');
  
    scrollBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      setTimeout(function() {
        window.scrollTo({
          top: 750,
          behavior: 'smooth',
        });
      }, 300);  
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.getElementById('home');
  
    scrollBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      setTimeout(function() {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      }, 300); // تنظیم زمان تغییر رنگ دکمه و اسکرول
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('home');
  
    myButton.addEventListener('click', function() {
      this.classList.add('clicked');
  
      // با استفاده از تابع setTimeout می‌توانید کلاس "clicked" را پس از مدت زمان دلخواه حذف کنید
      setTimeout(function() {
        myButton.classList.remove('clicked');
      }, 500); // به عنوان مثال، کلاس "clicked" پس از 2 ثانیه حذف می‌شود
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('scroll-btn');
  
    myButton.addEventListener('click', function() {
      this.classList.add('clicked');
  
      // با استفاده از تابع setTimeout می‌توانید کلاس "clicked" را پس از مدت زمان دلخواه حذف کنید
      setTimeout(function() {
        myButton.classList.remove('clicked');
      }, 500); // به عنوان مثال، کلاس "clicked" پس از 2 ثانیه حذف می‌شود
    });
  }); 
  document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.getElementById('cont');
  
    scrollBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      setTimeout(function() {
        window.scrollTo({
          top: 2300,
          behavior: 'smooth',
        });
      }, 300); // تنظیم زمان تغییر رنگ دکمه و اسکرول
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var scrollBtn = document.getElementById('abou');
  
    scrollBtn.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.add('clicked');
      setTimeout(function() {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      }, 300); // تنظیم زمان تغییر رنگ دکمه و اسکرول
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('cont');
  
    myButton.addEventListener('click', function() {
      this.classList.add('clicked');
  
      // با استفاده از تابع setTimeout می‌توانید کلاس "clicked" را پس از مدت زمان دلخواه حذف کنید
      setTimeout(function() {
        myButton.classList.remove('clicked');
      }, 500); // به عنوان مثال، کلاس "clicked" پس از 2 ثانیه حذف می‌شود
    });
  }); 
  document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('abou');
  
    myButton.addEventListener('click', function() {
      this.classList.add('clicked');
  
      // با استفاده از تابع setTimeout می‌توانید کلاس "clicked" را پس از مدت زمان دلخواه حذف کنید
      setTimeout(function() {
        myButton.classList.remove('clicked');
      }, 500); // به عنوان مثال، کلاس "clicked" پس از 2 ثانیه حذف می‌شود
    });
  }); 