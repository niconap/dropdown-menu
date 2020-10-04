const Show = function (menuclass, buttonid, image1, image2) {
  this.menu = menuclass;
  this.button = buttonid;
  this.toggle = false;
  this.image1 = image1;
  this.image2 = image2;

  const obj = this;
  const assignButton = function () {
    obj.button.addEventListener("click", function () {
      if (!obj.toggle) {
        document.documentElement.style.setProperty("--display-menu", "block");
        obj.button.setAttribute("src", obj.image2);
        obj.toggle = true;
      } else {
        document.documentElement.style.setProperty("--display-menu", "none");
        obj.button.setAttribute("src", obj.image1);
        obj.toggle = false;
      }
    });
  };

  this.configure = function () {
    assignButton();
  };
};

const s = new Show(
  document.getElementsByClassName("menu-item"),
  document.getElementById("hamburger"),
  "Hamburger_icon.svg.png",
  "img_529017.png"
);

s.configure();
