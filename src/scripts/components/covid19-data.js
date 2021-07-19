import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import css from "../../styles/style.css";

class covid19Data extends HTMLElement {
  set covid19DataItem(item) {
    this._covid19DataItem = item;
    this.render();
  }

  render() {
    console.log(bootstrap);
    const dateUpdated = new Date(this._covid19DataItem.lastUpdate);
    const monthNames = ["Januari", "Februari", "Maret", "Aprl", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    this.innerHTML = "";
    this.innerHTML = `
    <style>
        ${bootstrap}
        ${css}
    </style>
    <div class="container mt-5">  
        <div>
            <h3>Live Update Covid19 Indonesia</h3>
            <p class="card-text">
                Update data ${dateUpdated.getDate()} ${monthNames[dateUpdated.getMonth()]} ${dateUpdated.getFullYear()}.
            </p>
        </div>

        <div class="card text-white text-center bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this._covid19DataItem.confirmed.value}</h5>
                <p class="card-text">Total Kasus</p>
            </div>
        </div>
        <div class="card text-white text-center bg-success mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this._covid19DataItem.recovered.value}</h5>
                <p class="card-text">Kasus Sembuh</p>
            </div>
        </div>

        <div class="card text-white text-center bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this._covid19DataItem.deaths.value}</h5>
                <p class="card-text">Korban Meninggal</p>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define("covid19-data", covid19Data);
