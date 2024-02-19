document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTopButton");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarNav = document.querySelector(".navbar-nav");

  navbarToggler.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });

  // Hide the navbar when clicking outside
  document.addEventListener("click", function (event) {
    if (!navbarToggler.contains(event.target) && !navbarNav.contains(event.target)) {
      navbarNav.classList.remove("show");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector("nav");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.classList.remove("transparent");
    } else {
      navbar.classList.add("transparent");
    }
  });
});

$(document).ready(function () {
  $("#contact_form")
    .bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh"
      },
      fields: {
        first_name: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your first name"
            }
          }
        },
        last_name: {
          validators: {
            stringLength: {
              min: 2
            },
            notEmpty: {
              message: "Please supply your last name"
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: "Please supply your email address"
            },
            emailAddress: {
              message: "Please supply a valid email address"
            }
          }
        },
        phone: {
          validators: {
            notEmpty: {
              message: "Please supply your phone number"
            },
            phone: {
              country: "US",
              message: "Please supply a vaild phone number with area code"
            }
          }
        },
        address: {
          validators: {
            stringLength: {
              min: 8
            },
            notEmpty: {
              message: "Please supply your street address"
            }
          }
        },
        city: {
          validators: {
            stringLength: {
              min: 4
            },
            notEmpty: {
              message: "Please supply your city"
            }
          }
        },
        state: {
          validators: {
            notEmpty: {
              message: "Please select your state"
            }
          }
        },
        zip: {
          validators: {
            notEmpty: {
              message: "Please supply your zip code"
            },
            zipCode: {
              country: "US",
              message: "Please supply a vaild zip code"
            }
          }
        },
        comment: {
          validators: {
            stringLength: {
              min: 10,
              max: 200,
              message:
                "Please enter at least 10 characters and no more than 200"
            },
            notEmpty: {
              message: "Please supply a description of your project"
            }
          }
        }
      }
    })
    .on("success.form.bv", function (e) {
      $("#success_message").slideDown({ opacity: "show" }, "slow"); // Do something ...
      $("#contact_form").data("bootstrapValidator").resetForm();

      // Prevent form submission
      e.preventDefault();

      // Get the form instance
      var $form = $(e.target);

      // Get the BootstrapValidator instance
      var bv = $form.data("bootstrapValidator");

      // Use Ajax to submit form data
      $.post(
        $form.attr("action"),
        $form.serialize(),
        function (result) {
          console.log(result);
        },
        "json"
      );
    });
});
