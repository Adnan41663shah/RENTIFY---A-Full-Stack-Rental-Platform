
document.addEventListener('DOMContentLoaded', function () {
  const wishlistIcons = document.querySelectorAll('.wishlist-icon');

  wishlistIcons.forEach(icon => {
    icon.addEventListener('click', function (event) {
      event.stopPropagation();
      event.preventDefault();

      const listingId = this.getAttribute('data-listing-id');

      fetch('/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listingId: listingId })
      })
        .then(response => {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            return response.json().then(data => ({ status: response.status, body: data }));
          } else {
            // Handle non-JSON response (like HTML for redirect)
            return response.text().then(text => ({ status: response.status, body: { success: false, message: 'Please login to continue.' } }))
          }
        })
        .then(({ status, body }) => {
          if (status === 201) {
            Toastify({
              text: body.message,
              duration: 3000,
              gravity: "top",
              position: "right",
              style: {
                background: "#4CAF50",
                borderRadius: "1rem"
              }
            }).showToast();
            this.classList.add('red-heart');
          } else if (status === 409) {
            Toastify({
              text: body.message,
              duration: 3000,
              gravity: "top",
              position: "right",
              style: {
                background: "#545900ff",
                borderRadius: "1rem"
              }
            }).showToast();
          } else if (status === 401) {
            Toastify({
              text: body.message || "Please login to add to wishlist",
              duration: 3000,
              gravity: "top",
              position: "right",
              style: {
                background: "#ff4f4fff",
                borderRadius: "1rem"
              }
            }).showToast();
            setTimeout(() => {
              window.location.href = '/login';
            }, 1500);
          } else {
            Toastify({
              text: body.message || "Something went wrong",
              duration: 3000,
              gravity: "top",
              position: "right",
              style: {
                background: "#ff0000ff",
                borderRadius: "1rem"
              }
            }).showToast();
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Toastify({
            text: 'Network error occurred',
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
              background: "#FF0000",
                borderRadius: "1rem"
            }
          }).showToast();
        });
    });
  });
});
