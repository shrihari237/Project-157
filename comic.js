AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;
    this.createComics();
  },

  createComics: function () {
    let comicsArr = [
      {
        id: "cp-aero",
        title: "Captain Aero",
        url: "assets/posters/captain-aero-poster.jpg",
      },

      {
        id: "out-spa",
        title: "Outer Space",
        url: "assets/posters/outer-space-poster.jpg",
      },

      {
        id: "spider",
        title: "Spiderman",
        url: "assets/posters/spiderman-poster.jpg",
      },

      {
        id: "super",
        title: "Superman",
        url: "assets/posters/superman-poster.jpg",
      },
    ];

    let previousXPosition = -60;

    for (var item of comicsArr) {
      const posX = previousXPosition + 35;
      const posY = 10;
      const posZ = -80;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      var borderEl = this.createBorderEl(position, item.id);

      var thumbnailEl = this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);

      var titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },

  createThumbnail: function (item,) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "box",
      height: 28,
      width: 20,
    });
    entityEl.setAttribute('position',{x:0,y:5,z:0.1})
    entityEl.setAttribute("material", {
      src: item.url,
    });
    return entityEl;
  },

  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 60,
      color: "#e65100",
      value: item.title,
    });

    const elPosition = position;
    elPosition.y - -20;

    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "box",
      height: 9,
      width: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#00bcd4",
      opacity: 0.4,
    });
    return entityEl;
  },

  createBorderEl: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("geometry", {
      primitive: "box",
      height: 9,
      width: 9,
    });
    return entityEl;
  },
});
