import { config } from "./config.js";
class CreateInvoiceData {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.invoiceDate = new Date();
  }
}

async function createInvoice() {
  try {
    const response = await fetch(`${config.BACKEND_URL}/hello`);
    if (!response.ok) {
      throw new Error(`Response failed with status - ${response.status}`);
    }
    const data = response.json();
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
  console.log(formData);

  createInvoice();
}

document
  .getElementById("createInvoiceForm")
  .addEventListener("submit", handleSubmit);
