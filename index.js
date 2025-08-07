function showPhotos() {
      const gallery = document.getElementById("photoGallery");
      gallery.innerHTML = "";

      const batch = document.getElementById("batch").value;
      const branch = document.getElementById("branch").value;
      const start = parseInt(document.getElementById("startRoll").value);
      const end = parseInt(document.getElementById("endRoll").value);

      if (isNaN(start) || isNaN(end) || start > end || start < 1 || end > 999) {
        alert("Please enter a valid roll number range from 1 to 999.");
        return;
      }

      const prefix = `${batch}${branch}`;

      for (let i = start; i <= end; i++) {
        const rollNum = i.toString().padStart(3, '0');
        const fullRoll = `${prefix}${rollNum}`;
        const imgUrl = `https://gietuerp.in/StudentDocuments/${fullRoll}/${fullRoll}.JPG`;

        const card = document.createElement("div");
        card.className = "card";
        card.style.animationDelay = `${(i - start) * 0.1}s`;

        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = fullRoll;
        img.onerror = function () {
          this.src = "https://via.placeholder.com/200x250?text=Not+Found";
        };

        const caption = document.createElement("div");
        caption.className = "roll";
        caption.textContent = fullRoll;

        card.appendChild(img);
        card.appendChild(caption);
        gallery.appendChild(card);
      }
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        showPhotos();
      }
    });