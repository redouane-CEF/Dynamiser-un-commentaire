document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const messageInput = document.getElementById("message");
    const errorMessage = document.getElementById("error-message");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Empêche le rechargement de la page
  
      // Vérifie si tous les champs sont remplis
      if (
        firstNameInput.value.trim() === "" ||
        lastNameInput.value.trim() === "" ||
        messageInput.value.trim() === ""
      ) {
        errorMessage.style.display = "block"; // Affiche le message d'erreur
      } else {
        errorMessage.style.display = "none"; // Cache le message d'erreur
  
        // Ajout d'un commentaire (optionnel si vous voulez un effet dynamique)
        const commentList = document.getElementById("comment-list");
        const newComment = document.createElement("div");
        newComment.className = "flex space-x-4 text-sm text-gray-500";
        newComment.innerHTML = `
          <div class="flex-1 py-10 border-t border-gray-200">
            <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500">
              <p>${messageInput.value}</p>
            </div>
          </div>
        `;
        commentList.appendChild(newComment);
  
        // Réinitialise le formulaire
        form.reset();
      }
    });
  });
  