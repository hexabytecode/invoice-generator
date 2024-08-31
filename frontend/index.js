let config;

(async function loadConfig() {
  try {
    if (
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname === "localhost"
    ) {
      const module = await import("./config/config.dev.js");
      config = module.config;
    } else {
      const module = await import("./config/config.prod.js");
      config = module.config;
    }

    // After loading the config, initialize your app
    initializeApp();
  } catch (e) {
    console.error("Failed to load configuration:", e);
  }
})();

function initializeApp() {
  class CreateInvoiceData {
    constructor(name, address, email) {
      this.name = name;
      this.address = address;
      this.email = email;
      this.invoiceDate = new Date();
    }
  }

  async function createInvoice(formData) {
    try {
      const response = await fetch(`${config.BACKEND_URL}/api/invoice`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`Response failed with status - ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formInput = event.target.elements;
    const formData = new CreateInvoiceData(
      formInput.name.value,
      formInput.address.value,
      formInput.email.value
    );
    createInvoice(formData);
  }

  document
    .getElementById("createInvoiceForm")
    .addEventListener("submit", handleSubmit);
}
